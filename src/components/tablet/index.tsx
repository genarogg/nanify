"use client"

import { useState } from "react"
import "./css/user-management-table.css"

import { Edit, Eye, Check, Minus, Trash2 } from "lucide-react"
import defaultConfig, { type TableConfig } from "./config"
import { useTable, type UseTableReturn } from "./useTable"
import type { User } from "./fn/defaultUsers"
import { useResponsiveView } from "./useResponsiveView"
import TableHeader from "./table-header"
import TablePagination from "./pagination/table-pagination"
import TableCardView from "./table-card-view"

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ux/select"

interface UserManagementTableProps {
  config?: Partial<TableConfig>
  tableState?: UseTableReturn
  onAddUser?: () => void
  onEditUser?: (user: User) => void
  onViewUser?: (user: User) => void
  onSelectUser?: (user: User) => void
  // Props para personalizar el header
  title?: string
  searchPlaceholder?: string
  addButtonText?: string
  showAddButton?: boolean

  // Props para filtros adicionales

  dateFrom?: string
  dateTo?: string
  onDateFromChange?: (date: string) => void
  onDateToChange?: (date: string) => void
  showStatusFilter?: boolean
  statusOptions?: { value: string; label: string }[]
  selectedStatus?: string
  onStatusChange?: (status: string) => void
  // Props para personalizar la paginación
  showPaginationInfo?: boolean
  paginationInfoText?: string
  previousText?: string
  nextText?: string
  // Props para vista responsive
  showViewToggle?: boolean
  defaultViewMode?: "table" | "cards"
  autoResponsive?: boolean
  breakpoint?: number
  showAutoToggle?: boolean
}

