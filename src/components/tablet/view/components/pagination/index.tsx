"use client"

import { usePagination } from "../../../context/hooks/usePagination"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import "./pagination.css"

interface TablePaginationProps {
  maxPagesToShow?: number
  showEllipsis?: boolean
  showInfo?: boolean
  showControls?: boolean
  compact?: boolean
  paginationText?: string
  onPageChange?: (page: number) => void
}

const TablePagination = ({
  maxPagesToShow = 5,
  showEllipsis = true,
  showInfo = true,
  showControls = true,
  compact = false,
  paginationText,
  onPageChange,
}: TablePaginationProps) => {
  const pagination = usePagination({
    maxPagesToShow: compact ? 3 : maxPagesToShow,
    showFirstLast: true,
    showEllipsis,
    paginationText,
    onPageChange,
  })

  const { info, controls, pageNumbers, paginationText: text, isEmpty, isLoading } = pagination

  // No mostrar si está vacío, cargando o solo hay una página
  if (isEmpty || isLoading || info.totalPages <= 1) {
    return null
  }

  return (
    <div className={`table-pagination-container ${compact ? 'compact' : ''}`}>
      {/* Información de paginación */}
      {showInfo && (
        <div className="table-pagination-info">
          <span className="pagination-info-text">{text}</span>
        </div>
      )}

      {/* Controles de paginación */}
      {showControls && (
        <div className="table-pagination-controls">
          {/* Botón Anterior */}
          <button
            className="table-pagination-btn table-pagination-prev"
            onClick={controls.goPrev}
            disabled={!info.hasPrev}
            title="Página anterior"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Números de página */}
          {pageNumbers.map((pageNum, index) =>
            typeof pageNum === "number" ? (
              <button
                key={`page-${pageNum}`}
                className={`table-pagination-btn table-page-number ${
                  pageNum === info.currentPage ? "active" : ""
                }`}
                onClick={() => controls.goToPage(pageNum)}
                title={`Ir a la página ${pageNum}`}
              >
                {pageNum}
              </button>
            ) : (
              <span key={`ellipsis-${index}`} className="table-pagination-ellipsis">
                <MoreHorizontal size={16} />
              </span>
            )
          )}

          {/* Botón Siguiente */}
          <button
            className="table-pagination-btn table-pagination-next"
            onClick={controls.goNext}
            disabled={!info.hasNext}
            title="Página siguiente"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default TablePagination