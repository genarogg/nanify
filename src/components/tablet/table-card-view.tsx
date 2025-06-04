"use client"

import { Edit, Eye, Trash2, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./table-card-view.css"
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
      <AnimatePresence mode="popLayout">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.05,
            }}
            className={`user-card ${isSelected(user.id) ? "selected" : ""}`}
          >
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
                <motion.button
                  className="card-action-btn edit-btn"
                  onClick={() => onEditUser(user)}
                  title="Editar usuario"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit size={16} />
                </motion.button>
                <motion.button
                  className="card-action-btn view-btn"
                  onClick={() => onViewUser(user)}
                  title="Ver usuario"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={16} />
                </motion.button>
                <motion.button
                  className="card-action-btn delete-btn"
                  onClick={() => onDeleteUser(user)}
                  title="Eliminar usuario"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trash2 size={16} />
                </motion.button>
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
          </motion.div>
        ))}
      </AnimatePresence>

      {users.length === 0 && (
        <motion.div
          className="no-cards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>No se encontraron usuarios que coincidan con la búsqueda.</p>
        </motion.div>
      )}
    </div>
  )
}
