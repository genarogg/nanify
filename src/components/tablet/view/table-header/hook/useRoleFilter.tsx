import { useCallback, memo, useEffect, useState } from "react"
import { useFilterConfig } from "../../../context/TableContext"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "../../../../ux/select"

interface RoleOption {
    value: string
    label: string
}

const STATIC_ROLE_OPTIONS: RoleOption[] = [
    { value: "todos", label: "Todos" },
    { value: "ADMIN_DACE", label: "Admin DACE" },
    { value: "ADMIN_FUNDESUR", label: "Admin FUNDESUR" },
    { value: "SUPER_USUARIO", label: "Super Usuario" },
];

const useRoleFilter = () => {
    const { selectedRole, onRoleChange } = useFilterConfig()
    const [roleOptions, setRoleOptions] = useState<RoleOption[]>(STATIC_ROLE_OPTIONS);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await fetch("/api/roles");

                if (res.ok) {
                    const data: RoleOption[] = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setRoleOptions(data);
                    }
                } else {
                    setRoleOptions(STATIC_ROLE_OPTIONS);
                }
            } catch (error) {
                console.error("Error al cargar los roles:", error)
                setRoleOptions(STATIC_ROLE_OPTIONS);
            }
        };
        fetchRoles();
    }, []);

    const handleRoleFilterChange = useCallback((value: string | string[]): void => {
        const role = Array.isArray(value) ? value[0] : value
        console.log("Filtro de rol cambiado:", role)
        onRoleChange(role)
    }, [onRoleChange])

    const RoleFilterSelect: React.FC = memo(() => (
        <div className="table-role-filter-container">
            <Select value={selectedRole || "todos"} onValueChange={handleRoleFilterChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Filtrar por rol" />
                </SelectTrigger>
                <SelectContent>
                    {roleOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    ))

    RoleFilterSelect.displayName = 'RoleFilterSelect'

    return {
        RoleFilterSelect
    } as const
}

export default useRoleFilter