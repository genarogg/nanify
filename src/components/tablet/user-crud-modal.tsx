"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Save, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./user-crud-modal.css"
import type { User } from "./useTable"

interface UserCrudModalProps {
  isOpen: boolean
  mode: "create" | "edit" | "view" | "delete"
  user?: User | null
  onClose: () => void
  onSave: (user: Partial<User>) => void
  onDelete?: (userId: number) => void
}

const roleOptions = [
  { value: "ADMIN_DACE", label: "Admin DACE" },
  { value: "ADMIN_FUNDESUR", label: "Admin FUNDESUR" },
  { value: "SUPER_USUARIO", label: "Super Usuario" },
]

export default function UserCrudModal({ isOpen, mode, user, onClose, onSave, onDelete }: UserCrudModalProps) {
  const [formData, setFormData] = useState<Partial<User>>({
    nombre: "",
    correo: "",
    telefono: "",
    cedula: "",
    rol: "ADMIN_DACE",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (user && (mode === "edit" || mode === "view")) {
      setFormData(user)
    } else if (mode === "create") {
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        cedula: "",
        rol: "ADMIN_DACE",
      })
    }
    setErrors({})
  }, [user, mode, isOpen])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre?.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.correo?.trim()) {
      newErrors.correo = "El correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = "El correo no es válido"
    }

    if (!formData.telefono?.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    } else if (!/^\d{11}$/.test(formData.telefono.replace(/\D/g, ""))) {
      newErrors.telefono = "El teléfono debe tener 11 dígitos"
    }

    if (!formData.cedula?.trim()) {
      newErrors.cedula = "La cédula es requerida"
    } else if (!/^\d{7,8}$/.test(formData.cedula)) {
      newErrors.cedula = "La cédula debe tener entre 7 y 8 dígitos"
    }

    if (!formData.rol) {
      newErrors.rol = "El rol es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (mode === "view") return

    if (mode === "delete" && user) {
      onDelete?.(user.id)
      onClose()
      return
    }

    if (validateForm()) {
      if (mode === "create") {
        onSave({
          ...formData,
          id: Date.now(), // En una app real, esto vendría del backend
        })
      } else if (mode === "edit" && user) {
        onSave({
          ...formData,
          id: user.id,
        })
      }
      onClose()
    }
  }

  const handleInputChange = (field: keyof User, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const getModalTitle = () => {
    switch (mode) {
      case "create":
        return "Agregar Usuario"
      case "edit":
        return "Editar Usuario"
      case "view":
        return "Ver Usuario"
      case "delete":
        return "Eliminar Usuario"
      default:
        return ""
    }
  }

  const getSubmitButtonText = () => {
    switch (mode) {
      case "create":
        return "Crear Usuario"
      case "edit":
        return "Guardar Cambios"
      case "delete":
        return "Eliminar"
      default:
        return "Cerrar"
    }
  }

  const isReadOnly = mode === "view"
  const isDeleteMode = mode === "delete"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="modal-title">{getModalTitle()}</h2>
              <button className="modal-close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {isDeleteMode ? (
                <div className="delete-confirmation">
                  <div className="delete-icon">
                    <Trash2 size={48} />
                  </div>
                  <p className="delete-message">
                    ¿Estás seguro de que deseas eliminar al usuario <strong>{user?.nombre}</strong>?
                  </p>
                  <p className="delete-warning">Esta acción no se puede deshacer.</p>
                </div>
              ) : (
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                      Nombre Completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className={`form-input ${errors.nombre ? "error" : ""}`}
                      value={formData.nombre || ""}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      readOnly={isReadOnly}
                      placeholder="Ingrese el nombre completo"
                    />
                    {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="correo" className="form-label">
                      Correo Electrónico *
                    </label>
                    <input
                      id="correo"
                      type="email"
                      className={`form-input ${errors.correo ? "error" : ""}`}
                      value={formData.correo || ""}
                      onChange={(e) => handleInputChange("correo", e.target.value)}
                      readOnly={isReadOnly}
                      placeholder="ejemplo@correo.com"
                    />
                    {errors.correo && <span className="error-message">{errors.correo}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className={`form-input ${errors.telefono ? "error" : ""}`}
                      value={formData.telefono || ""}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      readOnly={isReadOnly}
                      placeholder="04123456789"
                    />
                    {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cedula" className="form-label">
                      Cédula *
                    </label>
                    <input
                      id="cedula"
                      type="text"
                      className={`form-input ${errors.cedula ? "error" : ""}`}
                      value={formData.cedula || ""}
                      onChange={(e) => handleInputChange("cedula", e.target.value)}
                      readOnly={isReadOnly}
                      placeholder="12345678"
                    />
                    {errors.cedula && <span className="error-message">{errors.cedula}</span>}
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="rol" className="form-label">
                      Rol *
                    </label>
                    <select
                      id="rol"
                      className={`form-select ${errors.rol ? "error" : ""}`}
                      value={formData.rol || ""}
                      onChange={(e) => handleInputChange("rol", e.target.value)}
                      disabled={isReadOnly}
                    >
                      {roleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.rol && <span className="error-message">{errors.rol}</span>}
                  </div>
                </div>
              )}

              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancelar
                </button>
                {!isReadOnly && (
                  <button type="submit" className={`btn ${isDeleteMode ? "btn-danger" : "btn-primary"}`}>
                    {isDeleteMode ? <Trash2 size={16} /> : <Save size={16} />}
                    {getSubmitButtonText()}
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
