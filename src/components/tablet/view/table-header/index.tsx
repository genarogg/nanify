"use client"

import { Search, Printer } from "lucide-react"
import "./table-header.css"

import AddUsuario from "../modal-crud/AddUsuario"
import { useTableState, useUIConfig } from "../../context/TableContext"

export default function TableHeader() {
  const { searchTerm, handleSearch, getSelectedUsers } = useTableState()
  const { title, searchPlaceholder } = useUIConfig()

  const handlePrintSelected = () => {
    const selectedUsers = getSelectedUsers()
    if (selectedUsers.length === 0) {
      console.log("No hay usuarios seleccionados para imprimir")
      return
    }
    console.log("Usuarios seleccionados para imprimir:", selectedUsers)
  }

  return (
    <div className="table-header-container">
      {/* Título principal */}
      <div className="table-header-title-section">
        <h1 className="table-title">{title}</h1>
      </div>

      {/* Línea separadora */}
      <div className="table-header-divider"></div>

      {/* Controles */}
      <div className="table-header-controls-section">
        <div className="table-search-container">
          <Search className="table-search-icon" size={20} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="table-search-input"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* New Modal Buttons */}
        <div className="table-modal-buttons-container">
          <button className="modal-trigger" onClick={handlePrintSelected} title="Imprimir seleccionados">
            <span className="modal-trigger-icon">
              <Printer size={16} />
            </span>

          </button>
          <div className="modal-button-wrapper">
            <AddUsuario />
          </div>

        </div>
      </div>
    </div>
  )
}
