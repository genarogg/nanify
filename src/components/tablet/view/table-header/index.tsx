"use client"

import React from "react"
import { Search, Printer } from "lucide-react"
import "./table-header.css"

import AddUsuario from "../modal-crud/AddUsuario"
import TableConfigModal from "../modal-crud/TableConfigModal"
import { useTableState, useUIConfig, useFilterConfig } from "../../context/TableContext"
import useRoleFilter from "./hook/useRoleFilter"

const TableHeader: React.FC = () => {
  const { searchTerm, handleSearch, getSelectedItems, dataLoading, dataError, refetchData, isUsingFallback } =
    useTableState()
  const { title, searchPlaceholder } = useUIConfig()
  const { dateFrom, dateTo, onDateFromChange, onDateToChange } = useFilterConfig()

  // Componente de filtro de roles en una sola línea
  const { RoleFilterSelect } = useRoleFilter()

  const handlePrintSelected = (): void => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
      console.log("No hay elementos seleccionados para imprimir")
      return
    }
    console.log("Elementos seleccionados para imprimir:", selectedItems)
  }

  const handleDateFromChangeLocal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Fecha desde cambiada:", e.target.value)
    onDateFromChange(e.target.value)
  }

  const handleDateToChangeLocal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Fecha hasta cambiada:", e.target.value)
    onDateToChange(e.target.value)
  }

  return (
    <div className="table-header-container">
      {/* Título principal */}
      <div className="table-header-title-section">
        <h1 className="table-title">{title}</h1>
        {dataLoading && (
          <div className="data-status-indicator loading">
            <span className="status-dot loading"></span>
            <span className="status-text">Cargando datos...</span>
          </div>
        )}

        {dataError && (
          <div className="data-status-indicator error">
            <span className="status-dot error"></span>
            <span className="status-text">Error: {dataError}</span>
            <button className="retry-btn" onClick={refetchData}>
              Reintentar
            </button>
          </div>
        )}

        {isUsingFallback && !dataLoading && (
          <div className="data-status-indicator fallback">
            <span className="status-dot fallback"></span>
            <span className="status-text">Usando datos de ejemplo</span>
          </div>
        )}
      </div>

      {/* Línea separadora */}
      <div className="table-header-divider"></div>

      {/* Controles */}
      <div className="table-header-controls-section">
        <div className="table-search-container">
          <Search className="table-search-icon" size={20} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="table-search-input"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* Filtros de fecha */}
        <div className="table-date-filters-container">
          <div className="date-filter-group">
            <label htmlFor="fecha-desde" className="date-filter-label">
              Fecha desde
            </label>
            <input
              id="fecha-desde"
              type="date"
              className="table-date-input"
              value={dateFrom}
              onChange={handleDateFromChangeLocal}
            />
          </div>

          <div className="date-filter-group">
            <label htmlFor="fecha-hasta" className="date-filter-label">
              Fecha hasta
            </label>
            <input
              id="fecha-hasta"
              type="date"
              className="table-date-input"
              value={dateTo}
              onChange={handleDateToChangeLocal}
            />
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="table-modal-buttons-container">
          <button className="modal-trigger" onClick={handlePrintSelected} title="Imprimir seleccionados">
            <span className="modal-trigger-icon">
              <Printer size={16} />
            </span>
          </button>

          <div className="modal-button-wrapper">
            <TableConfigModal />
          </div>

          <div className="modal-button-wrapper">
            <AddUsuario />
          </div>

          <div className="modal-button-wrapper">
            <RoleFilterSelect />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableHeader