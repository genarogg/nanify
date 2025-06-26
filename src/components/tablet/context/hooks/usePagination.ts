"use client"

<<<<<<< HEAD:src/components/tablet/hooks/usePagination.ts
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
=======
import { useMemo } from "react"
import { useTableState } from "../TableContext"

// Configuración básica del hook
interface PaginationConfig {
  maxPagesToShow?: number
  showFirstLast?: boolean
  showEllipsis?: boolean
  paginationText?: string
  onPageChange?: (page: number) => void
}

// Información básica de paginación
interface PaginationInfo {
  currentPage: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

// Controles de navegación
interface PaginationControls {
  goToPage: (page: number) => void
  goNext: () => void
  goPrev: () => void
}

// Resultado del hook
interface UsePaginationResult {
  info: PaginationInfo
  controls: PaginationControls
  pageNumbers: (number | string)[]
  paginationText: string
  isEmpty: boolean
  isLoading: boolean
}

// Hook principal simplificado
export const usePagination = (config: PaginationConfig = {}): UsePaginationResult => {
  const {
    maxPagesToShow = 5,
    showFirstLast = true,
    showEllipsis = true,
    paginationText = "Mostrando {start} a {end} de {total} elementos",
    onPageChange,
  } = config

  // Obtener datos del contexto
  const {
    currentPage,
    totalPages,
    itemsPerPage,
    filteredCount,
    dataLoading,
    goToPage: contextGoToPage,
    goToNextPage: contextGoToNextPage,
    goToPreviousPage: contextGoToPreviousPage,
  } = useTableState()

  // Información básica de paginación
  const info: PaginationInfo = useMemo(() => ({
    currentPage,
    totalPages,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  }), [currentPage, totalPages])

  // Controles de navegación
  const controls: PaginationControls = useMemo(() => {
    const handlePageChange = (page: number) => {
      contextGoToPage(page)
      onPageChange?.(page)
    }

    return {
      goToPage: handlePageChange,
      goNext: () => {
        if (info.hasNext) {
          contextGoToNextPage()
          onPageChange?.(currentPage + 1)
        }
      },
      goPrev: () => {
        if (info.hasPrev) {
          contextGoToPreviousPage()
          onPageChange?.(currentPage - 1)
        }
      },
    }
  }, [currentPage, info.hasNext, info.hasPrev, contextGoToPage, contextGoToNextPage, contextGoToPreviousPage, onPageChange])

  // Generar números de página - CORREGIDO
  const pageNumbers = useMemo((): (number | string)[] => {
    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const pages: (number | string)[] = []
    const half = Math.floor(maxPagesToShow / 2)

    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, currentPage + half)

    // Ajustar si estamos cerca de los extremos
    if (currentPage <= half) {
      end = Math.min(totalPages, maxPagesToShow)
    } else if (currentPage >= totalPages - half) {
      start = Math.max(1, totalPages - maxPagesToShow + 1)
    }

    // Si showFirstLast es false, simplemente agregamos todas las páginas del rango
    if (!showFirstLast) {
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    }

    // Lógica para showFirstLast = true
    // Siempre mostrar la primera página si no está en el rango
    if (start > 1) {
      pages.push(1)
      if (showEllipsis && start > 2) {
        pages.push("...")
      }
    }

    // Páginas del rango (excluyendo primera y última si ya las agregamos)
    for (let i = start; i <= end; i++) {
      // Solo agregar si no es la primera página (ya agregada) o la última (se agregará después)
      if (i !== 1 && i !== totalPages) {
        pages.push(i)
      }
      // Si start es 1, sí incluir la página 1
      else if (i === 1 && start === 1) {
        pages.push(i)
      }
      // Si end es totalPages, sí incluir la última página
      else if (i === totalPages && end === totalPages) {
        pages.push(i)
      }
    }

    // Siempre mostrar la última página si no está en el rango
    if (end < totalPages) {
      if (showEllipsis && end < totalPages - 1) {
        pages.push("...")
      }
      pages.push(totalPages)
    }

    return pages
  }, [currentPage, totalPages, maxPagesToShow, showFirstLast, showEllipsis])

  // Texto de paginación
  const formattedPaginationText = useMemo(() => {
    if (filteredCount === 0) {
      return "No hay elementos para mostrar"
    }

    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, filteredCount)

    return paginationText
      .replace("{start}", startItem.toString())
      .replace("{end}", endItem.toString())
      .replace("{total}", filteredCount.toString())
  }, [currentPage, itemsPerPage, filteredCount, paginationText])

  return {
    info,
    controls,
    pageNumbers,
    paginationText: formattedPaginationText,
    isEmpty: filteredCount === 0,
    isLoading: dataLoading,
  }
}

// Exportar tipos
export type { PaginationConfig, PaginationInfo, PaginationControls, UsePaginationResult }
>>>>>>> tablet:src/components/tablet/context/hooks/usePagination.ts
