"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Filter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./filter-toggle.css"

interface FilterToggleButtonProps {
  children: React.ReactNode
  className?: string
  storageKey?: string
}

const FilterToggleButton: React.FC<FilterToggleButtonProps> = ({
  children,
  className = "",
  storageKey = "table-filters-visible",
}) => {
  const [isVisible, setIsVisible] = useState(true) // Default visible
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar estado desde localStorage al montar el componente
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(storageKey)
      if (savedState !== null) {
        setIsVisible(JSON.parse(savedState))
      }
    } catch (error) {
      console.warn("Error loading filter visibility state:", error)
    } finally {
      setIsLoaded(true)
    }
  }, [storageKey])

  // Guardar estado en localStorage cuando cambie
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(isVisible))
      } catch (error) {
        console.warn("Error saving filter visibility state:", error)
      }
    }
  }, [isVisible, isLoaded, storageKey])

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  // No renderizar hasta que se haya cargado el estado
  if (!isLoaded) {
    return (
      <div className="filter-toggle-container">
        <div className="filter-content-placeholder"></div>
        <button className="filter-toggle-icon-btn loading" disabled>
          <Filter size={16} />
        </button>
      </div>
    )
  }

  return (
    <div className="filter-toggle-container">
      {/* Contenido de Filtros con Animación - Posición fija */}
      <div className="filter-content-area">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              className="filter-content-inline"
              initial={{
                opacity: 0,
                width: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                width: "auto",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                width: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              <div className="filter-content-wrapper">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Botón Toggle - Posición fija */}
      <button
        className={`filter-toggle-icon-btn ${isVisible ? "active" : "inactive"} ${className}`}
        onClick={toggleVisibility}
        title={isVisible ? "Ocultar filtros" : "Mostrar filtros"}
        aria-expanded={isVisible}
        aria-controls="filter-content"
      >
        <motion.div
          animate={{
            rotate: isVisible ? 0 : 180,
            scale: isVisible ? 1 : 0.9,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Filter size={16} />
        </motion.div>

        {/* Indicador de estado */}
        <div className={`filter-status-dot ${isVisible ? "visible" : "hidden"}`}></div>
      </button>
    </div>
  )
}

export default FilterToggleButton
