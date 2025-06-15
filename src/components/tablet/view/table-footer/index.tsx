"use client"
import { useEffect, useState } from "react"
import { Users, Copy, Trash2 } from "lucide-react"
import "./table-footer.css"
import { useTableState } from "../../context/TableContext"
import type { DataTable } from "../../context/types"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../ux/select"

export default function TableFooter() {
  const { getSelectedItems, selectedCount, updateSelectedItemsRole, clearSelection, addItem, deleteSelectedItems } =
    useTableState()

  const [showBulkBar, setShowBulkBar] = useState(false)

  // Controlar la visibilidad de la barra con animación suave
  useEffect(() => {
    if (selectedCount > 0) {
      setShowBulkBar(true)
    } else {
      setShowBulkBar(false)
    }
  }, [selectedCount])

  const handleBulkRoleChange = (value: string | string[]) => {
    const newRole = Array.isArray(value) ? value[0] : value
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
      showNotification(`✓ Rol actualizado para ${selectedItems.length} usuario(s)`, "success")

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

        addItem(newItem)
      })

      console.log(`${selectedItems.length} usuarios duplicados exitosamente`)

      // Mostrar notificación de éxito
      showNotification(`✓ ${selectedItems.length} usuario(s) duplicado(s) exitosamente`, "success")

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
        deleteSelectedItems()

        console.log(`${selectedItems.length} usuarios eliminados exitosamente`)

        // Mostrar notificación de éxito
        showNotification(`🗑️ ${selectedItems.length} usuario(s) eliminado(s) exitosamente`, "success")
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

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    const notification = document.createElement("div")
    notification.className = `bulk-action-notification ${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
      </div>
    `
    document.body.appendChild(notification)

    setTimeout(() => {
      notification.remove()
    }, 3000)
  }

  // Opciones de roles para cambio masivo (sin "Todos")
  const bulkRoleOptions = [
    { value: "ADMIN_DACE", label: "Admin DACE" },
    { value: "ADMIN_FUNDESUR", label: "Admin FUNDESUR" },
    { value: "SUPER_USUARIO", label: "Super Usuario" },
  ]

  if (!showBulkBar) return null

  return (
    <>
      {/* Overlay de fondo muy sutil que NO bloquea interacciones */}
      <div className={`bulk-actions-overlay ${showBulkBar ? "visible" : ""}`} />

      {/* Barra de acciones masivas en la parte inferior */}
      <div className={`bulk-actions-bar ${showBulkBar ? "visible" : ""}`}>
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
    </>
  )
}
