"use client"

import "./pagination.css"
import { useTableState, useUIConfig } from "../../context/TableContext"

export default function TablePagination() {
  const { currentPage, totalPages, goToPage, goToNextPage, goToPreviousPage, getPageNumbers } = useTableState()

  const { showPaginationInfo, paginationInfoText, previousText, nextText } = useUIConfig()

  const defaultInfoText = `Página ${currentPage} de ${totalPages}`

  return (
    <div className="table-pagination-container">
      {showPaginationInfo && <div className="table-pagination-info">{paginationInfoText || defaultInfoText}</div>}

      <div className="table-pagination-controls">
        <button className="table-pagination-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
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

        <button className="table-pagination-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
          <span>{nextText}</span>
        </button>
      </div>
    </div>
  )
}
