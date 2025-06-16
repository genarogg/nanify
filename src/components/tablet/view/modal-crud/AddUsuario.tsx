"use client"
import type React from "react"
import { useState } from "react"
import { UserPlus } from "lucide-react"
import Modal from "../../../ux/modal"
import { useTableState } from "../../context/TableContext"
import type { DataTable } from "../../context/types"
import "./add-usuario.css"

type AddUsuarioProps = {}

const AddUsuario: React.FC<AddUsuarioProps> = () => {
  const { addItem } = useTableState()

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    cedula: "",
    rol: "ADMIN_DACE",
  })

  const handleSave = () => {
    // Validar que los campos requeridos estén llenos
    if (!formData.nombre || !formData.correo || !formData.cedula) {
      alert("Por favor, complete todos los campos requeridos (Nombre, Correo, Cédula)")
      return
    }

    // Crear nuevo usuario
    const newUser: DataTable = {
      id: Date.now(), // Generar ID único
      nombre: formData.nombre.trim(),
      correo: formData.correo.trim(),
      telefono: formData.telefono.trim(),
      cedula: formData.cedula.trim(),
      rol: formData.rol,
      status: "ACTIVO",
    }

    // Agregar a la tabla
    addItem(newUser)

    // Limpiar formulario
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      cedula: "",
      rol: "ADMIN_DACE",
    })

    console.log("Nuevo usuario agregado:", newUser)
  }

  return (
    <>
      <Modal
        title="Agregar Usuario"
        icon={<UserPlus size={16} />}
        buttonClassName="table-modal-btn add-user-btn"
        buttonText="Guardar Usuario"
        onclick={handleSave}
      >
        <div className="add-user-form">
          <div style={{ marginBottom: "16px" }}>
            <label className="modal-label">Nombre completo *</label>
            <input
              className="modal-input"
              type="text"
              placeholder="Ingrese el nombre completo"
              value={formData.nombre}
              onChange={(e) => setFormData((prev) => ({ ...prev, nombre: e.target.value }))}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="modal-label">Correo electrónico *</label>
            <input
              className="modal-input"
              type="email"
              placeholder="ejemplo@correo.com"
              value={formData.correo}
              onChange={(e) => setFormData((prev) => ({ ...prev, correo: e.target.value }))}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="modal-label">Teléfono</label>
            <input
              className="modal-input"
              type="tel"
              placeholder="04XX-XXXXXXX"
              value={formData.telefono}
              onChange={(e) => setFormData((prev) => ({ ...prev, telefono: e.target.value }))}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="modal-label">Cédula de identidad *</label>
            <input
              className="modal-input"
              type="text"
              placeholder="12345678"
              value={formData.cedula}
              onChange={(e) => setFormData((prev) => ({ ...prev, cedula: e.target.value }))}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label className="modal-label">Rol del usuario</label>
            <select
              className="modal-input"
              value={formData.rol}
              onChange={(e) => setFormData((prev) => ({ ...prev, rol: e.target.value }))}
            >
              <option value="ADMIN_DACE">Admin DACE</option>
              <option value="ADMIN_FUNDESUR">Admin FUNDESUR</option>
              <option value="SUPER_USUARIO">Super Usuario</option>
            </select>
          </div>

          <div className="form-info">
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                fontStyle: "italic",
                margin: "0",
                padding: "12px",
                backgroundColor: "#f0f9ff",
                borderRadius: "6px",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              Los campos marcados con (*) son obligatorios. El usuario será creado con estado "Activo" por defecto.
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddUsuario
