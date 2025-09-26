"use client"

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react"
import "./dropdown.css"

interface DropdownContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
  calculatedDirection: "up" | "down"
  setCalculatedDirection: React.Dispatch<React.SetStateAction<"up" | "down">>
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined)

const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) throw new Error("Dropdown components must be used within a DropdownMenu")
  return context
}

const DropdownMenu: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [calculatedDirection, setCalculatedDirection] = useState<"up" | "down">("down")
  const triggerRef = useRef<HTMLElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <DropdownContext.Provider
      value={{ isOpen, setIsOpen, triggerRef, calculatedDirection, setCalculatedDirection }}
    >
      <div ref={dropdownRef} className={`dropdown ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// --- Trigger ---
interface DropdownMenuTriggerProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

 const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
  className = "",
  asChild = false,
}) => {
  const { isOpen, setIsOpen, triggerRef, setCalculatedDirection } = useDropdown()

  const calculateDirection = useCallback(() => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const spaceBelow = viewportHeight - rect.bottom
    const spaceAbove = rect.top
    const estimatedHeight = 240 // altura estimada del menú
    if (spaceBelow < estimatedHeight && spaceAbove > spaceBelow) {
      setCalculatedDirection("up")
    } else {
      setCalculatedDirection("down")
    }
  }, [triggerRef, setCalculatedDirection])

  const handleClick = () => {
    if (!isOpen) calculateDirection()
    setIsOpen(!isOpen)
  }

  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement<any>
    return React.cloneElement(childElement, {
      ref: triggerRef,
      onClick: handleClick,
      "aria-expanded": isOpen,
      "aria-haspopup": "menu",
      className: `${childElement.props.className || ""} ${isOpen ? "open" : ""} ${className}`.trim(),
    })
  }

  return (
    <button
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      className={`dropdown-trigger ${isOpen ? "open" : ""} ${className}`}
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      type="button"
    >
      {children}
      <svg
        className={`dropdown-arrow ${isOpen ? "open" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

// --- Content ---
interface DropdownMenuContentProps {
  children: React.ReactNode
  className?: string
  align?: "start" | "center" | "end"
  maxHeight?: number | string
  maxWidth?: number | string
  asChild?: boolean
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className = "",
  align = "start",
  maxHeight,
  maxWidth,
  asChild = false,
}) => {
  const { isOpen, calculatedDirection } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const firstFocusable = contentRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (firstFocusable) setTimeout(() => firstFocusable.focus(), 0)
    }
  }, [isOpen])

  const style: React.CSSProperties = useMemo(() => {
    const styles: React.CSSProperties = {}
    const margin = 8 // margen contra los bordes

    if (maxHeight) styles.maxHeight = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
    if (maxWidth) styles.maxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth

    // Posición horizontal inicial
    if (align === "center") {
      styles.left = "50%"
      styles.transform = "translateX(-50%)"
    } else if (align === "end") {
      styles.right = "0"
      styles.left = "auto"
    } else {
      styles.left = "0"
    }

    // Dirección vertical
    if (calculatedDirection === "up") {
      styles.bottom = "100%"
      styles.top = "auto"
      styles.marginBottom = "4px"
    } else {
      styles.top = "100%"
      styles.bottom = "auto"
      styles.marginTop = "4px"
    }

    // Corrección contra bordes
    if (isOpen && contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth

      if (rect.left < margin) {
        styles.left = `${margin}px`
        styles.transform = "none"
      }
      if (rect.right > viewportWidth - margin) {
        styles.right = `${margin}px`
        styles.left = "auto"
        styles.transform = "none"
      }
    }

    return styles
  }, [align, maxHeight, maxWidth, calculatedDirection, isOpen])

  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement<any>
    return React.cloneElement(childElement, {
      ref: contentRef,
      className: `dropdown-content ${isOpen ? "open" : ""} ${childElement.props.className || ""} ${className}`.trim(),
      style: { ...style, ...(childElement.props.style || {}) },
      role: "menu",
      "aria-hidden": !isOpen,
    })
  }

  return (
    <div
      ref={contentRef}
      className={`dropdown-content ${isOpen ? "open" : ""} ${className}`}
      style={style}
      role="menu"
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  )
}

// --- Items ---
const DropdownMenuItem: React.FC<{
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}> = ({ children, onClick, className = "", disabled = false }) => {
  const { setIsOpen } = useDropdown()
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
      setIsOpen(false)
    }
  }
  return (
    <button
      className={`dropdown-item ${disabled ? "disabled" : ""} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </button>
  )
}

const DropdownMenuSeparator: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`dropdown-divider ${className}`} role="separator" />
)

export {
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
}