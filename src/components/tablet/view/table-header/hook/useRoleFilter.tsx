import { useCallback, memo, useEffect, useState } from "react"
import { useFilterConfig } from "../../../context/TableContext"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "../../../../ux/select"

interface StatusOption {
    value: string
    label: string
}

const STATIC_STATUS_OPTIONS: StatusOption[] = [
    { value: "todos", label: "Todos" },
    { value: "ACTIVO", label: "Activo" },
    { value: "INACTIVO", label: "Inactivo" },
    { value: "pendiente", label: "Pendiente" },
    { value: "suspendido", label: "Suspendido" },
    { value: "bloqueado", label: "Bloqueado" },
  ]


const StatusFilterSelect: React.FC = memo(() => {
    const { selectedStatus, onStatusChange } = useFilterConfig()
    const [statusOptions, setStatusOptions] = useState<StatusOption[]>(STATIC_STATUS_OPTIONS);
 
    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const res = await fetch("/api/statuses");

                if (res.ok) {
                    const data: StatusOption[] = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setStatusOptions(data);
                    }
                } else {
                    setStatusOptions(STATIC_STATUS_OPTIONS);
                }
            } catch (error) {
                console.error("Error al cargar los estados:", error)
                setStatusOptions(STATIC_STATUS_OPTIONS);
            }
        };
        fetchStatuses();
    }, []);

    const handleStatusFilterChange = useCallback((value: string | string[]): void => {
        const status = Array.isArray(value) ? value[0] : value
        console.log("Filtro de estado cambiado:", status)
        onStatusChange(status)
    }, [onStatusChange])

    return (
        <div className="table-status-filter-container">
            <Select value={selectedStatus || "todos"} onValueChange={handleStatusFilterChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                    {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
})

export default StatusFilterSelect