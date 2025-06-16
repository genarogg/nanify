"use client"

import type React from "react"
import { createContext, useContext, useState, useMemo, type ReactNode, useCallback, useEffect } from "react"
import { useResponsiveView, type UseResponsiveViewReturn } from "../fn/useResponsiveView"
import { defaultData } from "../fn/defaultData"
import type { DataTable, TableConfig } from "./types"
import { useTableData } from "../hooks/useTableData"

// Tipos para el estado de la tabla
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

  // Funciones de cambio masivo
  updateSelectedItemsRole: (newRole: string) => void

  // Información adicional
  hasItems: boolean
  hasFilteredItems: boolean
  selectedCount: number
  totalItems: number
  filteredCount: number
  dataLoading: boolean
  dataError: string | null
  refetchData: () => Promise<void>
  isUsingFallback: boolean
  updateTableConfig: (newConfig: Partial<TableConfig>) => void
  updateItemsPerPage: (newItemsPerPage: number) => void
  itemsPerPage: number
}

// Tipos para el contexto
interface TableContextType {
  // Estado de la tabla
  tableState: TableState

  // Estado de vista responsive
  responsiveViewState: UseResponsiveViewReturn

  // Configuración
  config: TableConfig

  // Callbacks CRUD
  onAddItem: () => void
  onEditItem: (item: DataTable) => void
  onViewItem: (item: DataTable) => void
  onDeleteItem: (item: DataTable) => void
  onSelectItem: (item: DataTable) => void

  // Configuración de UI
  uiConfig: {
    title: string
    searchPlaceholder: string
    addButtonText: string
    showAddButton: boolean
    showPaginationInfo: boolean
    paginationInfoText: string
    previousText: string
    nextText: string
    showViewToggle: boolean
    showAutoToggle: boolean
  }

  // Configuración de filtros
  filterConfig: {
    dateFrom: string
    dateTo: string
    onDateFromChange: (date: string) => void
    onDateToChange: (date: string) => void
    showStatusFilter: boolean
    statusOptions: { value: string; label: string }[]
    selectedStatus: string
    onStatusChange: (status: string) => void
    selectedRole: string
    onRoleChange: (role: string) => void
  }
}

// Crear el contexto
const TableContext = createContext<TableContextType | null>(null)

// Props del provider (simplificadas)
interface TableProviderProps {
  children: ReactNode
}

