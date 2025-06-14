"use client"

import { useTableContext } from "../context/TableContext"
import { useTableActions } from "../hooks/useTableActions"
import TableCardView from "./table-card-view"
import TableView from "./table-view"
import TableHeader from "./table-header"
import Pagination from "./pagination"

export default function TableContent() {
  const { tableState, responsiveViewState, config } = useTableContext()

  const { handleItemSelect, handleEditItemClick, handleViewItemClick, handleDeleteItemClick } = useTableActions()

  const { currentItems, selectedItems, handleSelectAll, getSelectAllState, updateItem } = tableState
  const { select, cuadricula, columns } = config

  // Calculamos si hay elementos filtrados basándonos en si currentItems tiene elementos
  const hasFilteredItems = currentItems && currentItems.length > 0

  const renderTableContent = () => {
    if (responsiveViewState.viewMode === "table") {
      return (
        <TableView
          items={currentItems}
          selectedItems={selectedItems}
          columns={columns}
          select={select}
          cuadricula={cuadricula}
          onSelectItem={handleItemSelect}
          onSelectAll={handleSelectAll}
          getSelectAllState={getSelectAllState}
          onEditItem={handleEditItemClick}
          onViewItem={handleViewItemClick}
          onDeleteItem={handleDeleteItemClick}
          updateItem={updateItem}
        />
      )
    }

    return (
      <TableCardView
        items={currentItems}
        selectedItems={selectedItems}
        onSelectItem={handleItemSelect}
        onEditItem={handleEditItemClick}
        onViewItem={handleViewItemClick}
        onDeleteItem={handleDeleteItemClick}
        showSelection={select}
      />
    )
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
    </div>
  )
}
