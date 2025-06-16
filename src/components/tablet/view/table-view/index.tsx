"use client"

import { Copy, Eye, Trash2, Check, Minus, Edit } from "lucide-react"
import type { DataTable } from "../../context/TableContext"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../ux/select"
import { useTableRowActions } from "../../hooks/useTableRowActions"
import ViewUserModal from "../modal-crud/ViewUserModal"
import "./user-management-table.css"
import { useTableState } from "../../context/TableContext"

interface TableViewProps {
  items: DataTable[]
  selectedItems: number[]
  columns: any[]
  select: boolean
  cuadricula: boolean
  onSelectItem: (itemId: number) => void
  onSelectAll: () => void
  getSelectAllState: () => string

}

export default function TableView({
  items,
  selectedItems,
  columns,
  select,
  cuadricula,
  onSelectItem,
  onSelectAll,
  getSelectAllState,

}: TableViewProps) {
  const { deleteItem } = useTableState()

  // Usar el hook de acciones - NO pasar onCustomView para que use el modal por defecto
  const {
    handleDuplicate,
    handleView,
    handleDelete,
    handleEdit,
    handleRoleChange,
    viewModalOpen,
    selectedItemForView,
    closeViewModal,
  } = useTableRowActions({
    onCustomDelete: (item) => {
      // Usar directamente la función deleteItem del contexto
      deleteItem(item.id)
    },
    // NO pasar onCustomView para que use el modal interno
    showConfirmDialog: true,
  })

  return (
    <>
      <div className="table-container">
        <table className={`data-table ${!select ? "no-select" : ""} ${cuadricula ? "with-grid" : ""}`}>
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
            {items.map((item: any, index: any) => (
              <tr key={item.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                {select && (
                  <td className="select-column">
                    <button
                      className={`select-btn ${selectedItems.includes(item.id) ? "selected" : ""}`}
                      onClick={() => onSelectItem(item.id)}
                      title="Seleccionar elemento"
                    >
                      {selectedItems.includes(item.id) && <Check size={14} />}
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
                            <Select value={item.rol} onValueChange={(newRole: any) => handleRoleChange(item, newRole)}>
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
                                onClick={() => handleDuplicate(item)}
                                title="Duplicar elemento"
                              >
                                <Copy size={16} />
                              </button>
                              <button
                                className="action-btn edit-btn"
                                onClick={() => handleEdit(item)}
                                title="Editar elemento"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                className="action-btn"
                                onClick={() => {
                                  console.log("Botón de vista clickeado para:", item.nombre)
                                  handleView(item)
                                }}
                                title="Ver detalles del elemento"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                className="action-btn"
                                onClick={() => handleDelete(item)}
                                title="Eliminar elemento"
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
                        {column.id === "nombre" && <span className="name-cell">{item[column.accessor]}</span>}
                        {column.id === "correo" && <span className="email-cell">{item[column.accessor]}</span>}
                        {column.id === "rol" && (
                          <span className={`role-badge role-${item.rol.toLowerCase().replace("_", "-")}`}>
                            {item.rol}
                          </span>
                        )}
                        {column.id !== "nombre" &&
                          column.id !== "correo" &&
                          column.id !== "rol" &&
                          item[column.accessor]}
                      </td>
                    )
                  })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de vista de usuario */}
      <ViewUserModal isOpen={viewModalOpen} onClose={closeViewModal} user={selectedItemForView} />
    </>
  )
}
