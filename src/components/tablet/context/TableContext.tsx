"use client"

import type React from "react"
import { createContext, useContext, type ReactNode } from "react"
import { useTable, type UseTableReturn } from "../useTable"
import { useResponsiveView, type UseResponsiveViewReturn } from "../fn/useResponsiveView"
import type { DataTable } from "../fn/defaultData"
import type { TableConfig } from "../fn/config"

// Tipos para el contexto
interface TableContextType {
  // Estado de la tabla
  tableState: UseTableReturn

  // Estado de vista responsive
  responsiveViewState: UseResponsiveViewReturn

  // Configuración
  config: TableConfig

  // Callbacks CRUD
  onAddUser?: () => void
  onEditUser?: (user: DataTable) => void
  onViewUser?: (user: DataTable) => void
  onDeleteUser?: (user: DataTable) => void
  onSelectUser?: (user: DataTable) => void

  // Configuración de UI
  uiConfig: {
    title: string
    searchPlaceholder: string
    addButtonText: string
    showAddButton: boolean
    showPaginationInfo: boolean
    paginationInfoText?: string
    previousText: string
    nextText: string
    showViewToggle: boolean
    showAutoToggle: boolean
  }

  // Configuración de filtros
  filterConfig: {
    dateFrom?: string
    dateTo?: string
    onDateFromChange?: (date: string) => void
    onDateToChange?: (date: string) => void
    showStatusFilter: boolean
    statusOptions?: { value: string; label: string }[]
    selectedStatus?: string
    onStatusChange?: (status: string) => void
  }
}

// Crear el contexto
const TableContext = createContext<TableContextType | null>(null)

// Props del provider
interface TableProviderProps {
  children: ReactNode

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

// Provider del contexto
export const TableProvider: React.FC<TableProviderProps> = ({
  children,
  config = {},
  initialData,
  itemsPerPage = 5,
  defaultViewMode = "table",
  autoResponsive = true,
  breakpoint = 768,
  onAddUser,
  onEditUser,
  onViewUser,
  onDeleteUser,
  onSelectUser,
  title = "Gestión de Usuarios",
  searchPlaceholder = "Buscar usuarios...",
  addButtonText = "Agregar Usuario",
  showAddButton = true,
  showPaginationInfo = true,
  paginationInfoText,
  previousText = "Anterior",
  nextText = "Siguiente",
  showViewToggle = true,
  showAutoToggle = true,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  showStatusFilter = false,
  statusOptions,
  selectedStatus,
  onStatusChange,
}) => {
  // Inicializar el estado de la tabla
  const tableState = useTable({
    initialUsers: initialData,
    itemsPerPage,
  })

  // Inicializar el estado responsive
  const responsiveViewState = useResponsiveView({
    autoResponsive,
    breakpoint,
    defaultViewMode,
  })

  // Combinar configuración por defecto con la proporcionada
  const defaultConfig: TableConfig = {
    select: true,
    cuadricula: true,
    columns: [
      { id: "id", header: "Id", accessor: "id", sortable: true },
      { id: "nombre", header: "Nombre", accessor: "nombre", sortable: true },
      { id: "correo", header: "Correo", accessor: "correo", sortable: true },
      { id: "telefono", header: "Teléfono", accessor: "telefono", sortable: true },
      { id: "cedula", header: "Cédula", accessor: "cedula", sortable: true },
      { id: "rol", header: "Rol", accessor: "rol", sortable: true },
      { id: "acciones", header: "Acciones", accessor: "", sortable: true },
    ],
  }

  const finalConfig: TableConfig = {
    ...defaultConfig,
    ...config,
    columns: config.columns || defaultConfig.columns,
  }

  // Configuración de UI
  const uiConfig = {
    title,
    searchPlaceholder,
    addButtonText,
    showAddButton,
    showPaginationInfo,
    paginationInfoText,
    previousText,
    nextText,
    showViewToggle,
    showAutoToggle,
  }

  // Configuración de filtros
  const filterConfig = {
    dateFrom,
    dateTo,
    onDateFromChange,
    onDateToChange,
    showStatusFilter,
    statusOptions,
    selectedStatus,
    onStatusChange,
  }

  const contextValue: TableContextType = {
    tableState,
    responsiveViewState,
    config: finalConfig,
    onAddUser,
    onEditUser,
    onViewUser,
    onDeleteUser,
    onSelectUser,
    uiConfig,
    filterConfig,
  }

  return <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>
}

// Hook personalizado para usar el contexto
export const useTableContext = (): TableContextType => {
  const context = useContext(TableContext)

  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider")
  }

  return context
}

// Hook para acceder solo al estado de la tabla
export const useTableState = (): UseTableReturn => {
  const { tableState } = useTableContext()
  return tableState
}

// Hook para acceder solo al estado responsive
export const useResponsiveState = (): UseResponsiveViewReturn => {
  const { responsiveViewState } = useTableContext()
  return responsiveViewState
}

// Hook para acceder a la configuración
export const useTableConfig = (): TableConfig => {
  const { config } = useTableContext()
  return config
}

// Hook para acceder a los callbacks CRUD
export const useTableCallbacks = () => {
  const { onAddUser, onEditUser, onViewUser, onDeleteUser, onSelectUser } = useTableContext()
  return { onAddUser, onEditUser, onViewUser, onDeleteUser, onSelectUser }
}

// Hook para acceder a la configuración de UI
export const useUIConfig = () => {
  const { uiConfig } = useTableContext()
  return uiConfig
}

// Hook para acceder a la configuración de filtros
export const useFilterConfig = () => {
  const { filterConfig } = useTableContext()
  return filterConfig
}
