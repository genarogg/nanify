"use client"

import { Copy, Eye, Trash2, FileText } from "lucide-react"
import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../components/ux/select"
import Switch from "../../../../../components/ux/btns/switch"

import "./css/actions-column.css"
import EditUsuario from "../../modal-crud/EditUsuario"

interface ActionsColumnProps {
  item: any
  onDuplicate?: (item: any) => void
  onView?: (item: any) => void
  onDelete?: (item: any) => void
  onEdit?: (item: any) => void
  onReport?: (item: any) => void
  onWhatsApp?: (item: any) => void
  onUpdateItem?: (itemId: number, updates: any) => void
  showRoleSelect?: boolean
  showStatusSwitch?: boolean
  visibleActions?: {
    duplicate?: boolean
    edit?: boolean
    view?: boolean
    delete?: boolean
    report?: boolean
    whatsapp?: boolean
  }
}

export default function ActionsColumn({
  item,
  onDuplicate,
  onView,
  onDelete,
  onEdit,
  onReport,
  onWhatsApp,
  onUpdateItem,
  showRoleSelect = true,
  showStatusSwitch = false,
  visibleActions = {
    duplicate: true,
    edit: true,
    view: true,
    delete: true,
    report: true,
    whatsapp: true,
  },
}: ActionsColumnProps) {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false)

  const baseClass = "actions-cell"
  const buttonClass = "action-btn"

  // Función auxiliar para manejar el cambio de rol - centralizada
  const handleRoleChange = (value: string | string[]) => {
    const newRole = Array.isArray(value) ? value[0] : value
    if (newRole && onUpdateItem) {
      console.log("Cambio de rol:", item, newRole)
      onUpdateItem(item.id, { rol: newRole })
    }
  }

  // Función auxiliar para manejar el cambio de estado - centralizada
  const handleStatusToggle = () => {
    if (onUpdateItem) {
      const newStatus = item.status === "ACTIVO" ? "INACTIVO" : "ACTIVO"
      console.log(`Cambiando estado de ${item.nombre} a ${newStatus}`)
      onUpdateItem(item.id, { status: newStatus })
    }
  }

  // Función auxiliar para manejar la vista con log
  const handleViewClick = () => {
    if (onView) {
      console.log("Botón de vista clickeado para:", item.nombre)
      onView(item)
    }
  }

  // Función auxiliar para manejar la edición con modal
  const handleEditClick = () => {
    if (onEdit) {
      console.log("Botón de editar clickeado para:", item.nombre)
      onEdit(item)
    }
  }

  // Función para manejar WhatsApp
  const handleWhatsAppClick = () => {
    if (onWhatsApp) {
      onWhatsApp(item)
    } else {
      // Usar modal por defecto
      setWhatsappModalOpen(true)
    }
  }

  return (
    <>
      <div className={baseClass}>
        {/* Switch de estado */}
        {showStatusSwitch && (
          <div className="status-switch-container">
            <Switch isOn={item.status === "ACTIVO"} onToggle={handleStatusToggle} />
            <span className={`status-text ${item.status === "ACTIVO" ? "active" : "inactive"}`}>
              {item.status === "ACTIVO" ? "Activo" : "Inactivo"}
            </span>
          </div>
        )}

        {/* Select de rol */}
        {showRoleSelect && (
          <Select value={item.rol} onValueChange={handleRoleChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ADMIN_DACE">Admin DACE</SelectItem>
              <SelectItem value="ADMIN_FUNDESUR">Admin FUNDESUR</SelectItem>
              <SelectItem value="SUPER_USUARIO">Super Usuario</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* Botones de acción */}
        <div className="action-buttons-container">
          {visibleActions.duplicate && onDuplicate && (
            <button className={buttonClass} onClick={() => onDuplicate(item)} title="Duplicar elemento">
              <Copy size={16} />
            </button>
          )}
          {visibleActions.edit && <EditUsuario user={item} />}
          {visibleActions.view && onView && (
            <button className={buttonClass} onClick={handleViewClick} title="Ver detalles del elemento">
              <Eye size={16} />
            </button>
          )}
         
          {visibleActions.report && onReport && (
            <button className={buttonClass} onClick={() => onReport(item)} title="Generar reporte">
              <FileText size={16} />
            </button>
          )}
          {visibleActions.delete && onDelete && (
            <button className={buttonClass} onClick={() => onDelete(item)} title="Eliminar elemento">
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </>
  )
}