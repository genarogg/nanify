"use client"

import "./pagination.css"
import { useTableState, useUIConfig } from "../../context/TableContext"

export default function TablePagination() {
  
  const { 
    currentPage, 
    totalPages, 
    goToPage, 
    goToNextPage, 
    goToPreviousPage, 
    getPageNumbers,
    itemsPerPage,
    filteredCount
  } = useTableState()

  const { showPaginationInfo, paginationInfoText, previousText, nextText } = useUIConfig()

  // Calcular los números de inicio y fin para la paginación
  const startItem = filteredCount === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, filteredCount)
  const totalItems = filteredCount

  // Función para reemplazar los placeholders en el texto de paginación
  const formatPaginationText = (text: string) => {
    return text
      .replace('{start}', startItem.toString())
      .replace('{end}', endItem.toString())
      .replace('{total}', totalItems.toString())
  }

  // Texto por defecto si no se proporciona uno personalizado
  const defaultInfoText = `Mostrando ${startItem} a ${endItem} de ${totalItems} elementos`

  // Usar el texto personalizado o el por defecto
  const displayText = paginationInfoText 
    ? formatPaginationText(paginationInfoText)
    : defaultInfoText

  return (
    <div className="table-pagination-container">
      {showPaginationInfo && (
        <div className="table-pagination-info">
          {displayText}
        </div>
      )}

      <div className="table-pagination-controls">
        <button 
          className="table-pagination-btn" 
          onClick={goToPreviousPage} 
          disabled={currentPage === 1 || totalPages === 0}
        >
          <span>{previousText}</span>
        </button>

        {getPageNumbers().map((pageNum, index) =>
          typeof pageNum === "number" ? (
            <button
              key={index}
              className={`table-pagination-btn table-page-number ${pageNum === currentPage ? "active" : ""}`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          ) : (
            <span key={index} className="table-pagination-ellipsis">
              {pageNum}
            </span>
          ),
        )}

        <button 
          className="table-pagination-btn" 
          onClick={goToNextPage} 
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <span>{nextText}</span>
        </button>
      </div>
    </div>
  )
}