"use client"

import { memo, useCallback, useMemo } from "react"
import { FileText } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../components/ux/select"
import { useGlobal, useGlobalStatic } from "../../../context/Global"

import "./actions-row.css"

import AggEditar from "../modals/AggEditar"
import ViewDetails from "../modals/ViewDatails"

// Memoizamos los componentes internos para evitar re-creaciones
const DescargarReporte = memo(({ itemId }: { itemId: number }) => {
    const handleDownload = useCallback(() => {
        console.log("Descargar reporte", itemId)
    }, [itemId])

    return (
        <button
            title="Descargar reporte"
            className="action-btn"
            onClick={handleDownload}
        >
            <FileText size={16} />
        </button>
    )
})

const ChangeRol = memo(({ item, roles, onRoleChange }: any) => {
    // Memoizamos las opciones del select
    const roleOptions = useMemo(() => 
        Object.entries(roles).map(([key]) => (
            <SelectItem key={key} value={key}>
                {key}
            </SelectItem>
        )), [roles]
    )

    return (
        <Select width={"140px"} value={item.rol} onValueChange={onRoleChange}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {roleOptions}
            </SelectContent>
        </Select>
    )
})

// Componente principal optimizado
const ActionsCell = memo(({ item }: any) => {
    // OPTIMIZACIÓN CRÍTICA: Selector más específico para evitar re-renders
    const updateItem = useGlobal(
        useCallback((state) => state.updateItem, [])
    )
    
    // OPTIMIZACIÓN: Selectores más específicos para badges y rowActions
    const roles = useGlobalStatic(
        useCallback((state) => state.badges.roles, [])
    )
    const rowActions = useGlobalStatic(
        useCallback((state) => state.configured.rowActions, [])
    )

    // OPTIMIZACIÓN: Memoizar rowActions para evitar recálculos
    const availableActions = useMemo(() => {
        if (!rowActions) return { changeRol: false, view: false, report: false, edit: false }
        
        const actionMap = new Map(rowActions.map((action: any) => [action.name, true]))
        
        return {
            changeRol: actionMap.has("changeRol"),
            view: actionMap.has("view"),
            report: actionMap.has("report"),
            edit: actionMap.has("edit")
        }
    }, [rowActions])

    // Memoizamos el handler para evitar re-creaciones
    const handleRoleChange = useCallback((value: any) => {
        const newRole = Array.isArray(value) ? value[0] : value
        updateItem(item.id, { rol: newRole })
    }, [item.id, updateItem])

    return (
        <div className="actions-cell">
            {availableActions.changeRol && (
                <ChangeRol 
                    item={item} 
                    roles={roles} 
                    onRoleChange={handleRoleChange} 
                />
            )}
            <div className="action-buttons-container">
                {availableActions.view && <ViewDetails item={item} />}
                {availableActions.report && <DescargarReporte itemId={item.id} />}
                {availableActions.edit && <AggEditar item={item} />}
            </div>
        </div>
    )
})

// Establecemos displayName para debugging
ActionsCell.displayName = 'ActionsCell'
ChangeRol.displayName = 'ChangeRol'
DescargarReporte.displayName = 'DescargarReporte'

export default ActionsCell