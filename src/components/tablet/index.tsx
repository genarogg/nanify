"use client"



import defaultConfig, { type TableConfig } from "./fn/config"
import { useTable, type UseTableReturn } from "./useTable"
import type { DataTable } from "./fn/defaultData"
import { useResponsiveView } from "./fn/useResponsiveView"

import {
  TableCardView,
  TableView,
  TableHeader,
  Pagination
} from "./view"


interface UserManagementTableProps {
  config?: Partial<TableConfig>
  tableState?: UseTableReturn
  onAddUser?: () => void
  onEditUser?: (user: DataTable) => void
  onViewUser?: (user: DataTable) => void
  onSelectUser?: (user: DataTable) => void
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

  const handleEditUserClick = (user: DataTable) => {
    onEditUser?.(user)
  }

  const handleViewUserClick = (user: DataTable) => {
    onViewUser?.(user)
  }

  const handleDeleteUserClick = (user: DataTable) => {
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
        <TableView
          users={currentUsers}
          selectedUsers={selectedUsers}
          columns={columns}
          select={select}
          cuadricula={cuadricula}
          onSelectUser={handleUserSelect}
          onSelectAll={handleSelectAll}
          getSelectAllState={getSelectAllState}
          onEditUser={handleEditUserClick}
          onViewUser={handleViewUserClick}
          onDeleteUser={handleDeleteUserClick}
          updateUser={updateUser}
        />
      ) : (
        <TableCardView
          users={currentUsers}
          selectedUsers={selectedUsers}
          onSelectUser={handleUserSelect}
          onEditUser={handleEditUserClick}
          onViewUser={handleViewUserClick}
          onDeleteUser={handleDeleteUserClick}
          showSelection={select}
        />
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