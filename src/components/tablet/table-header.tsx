"use client"

import { Search, Plus } from "lucide-react"
import "./table-header.css"
import TableViewToggle from "./table-view-toggle"
import type { UseResponsiveViewReturn } from "./useResponsiveView"

interface TableHeaderProps {
  title?: string
  searchTerm: string
  searchPlaceholder?: string
  onSearch: (term: string) => void
  onAddUser?: () => void
  addButtonText?: string
  showAddButton?: boolean
  showSearch?: boolean
  // Nuevos props para filtros adicionales
  showDateFilters?: boolean
  dateFrom?: string
  dateTo?: string
  onDateFromChange?: (date: string) => void
  onDateToChange?: (date: string) => void
  showStatusFilter?: boolean
  statusOptions?: { value: string; label: string }[]
  selectedStatus?: string
  onStatusChange?: (status: string) => void
  // Props para el toggle de vista responsive
  showViewToggle?: boolean
  responsiveViewState?: UseResponsiveViewReturn
  showAutoToggle?: boolean
}

export default function TableHeader({
  title = "Gestión de Usuarios",
  searchTerm,
  searchPlaceholder = "Buscar usuarios...",
  onSearch,
  onAddUser,
  addButtonText = "Agregar Usuario",
  showAddButton = true,
  showSearch = true,
  showDateFilters = false,
  dateFrom = "",
  dateTo = "",
  onDateFromChange,
  onDateToChange,
  showStatusFilter = false,
  statusOptions = [
    { value: "todos", label: "Todos" },
    { value: "activo", label: "Activo" },
    { value: "inactivo", label: "Inactivo" },
  ],
  selectedStatus = "todos",
  onStatusChange,
  showViewToggle = true,
  responsiveViewState,
  showAutoToggle = true,
}: TableHeaderProps) {
  return (
    <div className="table-header-container">
      {/* Título principal */}
      <div className="table-header-title-section">
        <h1 className="table-title">{title}</h1>
        {responsiveViewState?.isAutoMode && (
          <div className="responsive-info">
            <span className="responsive-badge">Modo automático activo - {responsiveViewState.screenWidth}px</span>
          </div>
        )}
      </div>

      {/* Línea separadora */}
      <div className="table-header-divider"></div>

      {/* Controles */}
      <div className="table-header-controls-section">
        <div className="table-header-controls">
          {showSearch && (
            <div className="table-search-container">
              <Search className="table-search-icon" size={20} />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="table-search-input"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          )}

          {showDateFilters && (
            <>
              <div className="table-date-container">
                <input
                  type="date"
                  placeholder="Fecha desde"
                  className="table-date-input"
                  value={dateFrom}
                  onChange={(e) => onDateFromChange?.(e.target.value)}
                />
              </div>

              <div className="table-date-container">
                <input
                  type="date"
                  placeholder="Fecha hasta"
                  className="table-date-input"
                  value={dateTo}
                  onChange={(e) => onDateToChange?.(e.target.value)}
                />
              </div>
            </>
          )}

          {showStatusFilter && (
            <div className="table-status-container">
              <select
                className="table-status-select"
                value={selectedStatus}
                onChange={(e) => onStatusChange?.(e.target.value)}
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {showViewToggle && responsiveViewState && (
            <div className="table-view-toggle-container">
              <TableViewToggle
                viewMode={responsiveViewState.viewMode}
                onViewModeChange={responsiveViewState.handleViewModeChange}
                isAutoMode={responsiveViewState.isAutoMode}
                onToggleAutoMode={responsiveViewState.toggleAutoMode}
                screenWidth={responsiveViewState.screenWidth}
                breakpoint={responsiveViewState.breakpoint}
                showAutoToggle={showAutoToggle}
              />
            </div>
          )}

          {showAddButton && (
            <div className="table-add-button-container">
              <button className="table-add-btn" onClick={onAddUser}>
                <Plus size={20} />
                {addButtonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
