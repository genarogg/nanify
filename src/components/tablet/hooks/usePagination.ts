"use client"

import { useState, useMemo } from "react";

interface UsePaginationProps<T> {
  items: T[]
  itemsPerPage: number
}

interface UsePaginationReturn<T> {
  // Estados
  currentPage: number
  totalPages: number
  currentItems: T[]

  // Funciones de navegación
  goToPage: (page: number) => void
  goToNextPage: () => void
  goToPreviousPage: () => void

  // Utilidades
  getPageNumbers: () => (number | string)[]
  resetToFirstPage: () => void

  // Información adicional
  hasNextPage: boolean
  hasPreviousPage: boolean
  startIndex: number
  endIndex: number
}

export const usePagination = <T>({ 
  items, 
  itemsPerPage 
}: UsePaginationProps<T>): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(1)

  // Calcular el número total de páginas
  const totalPages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage)
  }, [items.length, itemsPerPage])

  // Obtener los elementos para la página actual
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }, [items, currentPage, itemsPerPage])

  // Calcular índices de inicio y fin para información adicional
  const startIndex = useMemo(() => {
    return items.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  }, [currentPage, itemsPerPage, items.length])

  const endIndex = useMemo(() => {
    const calculatedEnd = currentPage * itemsPerPage
    return Math.min(calculatedEnd, items.length)
  }, [currentPage, itemsPerPage, items.length])

  // Información sobre navegación
  const hasNextPage = currentPage < totalPages
  const hasPreviousPage = currentPage > 1

  // Funciones para manejar la paginación
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const goToNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const resetToFirstPage = () => {
    setCurrentPage(1)
  }

  // Generar array de números de página para mostrar
  const getPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Siempre mostrar la primera página
      pageNumbers.push(1)

      // Calcular el rango de páginas alrededor de la página actual
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Ajustar si estamos cerca del inicio
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4)
      }

      // Ajustar si estamos cerca del final
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3)
      }

      // Agregar elipsis después de la primera página si es necesario
      if (startPage > 2) {
        pageNumbers.push("...")
      }

      // Agregar páginas del rango calculado
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // Agregar elipsis antes de la última página si es necesario
      if (endPage < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Siempre mostrar la última página
      if (totalPages > 1) {
        pageNumbers.push(totalPages)
      }
    }

    return pageNumbers
  }

  return {
    // Estados
    currentPage,
    totalPages,
    currentItems,
    
    // Funciones de navegación
    goToPage,
    goToNextPage,
    goToPreviousPage,
    
    // Utilidades
    getPageNumbers,
    resetToFirstPage,
    
    // Información adicional
    hasNextPage,
    hasPreviousPage,
    startIndex,
    endIndex,
  }
}

// Exportar el tipo para uso externo
export type { UsePaginationReturn }