"use client"

import { Edit, Eye, Trash2, Check } from "lucide-react"
import "./css/table-card-view.css"
import type { User } from "./useTable"

interface TableCardViewProps {
  users: User[]
  selectedUsers: number[]
  onSelectUser: (userId: number) => void
  onEditUser: (user: User) => void
  onViewUser: (user: User) => void
  onDeleteUser: (user: User) => void
  showSelection?: boolean
}

export default function TableCardView({
  users,
  selectedUsers,
  onSelectUser,
  onEditUser,
  onViewUser,
  onDeleteUser,
  showSelection = true,
}: TableCardViewProps) {
  const isSelected = (userId: number) => selectedUsers.includes(userId)

  return (
    <div className="card-view-container">
      {users.map((user) => (
        <div key={user.id} className={`user-card ${isSelected(user.id) ? "selected" : ""}`}>
          {/* Header de la tarjeta */}
          <div className="card-header">
            <div className="card-title-section">
              {showSelection && (
                <button
                  className={`card-select-btn ${isSelected(user.id) ? "selected" : ""}`}
                  onClick={() => onSelectUser(user.id)}
                  title="Seleccionar usuario"
                >
                  {isSelected(user.id) && <Check size={14} />}
                </button>
              )}
              <h3 className="card-title">{user.nombre}</h3>
            </div>
            <div className="card-actions">
              <button className="card-action-btn" onClick={() => onEditUser(user)} title="Editar usuario">
                <Edit size={16} />
              </button>
              <button className="card-action-btn" onClick={() => onViewUser(user)} title="Ver usuario">
                <Eye size={16} />
              </button>
              <button className="card-action-btn" onClick={() => onDeleteUser(user)} title="Eliminar usuario">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="card-content">
            <div className="card-field">
              <span className="field-label">ID:</span>
              <span className="field-value">{user.id}</span>
            </div>

            <div className="card-field">
              <span className="field-label">Email:</span>
              <span className="field-value email-value">{user.correo}</span>
            </div>

            <div className="card-field">
              <span className="field-label">Teléfono:</span>
              <span className="field-value">{user.telefono}</span>
            </div>

            <div className="card-field">
              <span className="field-label">Cédula:</span>
              <span className="field-value">{user.cedula}</span>
            </div>

            <div className="card-field">
              <span className="field-label">Rol:</span>
              <span className={`role-badge role-${user.rol.toLowerCase().replace("_", "-")}`}>{user.rol}</span>
            </div>
          </div>

          {/* Footer de la tarjeta */}
          <div className="card-footer">
            <button className="card-details-btn" onClick={() => onViewUser(user)}>
              Ver más
            </button>
          </div>
        </div>
      ))}

      {users.length === 0 && (
        <div className="no-cards">
          <p>No se encontraron usuarios que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  )
}
