"use client"

import { Edit, Eye, Trash2, Check } from "lucide-react"
import "./table-card-view.css"
import type { DataTable } from "../../context/TableContext"

interface TableCardViewProps {
  items: DataTable[]
  selectedItems: number[]
  onSelectItem: (itemId: number) => void
  onEditItem: (item: DataTable) => void
  onViewItem: (item: DataTable) => void
  onDeleteItem: (item: DataTable) => void
  showSelection?: boolean
}

export default function TableCardView({
  items,
  selectedItems,
  onSelectItem,
  onEditItem,
  onViewItem,
  onDeleteItem,
  showSelection = true,
}: TableCardViewProps) {
  const isSelected = (itemId: number) => selectedItems.includes(itemId)

  return (
    <div className="card-view-container">
      {items.map((item) => (
        <div key={item.id} className={`item-card ${isSelected(item.id) ? "selected" : ""}`}>
          {/* Header de la tarjeta */}
          <div className="card-header">
            <div className="card-title-section">
              {showSelection && (
                <button
                  className={`card-select-btn ${isSelected(item.id) ? "selected" : ""}`}
                  onClick={() => onSelectItem(item.id)}
                  title="Seleccionar elemento"
                >
                  {isSelected(item.id) && <Check size={14} />}
                </button>
              )}
              <h3 className="card-title">{item.nombre}</h3>
            </div>
            <div className="card-actions">
              <button className="card-action-btn" onClick={() => onEditItem(item)} title="Editar elemento">
                <Edit size={16} />
              </button>
              <button className="card-action-btn" onClick={() => onViewItem(item)} title="Ver elemento">
                <Eye size={16} />
              </button>
              <button className="card-action-btn" onClick={() => onDeleteItem(item)} title="Eliminar elemento">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="card-content">
            <div className="card-field">
              <span className="field-label">ID:</span>
              <span className="field-value">{item.id}</span>
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
              <span className={`role-badge role-${item.rol.toLowerCase().replace("_", "-")}`}>{item.rol}</span>
            </div>
          </div>

          {/* Footer de la tarjeta */}
          <div className="card-footer">
            <button className="card-details-btn" onClick={() => onViewItem(item)}>
              Ver más
            </button>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className="no-cards">
          <p>No se encontraron elementos que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  )
}
