"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import "./modal.css"

interface ModalProps {
  title?: string // Ahora es opcional
  icon?: React.ReactNode
  children: React.ReactNode
  buttonClassName?: string
  buttonText?: string
  onclick?: () => void
  maxWidth?: string // Añadido para permitir personalización del ancho máximo
  
}

export default function Modal({ 
  title, 
  icon, 
  children, 
  buttonClassName, 
  buttonText = "Guardar", 
  onclick,
  maxWidth = "500px" 
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const openModal = () => {
    setIsOpen(true)
    setIsClosing(false)
  }

  const closeModal = () => {
    setIsClosing(true)
  }

  const handleSave = () => {
    if (onclick) {
      onclick()
    }
    closeModal()
  }

  // Manejar el evento animationend para detectar cuando termina la animación de cierre
  useEffect(() => {
    const content = contentRef.current

    const handleAnimationEnd = (e: AnimationEvent) => {
      if (isClosing && e.animationName === "contentHide") {
        setIsOpen(false)
        setIsClosing(false)
      }
    }

    if (content) {
      content.addEventListener("animationend", handleAnimationEnd as any)
    }

    return () => {
      if (content) {
        content.removeEventListener("animationend", handleAnimationEnd as any)
      }
    }
  }, [isClosing])

  // Manejar overflow del body y eventos de teclado
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    if (isOpen && !isClosing) {
      // Solo establecer overflow hidden cuando el modal está completamente abierto
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    } else {
      // Restaurar overflow cuando el modal no está abierto o se está cerrando
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "unset"
    }

    // Cleanup function que siempre restaura el overflow
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, isClosing])

  // Cerrar modal al hacer click fuera del contenido
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Determinar si es solo icono basado en la presencia del título
  const isIconOnly = !title && icon

  // Renderizar el contenido del botón basado en isIconOnly
  const renderButtonContent = () => {
    if (isIconOnly) {
      return <span className="modal-trigger-icon onli-icon">{icon}</span>
    }
    
    return (
      <>
        {icon && <span className="modal-trigger-icon">{icon}</span>}
        <span>{title}</span>
      </>
    )
  }

  if (!isOpen) {
    return (
      <button 
        className={`modal-trigger ${isIconOnly ? 'modal-trigger-icon-only' : ''} ${buttonClassName || ""}`} 
        onClick={openModal}
        title={isIconOnly ? "Abrir modal" : undefined} // Tooltip genérico para solo icono
      >
        {renderButtonContent()}
      </button>
    )
  }

  return (
    <>
      <button 
        className={`modal-trigger ${isIconOnly ? 'modal-trigger-icon-only' : ''} ${buttonClassName || ""}`} 
        onClick={openModal}
        title={isIconOnly ? "Abrir modal" : undefined}
      >
        {renderButtonContent()}
      </button>

      <div className={`modal-overlay ${isClosing ? "modal-overlay-closing" : ""}`} onClick={handleOverlayClick}>
        <div ref={contentRef} className={`modal-content ${isClosing ? "modal-content-closing" : ""}`} style={{ maxWidth }}>
          <div className="modal-header">
            <h2 className="modal-title">
              {icon && <span className="modal-title-icon">{icon}</span>}
              {title || "Modal"} {/* Fallback si no hay título */}
            </h2>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="modal-save-button" onClick={handleSave}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}