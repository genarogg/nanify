"use client"

import { TableProvider } from "./context/TableContext"
import TableContent from "./view"
import type { DataTable } from "./fn/defaultData"
import type { TableConfig } from "./fn/config"

interface UserManagementTableProps {
  // Configuración de la tabla
  config?: Partial<TableConfig>
  initialData?: DataTable[]
  itemsPerPage?: number

  // Configuración responsive
  defaultViewMode?: "table" | "cards"
  autoResponsive?: boolean
  breakpoint?: number

  // Callbacks CRUD
  onAddUser?: () => void
  onEditUser?: (user: DataTable) => void
  onViewUser?: (user: DataTable) => void
  onDeleteUser?: (user: DataTable) => void
  onSelectUser?: (user: DataTable) => void

  // Configuración de UI
  title?: string
  searchPlaceholder?: string
  addButtonText?: string
  showAddButton?: boolean
  showPaginationInfo?: boolean
  paginationInfoText?: string
  previousText?: string
  nextText?: string
  showViewToggle?: boolean
  showAutoToggle?: boolean

  // Configuración de filtros
  dateFrom?: string
  dateTo?: string
  onDateFromChange?: (date: string) => void
  onDateToChange?: (date: string) => void
  showStatusFilter?: boolean
  statusOptions?: { value: string; label: string }[]
  selectedStatus?: string
  onStatusChange?: (status: string) => void
}

export default function UserManagementTable(props: UserManagementTableProps) {
  return (
    <TableProvider {...props}>
      <TableContent />
    </TableProvider>
  )
}
