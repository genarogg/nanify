"use client"

import type React from "react"

import { Search, Printer, Users, Copy, Trash2 } from "lucide-react"
import "./table-header.css"

import AddUsuario from "../modal-crud/AddUsuario"
import TableConfigModal from "../modal-crud/TableConfigModal"
import { useTableState, useUIConfig, useFilterConfig } from "../../context/TableContext"
import type { DataTable } from "../../context/types"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../ux/select"

export default function TableHeader() {
  const {
    searchTerm,
    handleSearch,
    getSelectedItems,
    dataLoading,
    dataError,
    refetchData,
    isUsingFallback,
    selectedCount,
    updateSelectedItemsRole,
    clearSelection,
    addItem,
    deleteSelectedItems,
  } = useTableState()
  const { title, searchPlaceholder } = useUIConfig()
  const { dateFrom, dateTo, onDateFromChange, onDateToChange, selectedRole, onRoleChange } = useFilterConfig()

  const handlePrintSelected = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
      console.log("No hay elementos seleccionados para imprimir")
      return
    }
    console.log("Elementos seleccionados para imprimir:", selectedItems)
  }

  const handleDateFromChangeLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Fecha desde cambiada:", e.target.value)
    onDateFromChange(e.target.value)
  }

  const handleDateToChangeLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Fecha hasta cambiada:", e.target.value)
    onDateToChange(e.target.value)
  }

  const handleRoleFilterChange = (role: string) => {
    console.log("Filtro de rol cambiado:", role)
    onRoleChange(role)
  }

  const handleBulkRoleChange = (newRole: string) => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
      console.log("No hay elementos seleccionados para cambiar rol")
      return
    }

    const confirmed = window.confirm(
      `¿Estás seguro de que quieres cambiar el rol de ${selectedItems.length} usuario(s) a "${getRoleDisplayName(newRole)}"?\n\nEsta acción afectará a:\n${selectedItems.map((item) => `• ${item.nombre}`).join("\n")}`,
    )

    if (confirmed) {
      updateSelectedItemsRole(newRole)
      console.log(`Rol cambiado masivamente a ${newRole} para ${selectedItems.length} usuarios`)

      // Mostrar notificación de éxito
      const notification = document.createElement("div")
      notification.className = "bulk-action-notification success"
      notification.innerHTML = `
        <div class="notification-content">
          <Check size="16" />
          <span>Rol actualizado para ${selectedItems.length} usuario(s)</span>
        </div>
      `
      document.body.appendChild(notification)

      setTimeout(() => {
        notification.remove()
      }, 3000)

      // Limpiar selección después del cambio
      clearSelection()
    }
  }

  const handleBulkDuplicate = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
      console.log("No hay elementos seleccionados para duplicar")
      return
    }

    const confirmed = window.confirm(
      `¿Estás seguro de que quieres duplicar ${selectedItems.length} usuario(s)?\n\nEsto creará copias de:\n${selectedItems.map((item) => `• ${item.nombre}`).join("\n")}`,
    )

    if (confirmed) {
      // Duplicar cada elemento seleccionado
      selectedItems.forEach((item) => {
        const newItem: DataTable = {
          ...item,
          id: Date.now() + Math.random(), // Generar ID único
          nombre: `${item.nombre} (Copia)`,
          correo: item.correo.includes("copia_")
            ? `copia_${Date.now()}_${item.correo.replace(/^copia_\d+_/, "")}`
            : `copia_${item.correo}`,
        }

        // Usar addItem directamente desde useTableState
        addItem(newItem)
      })

      console.log(`${selectedItems.length} usuarios duplicados exitosamente`)

      // Mostrar notificación de éxito
      const notification = document.createElement("div")
      notification.className = "bulk-action-notification success"
      notification.innerHTML = `
        <div class="notification-content">
          <span>✓ ${selectedItems.length} usuario(s) duplicado(s) exitosamente</span>
        </div>
      `
      document.body.appendChild(notification)

      setTimeout(() => {
        notification.remove()
      }, 3000)

      // Limpiar selección después de duplicar
      clearSelection()
    }
  }

  const handleBulkDelete = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) {
      console.log("No hay elementos seleccionados para eliminar")
      return
    }

    const confirmed = window.confirm(
      `⚠️ ATENCIÓN: Esta acción eliminará permanentemente ${selectedItems.length} usuario(s).\n\n` +
        `Usuarios que serán eliminados:\n${selectedItems.map((item) => `• ${item.nombre} (${item.correo})`).join("\n")}\n\n` +
        `Esta acción NO se puede deshacer. ¿Estás completamente seguro?`,
    )

    if (confirmed) {
      // Confirmación adicional para eliminación masiva
      const doubleConfirmed = window.confirm(
        `🚨 CONFIRMACIÓN FINAL\n\nVas a eliminar ${selectedItems.length} usuario(s) permanentemente.\n\n¿Proceder con la eliminación?`,
      )

      if (doubleConfirmed) {
        // Eliminar elementos seleccionados usando la función correcta
        deleteSelectedItems()

        console.log(`${selectedItems.length} usuarios eliminados exitosamente`)

        // Mostrar notificación de éxito
        const notification = document.createElement("div")
        notification.className = "bulk-action-notification success"
        notification.innerHTML = `
          <div class="notification-content">
            <span>🗑️ ${selectedItems.length} usuario(s) eliminado(s) exitosamente</span>
          </div>
        `
        document.body.appendChild(notification)

        setTimeout(() => {
          notification.remove()
        }, 3000)

        // La selección se limpia automáticamente al eliminar
      }
    }
  }

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "ADMIN_DACE":
        return "Admin DACE"
      case "ADMIN_FUNDESUR":
        return "Admin FUNDESUR"
      case "SUPER_USUARIO":
        return "Super Usuario"
      default:
        return role
    }
  }

  // Opciones de roles para el filtro
  const roleOptions = [
    { value: "todos", label: "Todos" },
    { value: "ADMIN_DACE", label: "Admin DACE" },
    { value: "ADMIN_FUNDESUR", label: "Admin FUNDESUR" },
    { value: "SUPER_USUARIO", label: "Super Usuario" },
  ]

  // Opciones de roles para cambio masivo (sin "Todos")
  const bulkRoleOptions = [
    { value: "ADMIN_DACE", label: "Admin DACE" },
    { value: "ADMIN_FUNDESUR", label: "Admin FUNDESUR" },
    { value: "SUPER_USUARIO", label: "Super Usuario" },
  ]

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

      {/* Barra de acciones masivas - Solo visible cuando hay elementos seleccionados */}
      {selectedCount > 0 && (
        <div className="bulk-actions-bar">
          <div className="bulk-actions-info">
            <Users size={20} />
            <span className="bulk-count">{selectedCount} elemento(s) seleccionado(s)</span>
          </div>

          <div className="bulk-actions-controls">
            <div className="bulk-role-change">
              <span className="bulk-label">Cambiar rol a:</span>
              <Select onValueChange={handleBulkRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar rol" />
                </SelectTrigger>
                <SelectContent>
                  {bulkRoleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="bulk-action-buttons">
              <button
                className="bulk-action-btn duplicate-btn"
                onClick={handleBulkDuplicate}
                title={`Duplicar ${selectedCount} elemento(s) seleccionado(s)`}
              >
                <Copy size={16} />
                Duplicar ({selectedCount})
              </button>

              <button
                className="bulk-action-btn delete-btn"
                onClick={handleBulkDelete}
                title={`Eliminar ${selectedCount} elemento(s) seleccionado(s)`}
              >
                <Trash2 size={16} />
                Eliminar ({selectedCount})
              </button>
            </div>

            <button className="bulk-clear-btn" onClick={clearSelection} title="Limpiar selección">
              Limpiar selección
            </button>
          </div>
        </div>
      )}

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

        {/* Filtro de roles */}
        <div className="table-role-filter-container">
          <Select value={selectedRole || "todos"} onValueChange={handleRoleFilterChange}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por rol" />
            </SelectTrigger>
            <SelectContent>
              {roleOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
        </div>
      </div>
    </div>
  )
}
