"use client"

import { FileText } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../ux/select"
import { useGlobalZustand } from "../../../context/Global"

import "./actions-row.css"

import AggEditar from "../modals/AggEditar"
import ViewDetails from "../modals/ViewDatails"

export default function ActionsCell({ item }: any) {
  const { badges, updateItem } = useGlobalZustand()

  const { roles } = badges

  const handleRoleChange = (value: any) => {
    const newRole = Array.isArray(value) ? value[0] : value
    updateItem(item.id, { rol: newRole })
  }

  return (
    <div className="actions-cell">
      <Select width={"140px"} value={item.rol} onValueChange={handleRoleChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(roles).map(([key]) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="action-buttons-container">
        <ViewDetails item={item} />
        <button
          title="Descargar reporte"
          className="action-btn"
          onClick={() => {
            console.log("Descargar reporte", item.id)
          }}
        >
          <FileText size={16} />
        </button>
        <AggEditar item={item} />
      </div>
    </div>
  )
}
