"use client"

import type React from "react"
import { createContext, useContext, useState, useMemo, useEffect, type ReactNode } from "react"
import { useResponsiveView, type UseResponsiveViewReturn } from "../fn/useResponsiveView"
import { defaultData } from "../fn/defaultData"
import type { DataTable, TableConfig } from "./types"
import { usePagination } from "../hooks/usePagination"

// Tipos para el estado de la tabla (movidos desde useTable)
interface TableState {
  // Estados principales
  items: DataTable[]
  searchTerm: string
  currentPage: number
  selectedItems: number[]
  filteredItems: DataTable[]
  currentItems: DataTable[]
  totalPages: number

  // Funciones de búsqueda
  handleSearch: (term: string) => void
  clearSearch: () => void

  // Funciones de paginación
  goToPage: (page: number) => void
  goToNextPage: () => void
  goToPreviousPage: () => void
  getPageNumbers: () => (number | string)[]

  // Funciones de selección
  handleSelectItem: (itemId: number) => void
  handleSelectAll: () => void
  clearSelection: () => void
  selectAllItems: () => void
  getSelectAllState: () => "none" | "some" | "all"
  getSelectedItems: () => DataTable[]

  // Funciones de datos
  addItem: (newItem: DataTable) => void
  updateItem: (itemId: number, updatedItem: Partial<DataTable>) => void
  deleteItem: (itemId: number) => void
  deleteSelectedItems: () => void
  setItems: React.Dispatch<React.SetStateAction<DataTable[]>>

  // Información adicional
  hasItems: boolean
  hasFilteredItems: boolean
  selectedCount: number
  totalItems: number
  filteredCount: number
}

// Tipos para el contexto
interface TableContextType {
  // Estado de la tabla (ahora incluye toda la lógica de useTable)
  tableState: TableState

  // Estado de vista responsive
  responsiveViewState: UseResponsiveViewReturn

  // Configuración
  config: TableConfig

  // Callbacks CRUD
  onAddItem?: () => void
  onEditItem?: (item: DataTable) => void
  onViewItem?: (item: DataTable) => void
  onDeleteItem?: (item: DataTable) => void
  onSelectItem?: (item: DataTable) => void

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
  onAddItem?: () => void
  onEditItem?: (item: DataTable) => void
  onViewItem?: (item: DataTable) => void
  onDeleteItem?: () => void
  onSelectItem?: (item: DataTable) => void

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
  initialData = defaultData,
  itemsPerPage = 5,
  defaultViewMode = "table",
  autoResponsive = true,
  breakpoint = 768,
  onAddItem,
  onEditItem,
  onViewItem,
  onDeleteItem,
  onSelectItem,
  title = "Gestión de Datos",
  searchPlaceholder = "Buscar elementos...",
  addButtonText = "Agregar Elemento",
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
  // Estados principales de la tabla (lógica movida desde useTable)
  const [items, setItems] = useState<DataTable[]>(initialData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  // Elementos filtrados según el término de búsqueda
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rol.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [items, searchTerm])

  // Usar el hook de paginación
  const pagination = usePagination({
    items: filteredItems,
    itemsPerPage,
  })

  // Efecto para resetear la paginación solo cuando cambia la búsqueda
  // Removido el bucle infinito - solo resetear cuando searchTerm cambia
  useEffect(() => {
    pagination.resetToFirstPage()
  }, [searchTerm]) // Removido pagination de las dependencias

  // Funciones para manejar la búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    // No necesitamos llamar resetToFirstPage aquí ya que se maneja en el useEffect
  }

  const clearSearch = () => {
    setSearchTerm("")
    // No necesitamos llamar resetToFirstPage aquí ya que se maneja en el useEffect
  }

  // Funciones para manejar la selección
  const handleSelectItem = (itemId: number) => {
    setSelectedItems((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId)
      } else {
        return [...prev, itemId]
      }
    })
  }

  const handleSelectAll = () => {
    const currentItemIds = pagination.currentItems.map((item) => item.id)
    const selectedCurrentItems = selectedItems.filter((id) => currentItemIds.includes(id))

    if (selectedCurrentItems.length === pagination.currentItems.length) {
      // Si todos están seleccionados, deseleccionar todos
      setSelectedItems((prev) => prev.filter((id) => !currentItemIds.includes(id)))
    } else {
      // Si ninguno o algunos están seleccionados, seleccionar todos
      setSelectedItems((prev) => {
        const newSelected = [...prev]
        currentItemIds.forEach((id) => {
          if (!newSelected.includes(id)) {
            newSelected.push(id)
          }
        })
        return newSelected
      })
    }
  }

  const clearSelection = () => {
    setSelectedItems([])
  }

  const selectAllItems = () => {
    setSelectedItems(items.map((item) => item.id))
  }

  // Determinar el estado del botón de selección maestro
  const getSelectAllState = (): "none" | "some" | "all" => {
    const currentItemIds = pagination.currentItems.map((item) => item.id)
    const selectedCurrentItems = selectedItems.filter((id) => currentItemIds.includes(id))

    if (selectedCurrentItems.length === 0) {
      return "none" // Sin selección
    } else if (selectedCurrentItems.length === pagination.currentItems.length) {
      return "all" // Todos seleccionados
    } else {
      return "some" // Algunos seleccionados
    }
  }

  // Funciones para manejar los datos
  const addItem = (newItem: DataTable) => {
    setItems((prev) => [...prev, newItem])
  }

  const updateItem = (itemId: number, updatedItem: Partial<DataTable>) => {
    setItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, ...updatedItem } : item)))
  }

  const deleteItem = (itemId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId))
    setSelectedItems((prev) => prev.filter((id) => id !== itemId))
  }

  const deleteSelectedItems = () => {
    setItems((prev) => prev.filter((item) => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  // Obtener elementos seleccionados
  const getSelectedItems = () => {
    return items.filter((item) => selectedItems.includes(item.id))
  }

  // Crear el estado de la tabla
  const tableState: TableState = {
    // Estados
    items,
    searchTerm,
    currentPage: pagination.currentPage,
    selectedItems,
    filteredItems,
    currentItems: pagination.currentItems,
    totalPages: pagination.totalPages,

    // Funciones de búsqueda
    handleSearch,
    clearSearch,

    // Funciones de paginación
    goToPage: pagination.goToPage,
    goToNextPage: pagination.goToNextPage,
    goToPreviousPage: pagination.goToPreviousPage,
    getPageNumbers: pagination.getPageNumbers,

    // Funciones de selección
    handleSelectItem,
    handleSelectAll,
    clearSelection,
    selectAllItems,
    getSelectAllState,
    getSelectedItems,

    // Funciones de datos
    addItem,
    updateItem,
    deleteItem,
    deleteSelectedItems,
    setItems,

    // Información adicional
    hasItems: items.length > 0,
    hasFilteredItems: filteredItems.length > 0,
    selectedCount: selectedItems.length,
    totalItems: items.length,
    filteredCount: filteredItems.length,
  }

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
    onAddItem,
    onEditItem,
    onViewItem,
    onDeleteItem,
    onSelectItem,
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
export const useTableState = (): TableState => {
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
  const { onAddItem, onEditItem, onViewItem, onDeleteItem, onSelectItem } = useTableContext()
  return { onAddItem, onEditItem, onViewItem, onDeleteItem, onSelectItem }
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

// Exportar tipos para compatibilidad
export type { DataTable, TableState }