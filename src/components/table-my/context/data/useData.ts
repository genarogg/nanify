"use client"

import { useCallback } from "react"
import { useGlobalZustand } from "../Global"
import dataFake from "./data-fake"

const useData = () => {
    const { setData } = useGlobalZustand()
    const API = "http://localhost:3001/usuarios"

    const initialData = useCallback(
        async (page = 1, limit = 10) => {
            setData({ loading: true })
            try {
                
                const res = await fetch(API)

                const json = await res.json()
                
                console.log("Datos obtenidos:",json)


              
                console.log(json.data)

                // Calcular paginación para datos locales
                const allItems = json.data
                const startIndex = (page - 1) * limit
                const endIndex = startIndex + limit
                const paginatedItems = allItems.slice(startIndex, endIndex)
                const totalPages = Math.ceil(allItems.length / limit)

                setData({
                    items: allItems,
                    totalItems: allItems.length,
                    page,
                    totalPages,
                    loading: false,
                })
            } catch (error) {
                console.error("Error fetching data:", error)
                // Fallback con datos fake paginados
                const allItems = dataFake.usuarios.data
                const startIndex = (page - 1) * limit
                const endIndex = startIndex + limit
                const paginatedItems = allItems.slice(startIndex, endIndex)
                const totalPages = Math.ceil(allItems.length / limit)

                setData({
                    items: paginatedItems,
                    totalItems: allItems.length,
                    page,
                    totalPages,
                    loading: false,
                })
            }
        },
        [setData],
    )

    return { initialData }
}

export default useData