export default function UserManagementTable({
  config = {},
  tableState,
  onAddUser,
  onEditUser,
  onViewUser,
  onSelectUser,
  // Header props
  title,
  searchPlaceholder,
  addButtonText,
  showAddButton,

  // Filter props

  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  showStatusFilter,
  statusOptions,
  selectedStatus,
  onStatusChange,
  // Pagination props
  showPaginationInfo,
  paginationInfoText,
  previousText,
  nextText,
  // Responsive view props
  showViewToggle = true,
  defaultViewMode = "table",
  autoResponsive = true,
  breakpoint = 768,
  showAutoToggle = true,
}: UserManagementTableProps) {
  // Usar el estado proporcionado o crear uno nuevo
  const defaultTableState = useTable()
  const state = tableState || defaultTableState

  const {
    searchTerm,
    currentPage,
    selectedUsers,
    currentUsers,
    totalPages,
    handleSearch,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    handleSelectUser: handleSelectUserState,
    handleSelectAll,
    getSelectAllState,
    getPageNumbers,
    hasFilteredUsers,
    updateUser,
  } = state

  // Hook para manejo responsive de vistas
  const responsiveViewState = useResponsiveView({
    autoResponsive,
    breakpoint,
    defaultViewMode,
  })

  // Combinar la configuración por defecto con la configuración proporcionada
  const tableConfig: TableConfig = {
    ...defaultConfig,
    ...config,
    columns: config.columns || defaultConfig.columns,
  }

  const { select, cuadricula, columns } = tableConfig

  // Manejar la selección de usuario
  const handleUserSelect = (userId: number) => {
    if (!select) return

    handleSelectUserState(userId)

    const user = currentUsers.find((u: any) => u.id === userId)
    if (user && onSelectUser) {
      onSelectUser(user)
    }
  }

  // Funciones CRUD
  const handleCreateUser = () => {
    onAddUser?.()
  }

  const handleEditUserClick = (user: User) => {
    onEditUser?.(user)
  }

  const handleViewUserClick = (user: User) => {
    onViewUser?.(user)
  }

  const handleDeleteUserClick = (user: User) => {
    // Por ahora solo llamamos al callback si existe
    // En el futuro se puede implementar la lógica de eliminación
    console.log('Delete user:', user)
  }

  return (
    <div className="user-management-container">
      <TableHeader
        title={title}
        searchTerm={searchTerm}
        searchPlaceholder={searchPlaceholder}
        onSearch={handleSearch}
        onAddUser={handleCreateUser}
        addButtonText={addButtonText}
        showAddButton={showAddButton}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={onDateFromChange}
        onDateToChange={onDateToChange}
        showStatusFilter={showStatusFilter}
        statusOptions={statusOptions}
        selectedStatus={selectedStatus}
        onStatusChange={onStatusChange}
        showViewToggle={showViewToggle}
        responsiveViewState={responsiveViewState}
        showAutoToggle={showAutoToggle}
      />

      {responsiveViewState.viewMode === "table" ? (
        <div className="table-container">
          <table className={`users-table ${!select ? "no-select" : ""} ${cuadricula ? "with-grid" : ""}`}>
            <thead>
              <tr>
                {select && (
                  <th className="select-column">
                    <button
                      className={`select-btn master-select ${getSelectAllState()}`}
                      onClick={handleSelectAll}
                      title="Seleccionar todos"
                    >
                      {getSelectAllState() === "all" && <Check size={14} />}
                      {getSelectAllState() === "some" && <Minus size={14} />}
                    </button>
                  </th>
                )}
                {columns
                  .filter((column) => !column.hidden)
                  .map((column) => (
                    <th key={column.id} className={`${column.id}-column`}>
                      {column.header}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody style={{ minHeight: "320px", position: "relative" }}>
              {currentUsers.map((user: any, index: any) => (
                <tr key={user.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                  {select && (
                    <td className="select-column">
                      <button
                        className={`select-btn ${selectedUsers.includes(user.id) ? "selected" : ""}`}
                        onClick={() => handleUserSelect(user.id)}
                        title="Seleccionar usuario"
                      >
                        {selectedUsers.includes(user.id) && <Check size={14} />}
                      </button>
                    </td>
                  )}
                  {columns
                    .filter((column) => !column.hidden)
                    .map((column) => {
                      if (column.id === "acciones") {
                        return (
                          <td key={column.id} className="acciones-column">
                            <div className="actions-cell">
                              <Select
                                value={user.rol}
                                onValueChange={(newRole) => updateUser(user.id, { rol: newRole as string })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ADMIN_DACE">Admin DACE</SelectItem>
                                  <SelectItem value="ADMIN_FUNDESUR">Admin FUNDESUR</SelectItem>
                                  <SelectItem value="SUPER_USUARIO">Super Usuario</SelectItem>
                                </SelectContent>
                              </Select>
                              <div className="action-buttons-container">
                                <button
                                  className="action-btn"
                                  onClick={() => handleEditUserClick(user)}
                                  title="Editar usuario"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  className="action-btn"
                                  onClick={() => handleViewUserClick(user)}
                                  title="Ver usuario"
                                >
                                  <Eye size={16} />
                                </button>
                                <button
                                  className="action-btn"
                                  onClick={() => handleDeleteUserClick(user)}
                                  title="Eliminar usuario"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </td>
                        )
                      }

                      return (
                        <td key={column.id} className={`${column.id}-column`}>
                          {column.id === "nombre" && <span className="name-cell">{user[column.accessor]}</span>}
                          {column.id === "correo" && <span className="email-cell">{user[column.accessor]}</span>}
                          {column.id === "rol" && (
                            <span className={`role-badge role-${user.rol.toLowerCase().replace("_", "-")}`}>
                              {user.rol}
                            </span>
                          )}
                          {column.id !== "nombre" &&
                            column.id !== "correo" &&
                            column.id !== "rol" &&
                            user[column.accessor]}
                        </td>
                      )
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          {/* Modo tarjeta */}
          <TableCardView
            users={currentUsers}
            selectedUsers={selectedUsers}
            onSelectUser={handleUserSelect}
            onEditUser={handleEditUserClick}
            onViewUser={handleViewUserClick}
            onDeleteUser={handleDeleteUserClick}
            showSelection={select}
          />
        </>
      )}

      {!hasFilteredUsers && (
        <div className="no-results">
          <p>No se encontraron usuarios que coincidan con la búsqueda.</p>
        </div>
      )}

      {/* paginacion */}
      {hasFilteredUsers && (
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          onNextPage={goToNextPage}
          onPreviousPage={goToPreviousPage}
          getPageNumbers={getPageNumbers}
          showInfo={showPaginationInfo}
          infoText={paginationInfoText}
          previousText={previousText}
          nextText={nextText}
        />
      )}

    </div>
  )
}