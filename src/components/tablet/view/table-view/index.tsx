"use client"

import { Edit, Eye, Check, Minus, Trash2 } from "lucide-react"
import type { DataTable } from "../../useTable"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../ux/select"
import "./user-management-table.css"
interface TableViewProps {
    users: DataTable[]
    selectedUsers: number[]
    columns: any[]
    select: boolean
    cuadricula: boolean
    onSelectUser: (userId: number) => void
    onSelectAll: () => void
    getSelectAllState: () => string
    onEditUser: (user: DataTable) => void
    onViewUser: (user: DataTable) => void
    onDeleteUser: (user: DataTable) => void
    updateUser: (userId: number, updates: Partial<DataTable>) => void
}

export default function TableView({
    users,
    selectedUsers,
    columns,
    select,
    cuadricula,
    onSelectUser,
    onSelectAll,
    getSelectAllState,
    onEditUser,
    onViewUser,
    onDeleteUser,
    updateUser,
}: TableViewProps) {
    return (
        <div className="table-container">
            <table className={`users-table ${!select ? "no-select" : ""} ${cuadricula ? "with-grid" : ""}`}>
                <thead>
                    <tr>
                        {select && (
                            <th className="select-column">
                                <button
                                    className={`select-btn master-select ${getSelectAllState()}`}
                                    onClick={onSelectAll}
                                    title="Seleccionar todos"
                                >
                                    {getSelectAllState() === "all" && <Check size={14} />}
                                    {getSelectAllState() === "some" && <Minus size={14} />}
                                </button>
                            </th>
                        )}
                        {columns
                            .filter((column) => !column.hidden)
                            .map((column) => (
                                <th key={column.id} className={`${column.id}-column`}>
                                    {column.header}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody style={{ minHeight: "320px", position: "relative" }}>
                    {users.map((user: any, index: any) => (
                        <tr key={user.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                            {select && (
                                <td className="select-column">
                                    <button
                                        className={`select-btn ${selectedUsers.includes(user.id) ? "selected" : ""}`}
                                        onClick={() => onSelectUser(user.id)}
                                        title="Seleccionar usuario"
                                    >
                                        {selectedUsers.includes(user.id) && <Check size={14} />}
                                    </button>
                                </td>
                            )}
                            {columns
                                .filter((column) => !column.hidden)
                                .map((column) => {
                                    if (column.id === "acciones") {
                                        return (
                                            <td key={column.id} className="acciones-column">
                                                <div className="actions-cell">
                                                    <Select
                                                        value={user.rol}
                                                        onValueChange={(newRole) => updateUser(user.id, { rol: newRole as string })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="ADMIN_DACE">Admin DACE</SelectItem>
                                                            <SelectItem value="ADMIN_FUNDESUR">Admin FUNDESUR</SelectItem>
                                                            <SelectItem value="SUPER_USUARIO">Super Usuario</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <div className="action-buttons-container">
                                                        <button
                                                            className="action-btn"
                                                            onClick={() => onEditUser(user)}
                                                            title="Editar usuario"
                                                        >
                                                            <Edit size={16} />
                                                        </button>
                                                        <button
                                                            className="action-btn"
                                                            onClick={() => onViewUser(user)}
                                                            title="Ver usuario"
                                                        >
                                                            <Eye size={16} />
                                                        </button>
                                                        <button
                                                            className="action-btn"
                                                            onClick={() => onDeleteUser(user)}
                                                            title="Eliminar usuario"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        )
                                    }

                                    return (
                                        <td key={column.id} className={`${column.id}-column`}>
                                            {column.id === "nombre" && <span className="name-cell">{user[column.accessor]}</span>}
                                            {column.id === "correo" && <span className="email-cell">{user[column.accessor]}</span>}
                                            {column.id === "rol" && (
                                                <span className={`role-badge role-${user.rol.toLowerCase().replace("_", "-")}`}>
                                                    {user.rol}
                                                </span>
                                            )}
                                            {column.id !== "nombre" &&
                                                column.id !== "correo" &&
                                                column.id !== "rol" &&
                                                user[column.accessor]}
                                        </td>
                                    )
                                })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
