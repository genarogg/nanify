"use client"

import "./pagination.css"
import { usePagination } from "../../../context/hooks/usePagination"
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react"

interface TablePaginationProps {
  // Configuración del hook de paginación
  maxPagesToShow?: number
  showEllipsis?: boolean
  showPrevNext?: boolean
  // Configuración de UI
  showPaginationInfo?: boolean
  paginationInfoText?: string
  // Callbacks opcionales
  onPageChange?: (page: number) => void
  onItemsPerPageChange?: (itemsPerPage: number) => void
  // Configuración de visualización
  showInfo?: boolean
  showControls?: boolean
  customInfoTemplate?: string
  forceCompact?: boolean
}

const TablePagination = ({
  maxPagesToShow = 5,
  showEllipsis = true,
  showPrevNext = true,
  showPaginationInfo = true,
  paginationInfoText = "{start} a {end} de {total}",
  onPageChange,
  onItemsPerPageChange,
  showInfo = true,
  showControls = true,
  customInfoTemplate,
  forceCompact = false,
}: TablePaginationProps = {}) => {

  const { info, controls, display, uiConfig, isEmpty, isLoading, hasError } = usePagination({
    maxPagesToShow,
    showFirstLast: false,
    showEllipsis,
    showPrevNext,
    showPaginationInfo,
    paginationInfoText,
    previousText: "",
    nextText: "",
    onPageChange,
    onItemsPerPageChange,
  })

  // Función para generar números de página con primer y último elemento siempre visibles
  const getPageNumbersWithFirstLast = () => {
    const { currentPage, totalPages } = info
    const maxPages = forceCompact ? 3 : maxPagesToShow

    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const pages: (number | string)[] = []

    // Siempre incluir página 1
    pages.push(1)

    // Calcular rango alrededor de la página actual
    const halfRange = Math.floor((maxPages - 2) / 2)
    let start = Math.max(2, currentPage - halfRange)
    let end = Math.min(totalPages - 1, currentPage + halfRange)

    // Ajustar el rango si está muy cerca del inicio o final
    if (currentPage <= halfRange + 2) {
      end = Math.min(totalPages - 1, maxPages - 1)
    } else if (currentPage >= totalPages - halfRange - 1) {
      start = Math.max(2, totalPages - maxPages + 2)
    }

    // Agregar ellipsis si hay gap después de 1
    if (start > 2) {
      pages.push('...')
    }

    // Agregar páginas del rango
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // Agregar ellipsis si hay gap antes de la última
    if (end < totalPages - 1) {
      pages.push('...')
    }

    // Siempre incluir última página (si no es la página 1)
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  // Función para obtener el texto de paginación
  const getPaginationText = () => {
    if (customInfoTemplate) {
      return display.formatPaginationText(customInfoTemplate)
    }
    return display.paginationText
  }

  // No mostrar nada si está cargando o hay error
  if (isLoading || hasError || isEmpty) {
    return null
  }

  return (
    <div className={`table-pagination-container ${forceCompact ? 'force-compact' : ''}`}>
      {showInfo && uiConfig.showPaginationInfo && (
        <div className="table-pagination-info">
          <span className="pagination-info-text">
            {getPaginationText()}
          </span>
        </div>
      )}

      {showControls && info.totalPages > 1 && (
        <div className="table-pagination-controls">
          {/* Botón Anterior */}
          {uiConfig.showPrevNext && (
            <button
              className="table-pagination-btn table-pagination-prev"
              onClick={controls.goToPreviousPage}
              disabled={!info.hasPreviousPage}
              title="Página anterior"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Números de página */}
          {getPageNumbersWithFirstLast().map((pageNum, index) =>
            typeof pageNum === "number" ? (
              <button
                key={`page-${pageNum}`}
                className={`table-pagination-btn table-page-number ${pageNum === info.currentPage ? "active" : ""}`}
                onClick={() => controls.goToPage(pageNum)}
                title={`Ir a la página ${pageNum}`}
              >
                {pageNum}
              </button>
            ) : (
              <span key={`ellipsis-${index}`} className="table-pagination-ellipsis">
                <MoreHorizontal size={16} />
              </span>
            ),
          )}

          {/* Botón Siguiente */}
          {uiConfig.showPrevNext && (
            <button
              className="table-pagination-btn table-pagination-next"
              onClick={controls.goToNextPage}
              disabled={!info.hasNextPage}
              title="Página siguiente"
            >
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default TablePagination