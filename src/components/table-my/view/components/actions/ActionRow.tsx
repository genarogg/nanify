"use client"

import { FileText } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../ux/select"
import { useGlobalZustand } from "../../../context/Global"

import "./actions-row.css"

import AggEditar from "../modals/AggEditar"
import ViewDetails from "../modals/ViewDatails"

export default function ActionsCell({ item }: any) {
    const { badges, updateItem, configured } = useGlobalZustand()

    const { roles } = badges

    const { rowActions } = configured

    const handleRoleChange = (value: any) => {
        const newRole = Array.isArray(value) ? value[0] : value
        updateItem(item.id, { rol: newRole })
    }

    // Función helper para verificar si una acción existe
    const hasAction = (actionName: string) => {
        return rowActions?.some((action: any) => action.name === actionName)
    }

    const DescargarReporte = () => {
        return (
            <button
                title="Descargar reporte"
                className="action-btn"
                onClick={() => {
                    console.log("Descargar reporte", item.id)
                }}
            >
                <FileText size={16} />
            </button>
        )
    }

    const ChangeRol = () => {
        return (
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
        )
    }

    return (
        <div className="actions-cell">
            {hasAction("changeRol") && (<ChangeRol />)}
            <div className="action-buttons-container">
                {hasAction("view") && (<ViewDetails item={item} />)}
                {hasAction("report") && (<DescargarReporte />)}
                {hasAction("edit") && (<AggEditar item={item} />)}
            </div>
        </div>
    )
}