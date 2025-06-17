"use client"

import { Check } from "lucide-react"
import { useTableRowActions } from "../../../context/hooks/useTableRowActions"
import ViewUserModal from "../../modal-crud/ViewUserModal"
import "./table-card-view.css"
import { useTableContext, useTableState } from "../../../context/TableContext"
import ActionsColumn from "../components/ActionsColumn"
import Switch from "../../../../ux/btns/switch"
import BadgeWrapper from "../components/BadgeWrapper"

export default function TableCardView() {
  const { tableState, config } = useTableContext()
  const { deleteItem } = useTableState()

  const handleItemSelect = (itemId: number) => {
    tableState.handleSelectItem(itemId)
  }

  const { currentItems, selectedItems } = tableState
  const { select } = config

  // Usar el hook de acciones - NO pasar onCustomView para que use el modal por defecto
  const { handleDuplicate, handleView, handleDelete, handleEdit, viewModalOpen, selectedItemForView, closeViewModal } =
    useTableRowActions({
      // NO pasar onCustomView para que use el modal interno
      onCustomDelete: (item) => {
        // Usar directamente la función deleteItem del contexto
        deleteItem(item.id)
      },
      showConfirmDialog: true,
    })

  const isSelected = (itemId: number) => selectedItems.includes(itemId)

  return (
    <>
      <div className="card-view-container">
        {currentItems.map((item) => (
          <div key={item.id} className={`item-card ${isSelected(item.id) ? "selected" : ""}`}>
            {/* Status indicator */}
            <div className="status-indicator"></div>

            {/* Header de la tarjeta */}
            <div className="card-header">
              <div className="card-title-section">
                {select && (
                  <button
                    className={`card-select-btn ${isSelected(item.id) ? "selected" : ""}`}
                    onClick={() => handleItemSelect(item.id)}
                    title="Seleccionar elemento"
                  >
                    {isSelected(item.id) && <Check size={14} />}
                  </button>
                )}
                <h3 className="card-title">{item.nombre}</h3>
              </div>
              <div className="card-actions">
                <div className="status-switch-container">
                  <Switch
                    isOn={item.status === "ACTIVO"}
                    onToggle={() => {
                      // Actualizar el estado del item
                      const newStatus = item.status === "ACTIVO" ? "INACTIVO" : "ACTIVO"
                      console.log(`Cambiando estado de ${item.nombre} a ${newStatus}`)
                      // Aquí puedes agregar la lógica para actualizar el estado en el contexto
                      tableState.updateItem(item.id, { status: newStatus })
                    }}
                  />
                  <span className={`status-text ${item.status === "ACTIVO" ? "active" : "inactive"}`}>
                    {item.status === "ACTIVO" ? "Activo" : "Inactivo"}
                  </span>
                </div>

              </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="card-content">
              <div className="card-field">
                <span className="field-label">ID:</span>
                <span className="field-value id-value">#{item.id}</span>
              </div>

              <div className="card-field">
                <span className="field-label">Email:</span>
                <span className="field-value email-value">{item.correo}</span>
              </div>

              <div className="card-field">
                <span className="field-label">Teléfono:</span>
                <span className="field-value">{item.telefono}</span>
              </div>

              <div className="card-field">
                <span className="field-label">Cédula:</span>
                <span className="field-value">{item.cedula}</span>
              </div>

              <div className="card-field">
                <span className="field-label">Rol:</span>
                <BadgeWrapper
                  type="role"
                  value={item.rol}
                  className="card-badge"
                />
              </div>

              <div className="card-field">
                <span className="field-label">Estado:</span>
                <BadgeWrapper
                  type="status"
                  value={item.status}
                  className="card-badge"
                />
              </div>

              {/* Nueva barra de acciones igual a la del modo tabla */}
              <div className="card-table-actions">
                <ActionsColumn
                  item={item}
                  onDuplicate={handleDuplicate}
                  onView={handleView}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onRoleChange={(item, newRole) => {
                    // Implementar cambio de rol para cards si es necesario
                    console.log("Cambio de rol en card:", item, newRole)
                  }}
                  showRoleSelect={true}
                  variant="table"
                />
              </div>
            </div>

            {/* Footer de la tarjeta - quitar estilo de botón */}
            <div className="card-footer">
              <div className="card-details-text" onClick={() => handleView(item)}>
                Ver detalles completos
              </div>
            </div>
          </div>
        ))}

        {currentItems.length === 0 && (
          <div className="no-cards">
            <p>No se encontraron elementos que coincidan con la búsqueda.</p>
          </div>
        )}
      </div>

      {/* Modal de vista de usuario */}
      <ViewUserModal isOpen={viewModalOpen} onClose={closeViewModal} user={selectedItemForView} />
    </>
  )
}