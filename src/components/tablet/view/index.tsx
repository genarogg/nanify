"use client"

import { useTableContext } from "../context/TableContext"

import TableCardView from "./table-card-view"
import TableView from "./table-view"
import TableHeader from "./table-header"
import TableFooter from "./table-footer"
import Pagination from "./pagination"

import "./css/index.css"

export default function TableContent() {
  const { tableState, responsiveViewState } = useTableContext()

  const { currentItems } = tableState

  // Calculamos si hay elementos filtrados basándonos en si currentItems tiene elementos
  const hasFilteredItems = currentItems && currentItems.length > 0

  return (
    <div className="table-management-container">
      
      <TableHeader />

      {hasFilteredItems &&
        <>
          {responsiveViewState.viewMode === "table" ? <TableView /> : <TableCardView />}
          <Pagination />
          <TableFooter />
        </>
      }

      {!hasFilteredItems && (
        <div className="no-results">
          <p>No se encontraron elementos que coincidan con la búsqueda.</p>
        </div>
      )}

    </div>
  )
}