// Provider del contexto
export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  // Configuración por defecto
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

  // Estados de configuración
  const [dynamicItemsPerPage, setDynamicItemsPerPage] = useState(10)
  const [dynamicConfig, setDynamicConfig] = useState<TableConfig>(defaultConfig)

  // Estados de datos
  const {
    data: items,
    loading: dataLoading,
    error: dataError,
    refetch: refetchData,
    setData: setItems,
    isUsingFallback,
  } = useTableData({
    apiUrl: undefined,
    initialData: defaultData,
    autoFetch: true,
    fetchOnMount: true,
  })

  // Estados de la tabla
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  // Estados de filtros
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [selectedRole, setSelectedRole] = useState("todos")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // Cargar configuración desde localStorage
  const loadConfigFromStorage = useCallback(() => {
    try {
      const savedConfig = localStorage.getItem("tableConfig")
      if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig)

        if (parsedConfig.itemsPerPage) {
          setDynamicItemsPerPage(parsedConfig.itemsPerPage)
        }

        if (parsedConfig.hiddenColumns) {
          setDynamicConfig((prev) => ({
            ...prev,
            columns: prev.columns.map((col) => ({
              ...col,
              hidden: parsedConfig.hiddenColumns.includes(col.id),
            })),
          }))
        }

        if (typeof parsedConfig.select === "boolean") {
          setDynamicConfig((prev) => ({ ...prev, select: parsedConfig.select }))
        }

        if (typeof parsedConfig.cuadricula === "boolean") {
          setDynamicConfig((prev) => ({ ...prev, cuadricula: parsedConfig.cuadricula }))
        }
      }
    } catch (error) {
      console.warn("Error loading table configuration from localStorage:", error)
    }
  }, [])

  // Cargar configuración al montar
  useEffect(() => {
    loadConfigFromStorage()
  }, [loadConfigFromStorage])

  // Elementos filtrados
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rol.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesRole = selectedRole === "todos" || item.rol === selectedRole

      return matchesSearch && matchesRole
    })
  }, [items, searchTerm, selectedRole])

  // Calcular páginas
  const totalPages = useMemo(() => {
    return Math.ceil(filteredItems.length / dynamicItemsPerPage)
  }, [filteredItems.length, dynamicItemsPerPage])

  // Elementos de la página actual
  const currentItems = useMemo(() => {
    return filteredItems.slice((currentPage - 1) * dynamicItemsPerPage, currentPage * dynamicItemsPerPage)
  }, [filteredItems, currentPage, dynamicItemsPerPage])

  // Funciones de configuración
  const updateTableConfig = (newConfig: Partial<TableConfig>) => {
    setDynamicConfig((prev) => ({ ...prev, ...newConfig }))
  }

  const updateItemsPerPage = (newItemsPerPage: number) => {
    setDynamicItemsPerPage(newItemsPerPage)
    setCurrentPage(1)
  }

  // Funciones de búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

  const clearSearch = () => {
    setSearchTerm("")
    setCurrentPage(1)
  }

  // Funciones de paginación
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  // Funciones de selección
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
    const currentItemIds = currentItems.map((item) => item.id)
    const selectedCurrentItems = selectedItems.filter((id) => currentItemIds.includes(id))

    if (selectedCurrentItems.length === currentItems.length) {
      setSelectedItems((prev) => prev.filter((id) => !currentItemIds.includes(id)))
    } else {
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

  const getSelectAllState = (): "none" | "some" | "all" => {
    const currentItemIds = currentItems.map((item) => item.id)
    const selectedCurrentItems = selectedItems.filter((id) => currentItemIds.includes(id))

    if (selectedCurrentItems.length === 0) {
      return "none"
    } else if (selectedCurrentItems.length === currentItems.length) {
      return "all"
    } else {
      return "some"
    }
  }

  // Funciones de datos
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

  const updateSelectedItemsRole = (newRole: string) => {
    setItems((prev) => prev.map((item) => (selectedItems.includes(item.id) ? { ...item, rol: newRole } : item)))
  }

  // Generar números de página
  const getPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4)
      }

      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3)
      }

      if (startPage > 2) {
        pageNumbers.push("...")
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push("...")
      }

      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const getSelectedItems = () => {
    return items.filter((item) => selectedItems.includes(item.id))
  }

  // Handlers de filtros
  const handleDateFromChange = (date: string) => {
    setDateFrom(date)
  }

  const handleDateToChange = (date: string) => {
    setDateTo(date)
  }

  const handleRoleChange = (role: string) => {
    setSelectedRole(role)
    setCurrentPage(1)
  }

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status)
    setCurrentPage(1)
  }

  // Callbacks CRUD por defecto
  const onAddItem = () => {
    console.log("Add item clicked")
  }

  const onEditItem = (item: DataTable) => {
    console.log("Edit item:", item)
  }

  const onViewItem = (item: DataTable) => {
    console.log("View item:", item)
  }

  const onDeleteItem = (item: DataTable) => {
    deleteItem(item.id)
  }

  const onSelectItem = (item: DataTable) => {
    handleSelectItem(item.id)
  }

  // Estado de la tabla
  const tableState: TableState = {
    items,
    searchTerm,
    currentPage,
    selectedItems,
    filteredItems,
    currentItems,
    totalPages,
    handleSearch,
    clearSearch,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    getPageNumbers,
    handleSelectItem,
    handleSelectAll,
    clearSelection,
    selectAllItems,
    getSelectAllState,
    getSelectedItems,
    addItem,
    updateItem,
    deleteItem,
    deleteSelectedItems,
    setItems,
    updateSelectedItemsRole,
    hasItems: items.length > 0,
    hasFilteredItems: filteredItems.length > 0,
    selectedCount: selectedItems.length,
    totalItems: items.length,
    filteredCount: filteredItems.length,
    dataLoading,
    dataError,
    refetchData,
    isUsingFallback,
    updateTableConfig,
    updateItemsPerPage,
    itemsPerPage: dynamicItemsPerPage,
  }

  // Estado responsive
  const responsiveViewState = useResponsiveView({
    autoResponsive: true,
    breakpoint: 768,
    defaultViewMode: "table",
  })

  // Configuración de UI
  const uiConfig = {
    title: "Gestión de Datos",
    searchPlaceholder: "Buscar elementos...",
    addButtonText: "Agregar Elemento",
    showAddButton: true,
    showPaginationInfo: true,
    paginationInfoText: "Mostrando {start} a {end} de {total} elementos",
    previousText: "Anterior",
    nextText: "Siguiente",
    showViewToggle: true,
    showAutoToggle: true,
  }

  // Configuración de filtros
  const filterConfig = {
    dateFrom,
    dateTo,
    onDateFromChange: handleDateFromChange,
    onDateToChange: handleDateToChange,
    showStatusFilter: true,
    statusOptions: [
      { value: "all", label: "Todos los estados" },
      { value: "active", label: "Activo" },
      { value: "inactive", label: "Inactivo" },
    ],
    selectedStatus,
    onStatusChange: handleStatusChange,
    selectedRole,
    onRoleChange: handleRoleChange,
  }

  // Valor del contexto
  const contextValue: TableContextType = {
    tableState,
    responsiveViewState,
    config: dynamicConfig,
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

// Hooks específicos
export const useTableState = (): TableState => {
  const { tableState } = useTableContext()
  return tableState
}

export const useResponsiveState = (): UseResponsiveViewReturn => {
  const { responsiveViewState } = useTableContext()
  return responsiveViewState
}

export const useTableConfig = (): TableConfig => {
  const { config } = useTableContext()
  return config
}

export const useTableCallbacks = () => {
  const { onAddItem, onEditItem, onViewItem, onDeleteItem, onSelectItem } = useTableContext()
  return { onAddItem, onEditItem, onViewItem, onDeleteItem, onSelectItem }
}

export const useUIConfig = () => {
  const { uiConfig } = useTableContext()
  return uiConfig
}

export const useFilterConfig = () => {
  const { filterConfig } = useTableContext()
  return filterConfig
}

// Exportar tipos
export type { DataTable, TableState }