"use client"

import { TableProvider } from "./context/TableContext"
import TableContent from "./view"
import type { DataTable, TableConfig } from "./context/types"

interface DataTableManagementProps {
  // Configuración de la tabla
  config?: Partial<TableConfig>
  initialData?: DataTable[]
  itemsPerPage?: number

  // Configuración responsive
  defaultViewMode?: "table" | "cards"
  autoResponsive?: boolean
  breakpoint?: number

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

  // Configuración de datos remotos
  apiUrl?: string
  autoFetch?: boolean
  fetchOnMount?: boolean

  // Callbacks para manejo de datos
  onDataLoad?: (data: DataTable[]) => void
  onDataError?: (error: string) => void
}

export default function DataTableManagement(props: DataTableManagementProps) {
  return (
    <TableProvider {...props}>
      <TableContent />
    </TableProvider>
  )
}
