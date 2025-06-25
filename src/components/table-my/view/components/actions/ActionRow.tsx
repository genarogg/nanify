"use client"

import { memo, useCallback, useMemo } from "react"
import { FileText } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../ux/select"
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
    // Optimización: Solo suscribirse a updateItem, no al estado completo
    const updateItem = useGlobal(state => state.updateItem)
    
    // Optimización: Solo obtener lo que necesitamos del estado estático
    const badges = useGlobalStatic(state => state.badges)
    const rowActions = useGlobalStatic(state => state.configured.rowActions)

    const { roles } = badges

    // Memoizamos el handler para evitar re-creaciones
    const handleRoleChange = useCallback((value: any) => {
        const newRole = Array.isArray(value) ? value[0] : value
        updateItem(item.id, { rol: newRole })
    }, [item.id, updateItem])

    // Memoizamos la función de verificación de acciones
    const hasAction = useCallback((actionName: string) => {
        return rowActions?.some((action: any) => action.name === actionName)
    }, [rowActions])

    // Memoizamos qué acciones están disponibles para evitar recálculos
    const availableActions = useMemo(() => ({
        changeRol: hasAction("changeRol"),
        view: hasAction("view"),
        report: hasAction("report"),
        edit: hasAction("edit")
    }), [hasAction])

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