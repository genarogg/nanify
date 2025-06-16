"use client"

import { useTableContext } from "../context/TableContext"

import TableCardView from "./table-card-view"
import TableView from "./table-view"
import TableHeader from "./table-header"
import TableFooter from "./table-footer"
import Pagination from "./pagination"

export default function TableContent() {
  const { tableState, responsiveViewState } = useTableContext()

  const { currentItems } = tableState

  // Calculamos si hay elementos filtrados basándonos en si currentItems tiene elementos
  const hasFilteredItems = currentItems && currentItems.length > 0

  const renderTableContent = () => {
    if (responsiveViewState.viewMode === "table") {
      return <TableView />
    }

    return <TableCardView />
  }

  return (
    <div className="table-management-container">
      <TableHeader />

      {renderTableContent()}

      {!hasFilteredItems && (
        <div className="no-results">
          <p>No se encontraron elementos que coincidan con la búsqueda.</p>
        </div>
      )}

      {hasFilteredItems && <Pagination />}

      <TableFooter />
    </div>
  )
}