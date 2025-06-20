"use client"

import type React from "react"

import "./css/title.css"
import { useTableState } from "../../../context/TableContext"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../ux/select"

interface DataStatusIndicatorProps {
  type: "loading" | "error" | "fallback"
  message: string
  onRetry?: () => void
}

const Title: React.FC = () => {
  const { dataLoading, dataError, refetchData, userRole, updateUserRole } = useTableState()

  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === "development"

  const DataStatusIndicator: React.FC<DataStatusIndicatorProps> = ({ type, message, onRetry }) => {
    const className = `data-status-indicator ${type}`
    const dotClassName = `status-dot ${type}`

    return (
      <div className={className}>
        <span className={dotClassName}></span>
        <span className="status-text">{message}</span>
        {type === "error" && onRetry && (
          <button className="retry-btn" onClick={onRetry}>
            Reintentar
          </button>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="table-header-title-section">
        <div className="title-and-role-container">
          <h2 className="table-title">Usuarios</h2>

          {/* Development mode user role select */}
          {true && (
            <div className="dev-user-role-select">
              <Select value={userRole} onValueChange={(value) => updateUserRole(value as "super" | "asistente")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="super">Super</SelectItem>
                  <SelectItem value="asistente">Asistente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {dataLoading && <DataStatusIndicator type="loading" message="Cargando datos..." />}

        {dataError && <DataStatusIndicator type="error" message={`Error: ${dataError}`} onRetry={refetchData} />}
      </div>
      <div className="table-header-divider"></div>
    </>
  )
}

export default Title
