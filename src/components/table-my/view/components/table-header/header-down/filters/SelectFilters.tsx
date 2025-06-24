"use client"
import type React from "react"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectSeparator,
} from "../../../../../../ux/select"
import { useGlobalZustand } from "../../../../../context/Global"

type SelectFiltersProps = {}

const SelectFilters: React.FC<SelectFiltersProps> = () => {
    const { data, setData, roles, estados, badges } = useGlobalZustand()
    const { filterValue } = data

    const handleRolChange = (value: string | string[]) => {
        const rolValue = Array.isArray(value) ? value[0] : value
        setData({
            filterValue: {
                ...filterValue,
                rol: rolValue,
            },
        })
    }

    const handleEstadoChange = (value: string | string[]) => {
        const estadoValue = Array.isArray(value) ? value[0] : value
        setData({
            filterValue: {
                ...filterValue,
                estado: estadoValue,
            },
        })
    }

    const SelectRol = () => {
        return (
            <div className="table-role-filter-container">
                <Select value={filterValue.rol || ""} onValueChange={handleRolChange} width="170px">
                    <SelectTrigger>
                        <SelectValue placeholder="Filtrar por rol" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Todos">Todos</SelectItem>
                        {Object.entries(roles).map(([key, value]) => (
                            <SelectItem key={key} value={value as string}>
                                {badges.roles[key as keyof typeof badges.roles]?.name || (value as string)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        )
    }

    const SelectEstado = () => {
        return (
            <div className="table-status-filter-container">
                <Select value={filterValue.estado || ""} onValueChange={handleEstadoChange} width="170px">
                    <SelectTrigger>
                        <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Todos">Todos</SelectItem>
                        {Object.entries(estados).map(([key, value]) => (
                            <SelectItem key={key} value={value as string}>
                                {badges.estados[key as keyof typeof badges.estados]?.name || (value as string)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        )
    }

    return (
        <div className="select-filters-container" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <SelectEstado />
            <SelectRol />
        </div>
    )
}

export default SelectFilters
