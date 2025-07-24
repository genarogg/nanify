"use client"

import React from "react"
import { useState, useEffect, useCallback } from "react"

import type { DataTable } from "../types"
import dataFake from "./data-fake"

interface UseTableDataReturn {
  data: DataTable[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  setData: React.Dispatch<React.SetStateAction<DataTable[]>>
  isUsingFallback: boolean
}

// Función para validar la estructura de un usuario
const validateUserData = (user: any): boolean => {
  const requiredFields = ["id", "nombre", "correo", "telefono", "cedula", "rol", "status"]
  return requiredFields.every(field => 
    field in user && user[field] !== null && user[field] !== undefined
  )
}

// Función para transformar datos si es necesario
const processApiData = (rawData: any[]): DataTable[] => {
  return rawData.filter(validateUserData).map(user => ({
    id: Number(user.id),
    nombre: String(user.nombre),
    correo: String(user.correo),
    telefono: String(user.telefono),
    cedula: String(user.cedula),
    rol: String(user.rol),
    status: String(user.status)
  }))
}

export const useTableData = (): UseTableDataReturn => {
  // Siempre inicia con dataFake como estado base
  const [data, setData] = useState<DataTable[]>(dataFake.data)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isUsingFallback, setIsUsingFallback] = useState(true)

  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:3001/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const result = await response.json()

      if (!Array.isArray(result.data)) {
        throw new Error("La respuesta del servidor no es un array válido")
      }

      const processedData = processApiData(result.data)

      if (processedData.length === 0 && result.data.length > 0) {
        console.warn("Algunos datos no pasaron la validación y fueron filtrados")
      }

      // Si los datos del API son válidos, usarlos
      if (processedData.length > 0) {
        setData(processedData)
        setIsUsingFallback(false)
        console.log("Datos cargados exitosamente desde el API")
      } else {
        console.warn("API no devolvió datos válidos, manteniendo dataFake")
        setData(dataFake.data)
        setIsUsingFallback(true)
        setError("No se obtuvieron datos válidos del servidor, usando datos de prueba")
      }

    } catch (err) {
      let errorMessage = "Error desconocido"
      
      if (err instanceof Error) {
        if (err.message.includes('fetch')) {
          errorMessage = "Error de conexión con el servidor"
        } else {
          errorMessage = err.message
        }
      }

      console.error("Error al obtener datos del servidor:", err)
      console.log("Manteniendo dataFake como fallback debido a error en el API")
      
      setError(errorMessage)
      setData(dataFake.data)
      setIsUsingFallback(true)

    } finally {
      setLoading(false)
    }
  }, [])

  const refetch = useCallback(async (): Promise<void> => {
    await fetchData()
  }, [fetchData])

  // Fetch automático al montar el componente
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    loading,
    error,
    refetch,
    setData,
    isUsingFallback,
  }
}