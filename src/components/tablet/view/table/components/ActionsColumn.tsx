"use client"

import { Copy, Eye, Trash2, Edit } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../ux/select"
import "./css/actions-column.css"

interface ActionsColumnProps {
  item: any
  onDuplicate: (item: any) => void
  onView: (item: any) => void
  onDelete: (item: any) => void
  onEdit: (item: any) => void
  onRoleChange: (item: any, newRole: string) => void
  showRoleSelect?: boolean
  variant?: "table" | "card"
}

export default function ActionsColumn({
  item,
  onDuplicate,
  onView,
  onDelete,
  onEdit,
  onRoleChange,
  showRoleSelect = true,
  variant = "table"
}: ActionsColumnProps) {
  const baseClass = variant === "table" ? "actions-cell" : "card-actions"
  const buttonClass = variant === "table" ? "action-btn" : "card-action-btn"

  // Función auxiliar para manejar el cambio de rol
  const handleRoleChange = (value: string | string[]) => {
    // Si es un array, tomamos el primer elemento; si es string, lo usamos directamente
    const newRole = Array.isArray(value) ? value[0] : value
    if (newRole) {
      onRoleChange(item, newRole)
    }
  }

  return (
    <div className={baseClass}>
      {showRoleSelect && variant === "table" && (
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
      <div className="action-buttons-container">
        <button
          className={buttonClass}
          onClick={() => onDuplicate(item)}
          title="Duplicar elemento"
        >
          <Copy size={16} />
        </button>
        <button
          className={`${buttonClass} edit-btn`}
          onClick={() => onEdit(item)}
          title="Editar elemento"
        >
          <Edit size={16} />
        </button>
        <button
          className={buttonClass}
          onClick={() => {
            console.log("Botón de vista clickeado para:", item.nombre)
            onView(item)
          }}
          title="Ver detalles del elemento"
        >
          <Eye size={16} />
        </button>
        <button
          className={buttonClass}
          onClick={() => onDelete(item)}
          title="Eliminar elemento"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}
