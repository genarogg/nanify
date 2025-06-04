"use client"

import { Smartphone, Monitor, Settings } from "lucide-react"
import { motion } from "framer-motion"
import "./css/table-view-toggle.css"

interface TableViewToggleProps {
  viewMode: "table" | "cards"
  onViewModeChange: (mode: "table" | "cards") => void
  isAutoMode?: boolean
  onToggleAutoMode?: () => void
  screenWidth?: number
  breakpoint?: number
  showAutoToggle?: boolean
}

export default function TableViewToggle({
  viewMode,
  onViewModeChange,
  isAutoMode = false,
  onToggleAutoMode,
  screenWidth = 0,
  breakpoint = 768,
  showAutoToggle = true,
}: TableViewToggleProps) {
  const isMobile = screenWidth < breakpoint

  return (
    <div className="view-toggle-container">
      {/* Toggle automático */}
      {showAutoToggle && onToggleAutoMode && (
        <div className="auto-toggle-container">
          <motion.button
            className={`auto-toggle-btn ${isAutoMode ? "active" : ""}`}
            onClick={onToggleAutoMode}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title={isAutoMode ? "Modo automático activado" : "Activar modo automático"}
          >
            <Settings size={14} />
            <span className="auto-toggle-text">Auto</span>
          </motion.button>
        </div>
      )}

      {/* Toggle de vista manual */}
      <div className="view-toggle-group">
        <motion.button
          className={`view-toggle-btn ${viewMode === "table" ? "active" : ""} ${isAutoMode && !isMobile ? "auto-active" : ""
            }`}
          onClick={() => onViewModeChange("table")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title="Vista de tabla"
          disabled={isAutoMode && isMobile}
        >
          <Monitor size={16} />
          <span>Tabla</span>
        </motion.button>

        <motion.button
          className={`view-toggle-btn ${viewMode === "cards" ? "active" : ""} ${isAutoMode && isMobile ? "auto-active" : ""
            }`}
          onClick={() => onViewModeChange("cards")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title="Vista de tarjetas"
          disabled={isAutoMode && !isMobile}
        >
          <Smartphone size={16} />
          <span>Tarjetas</span>
        </motion.button>
      </div>

      {/* Indicador de estado automático */}
      {isAutoMode && (
        <div className="auto-indicator">
          <div className={`auto-status ${isMobile ? "mobile" : "desktop"}`}>
            {isMobile ? (
              <>
                <Smartphone size={12} />
                <span>Móvil</span>
              </>
            ) : (
              <>
                <Monitor size={12} />
                <span>Escritorio</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
