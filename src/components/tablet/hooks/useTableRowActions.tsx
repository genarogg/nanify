"use client"

import { useCallback } from "react"
import { useTableState, useTableCallbacks } from "../context/TableContext"
import type { DataTable } from "../context/types"

interface UseTableRowActionsProps {
  onCustomEdit?: (item: DataTable) => void
  onCustomView?: (item: DataTable) => void
  onCustomDelete?: (item: DataTable) => void
  onCustomRoleChange?: (item: DataTable, newRole: string) => void
  showConfirmDialog?: boolean
}

export const useTableRowActions = ({
  onCustomEdit,
  onCustomView,
  onCustomDelete,
  onCustomRoleChange,
  showConfirmDialog = true,
}: UseTableRowActionsProps = {}) => {
  const { updateItem, deleteItem } = useTableState()
  const { onEditItem, onViewItem, onDeleteItem } = useTableCallbacks()

  // Acción de editar
  const handleEdit = useCallback(
    (item: DataTable) => {
      console.log("Editando elemento:", item)

      if (onCustomEdit) {
        onCustomEdit(item)
      } else if (onEditItem) {
        onEditItem(item)
      } else {
        // Acción por defecto
        console.log("Acción de editar por defecto para:", item.nombre)
      }
    },
    [onCustomEdit, onEditItem],
  )

  // Acción de ver/visualizar
  const handleView = useCallback(
    (item: DataTable) => {
      console.log("Visualizando elemento:", item)

      if (onCustomView) {
        onCustomView(item)
      } else if (onViewItem) {
        onViewItem(item)
      } else {
        // Acción por defecto
        console.log("Acción de visualizar por defecto para:", item.nombre)
      }
    },
    [onCustomView, onViewItem],
  )

  // Acción de eliminar
  const handleDelete = useCallback(
    (item: DataTable) => {
      console.log("Eliminando elemento:", item)

      const executeDelete = () => {
        if (onCustomDelete) {
          onCustomDelete(item)
        } else if (onDeleteItem) {
          onDeleteItem(item)
        } else {
          // Acción por defecto - eliminar del estado
          deleteItem(item.id)
          console.log("Elemento eliminado:", item.nombre)
        }
      }

      if (showConfirmDialog) {
        const confirmed = window.confirm(`¿Estás seguro de que quieres eliminar a ${item.nombre}?`)
        if (confirmed) {
          executeDelete()
        }
      } else {
        executeDelete()
      }
    },
    [onCustomDelete, onDeleteItem, deleteItem, showConfirmDialog],
  )

  // Acción de cambiar rol
  const handleRoleChange = useCallback(
    (item: DataTable, newRole: string) => {
      console.log("Cambiando rol:", { item: item.nombre, from: item.rol, to: newRole })

      if (onCustomRoleChange) {
        onCustomRoleChange(item, newRole)
      } else {
        // Acción por defecto - actualizar en el estado
        updateItem(item.id, { rol: newRole })
        console.log(`Rol actualizado para ${item.nombre}: ${item.rol} → ${newRole}`)
      }
    },
    [onCustomRoleChange, updateItem],
  )

  // Acción de imprimir elemento individual
  const handlePrint = useCallback((item: DataTable) => {
    console.log("Imprimiendo elemento:", item)

    // Crear contenido para imprimir
    const printContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Información del Usuario</h2>
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Nombre:</strong> ${item.nombre}</p>
        <p><strong>Correo:</strong> ${item.correo}</p>
        <p><strong>Teléfono:</strong> ${item.telefono}</p>
        <p><strong>Cédula:</strong> ${item.cedula}</p>
        <p><strong>Rol:</strong> ${item.rol}</p>
        <p><strong>Fecha de impresión:</strong> ${new Date().toLocaleString()}</p>
      </div>
    `

    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(printContent)
      printWindow.document.close()
      printWindow.print()
    }
  }, [])

  // Acción de duplicar elemento
  const handleDuplicate = useCallback((item: DataTable) => {
    console.log("Duplicando elemento:", item)

    const newItem: DataTable = {
      ...item,
      id: Date.now(), // Generar nuevo ID
      nombre: `${item.nombre} (Copia)`,
      correo: `copia_${item.correo}`,
    }

    // Aquí podrías usar addItem del contexto si estuviera disponible
    console.log("Elemento duplicado:", newItem)
  }, [])

  // Acción de exportar elemento individual
  const handleExport = useCallback((item: DataTable) => {
    console.log("Exportando elemento:", item)

    const dataStr = JSON.stringify(item, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement("a")
    link.href = url
    link.download = `usuario_${item.id}_${item.nombre.replace(/\s+/g, "_")}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [])

  // Función para obtener todas las acciones disponibles
  const getAvailableActions = useCallback(() => {
    return [
      {
        key: "edit",
        label: "Editar",
        icon: "Edit",
        handler: handleEdit,
        variant: "default" as const,
      },
      {
        key: "view",
        label: "Ver",
        icon: "Eye",
        handler: handleView,
        variant: "default" as const,
      },
      {
        key: "delete",
        label: "Eliminar",
        icon: "Trash2",
        handler: handleDelete,
        variant: "destructive" as const,
      },
      {
        key: "print",
        label: "Imprimir",
        icon: "Printer",
        handler: handlePrint,
        variant: "default" as const,
      },
      {
        key: "duplicate",
        label: "Duplicar",
        icon: "Copy",
        handler: handleDuplicate,
        variant: "default" as const,
      },
      {
        key: "export",
        label: "Exportar",
        icon: "Download",
        handler: handleExport,
        variant: "default" as const,
      },
    ]
  }, [handleEdit, handleView, handleDelete, handlePrint, handleDuplicate, handleExport])

  // Función para ejecutar acción por clave
  const executeAction = useCallback(
    (actionKey: string, item: DataTable, ...args: any[]) => {
      const actions = getAvailableActions()
      const action = actions.find((a) => a.key === actionKey)

      if (action) {
        action.handler(item, ...args)
      } else {
        console.warn(`Acción no encontrada: ${actionKey}`)
      }
    },
    [getAvailableActions],
  )

  return {
    // Acciones individuales
    handleEdit,
    handleView,
    handleDelete,
    handleRoleChange,
    handlePrint,
    handleDuplicate,
    handleExport,

    // Utilidades
    getAvailableActions,
    executeAction,

    // Configuración
    showConfirmDialog,
  }
}

export type UseTableRowActionsReturn = ReturnType<typeof useTableRowActions>
