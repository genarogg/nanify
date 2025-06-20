"use client"

import type React from "react"
import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo
} from "react"
import { ChevronDown, Check, X } from "lucide-react"
import "./select.css" 

interface SelectContextType {
  value: string | string[]
  onValueChange: (value: string | string[]) => void
  open: boolean
  onOpenChange: (open: boolean) => void
  placeholder?: string
  multiple?: boolean
  selectedLabels: Map<string, string>
  setSelectedLabel: (value: string, label: string) => void
  registerOption: (value: string, label: string) => void
  longestOptionWidth: number
}

const SelectContext = createContext<SelectContextType | null>(null)

const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within a Select")
  }
  return context
}

interface SelectProps {
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
  multiple?: boolean
}

export const Select = memo(function Select({
  value,
  defaultValue,
  onValueChange,
  children,
  multiple = false
}: SelectProps) {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    () => defaultValue || (multiple ? [] : "")
  )
  const [selectedLabels, setSelectedLabelsState] = useState<Map<string, string>>(
    () => new Map()
  )
  const [open, setOpen] = useState(false)
  const [optionsMap, setOptionsMap] = useState<Map<string, string>>(new Map())
  const [longestOptionWidth, setLongestOptionWidth] = useState(0)
  const measureRef = useRef<HTMLSpanElement>(null)

  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = useCallback((newValue: string | string[]) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)

    // In single select mode, close the dropdown after selection
    if (!multiple) {
      setOpen(false)
    }
  }, [value, onValueChange, multiple])

  const setSelectedLabel = useCallback((value: string, label: string) => {
    setSelectedLabelsState(prev => {
      const newMap = new Map(prev)
      newMap.set(value, label)
      return newMap
    })
  }, [])

  const registerOption = useCallback((value: string, label: string) => {
    setOptionsMap(prev => {
      const newMap = new Map(prev)
      newMap.set(value, label)
      return newMap
    })
  }, [])

  // Calcular el ancho de la opción más larga
  useEffect(() => {
    if (measureRef.current && optionsMap.size > 0) {
      let maxWidth = 0
      const measurer = measureRef.current
      
      // Obtener el estilo computado del elemento de medición
      const computedStyle = window.getComputedStyle(measurer)
      
      optionsMap.forEach((label) => {
        // Establecer el texto y medir
        measurer.textContent = label
        const width = measurer.getBoundingClientRect().width
        maxWidth = Math.max(maxWidth, width)
      })
      
      // Agregar padding y margen extra para iconos y espaciado
      const extraWidth = 60 // Espacio para iconos, padding, etc.
      setLongestOptionWidth(Math.ceil(maxWidth) + extraWidth)
    }
  }, [optionsMap])

  const contextValue = useMemo(() => ({
    value: currentValue,
    onValueChange: handleValueChange,
    open,
    onOpenChange: setOpen,
    multiple,
    selectedLabels,
    setSelectedLabel,
    registerOption,
    longestOptionWidth,
  }), [currentValue, handleValueChange, open, multiple, selectedLabels, setSelectedLabel, registerOption, longestOptionWidth])

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="select-root">
        {/* Elemento invisible para medir texto */}
        <span
          ref={measureRef}
          style={{
            position: 'absolute',
            visibility: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            top: '-9999px',
            left: '-9999px'
          }}
          aria-hidden="true"
        />
        {children}
      </div>
    </SelectContext.Provider>
  )
})

interface SelectTriggerProps {
  children: React.ReactNode
}

export const SelectTrigger = memo(function SelectTrigger({ children }: SelectTriggerProps) {
  const { open, onOpenChange, longestOptionWidth } = useSelectContext()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onOpenChange(!open)
  }, [open, onOpenChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onOpenChange(!open)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      onOpenChange(true)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      onOpenChange(false)
    }
  }, [open, onOpenChange])

  const handleBlur = useCallback((e: React.FocusEvent) => {
    // Check if focus moved outside the select component
    const currentTarget = e.currentTarget
    const relatedTarget = e.relatedTarget as Node

    // If the new focus is outside the select root, close it
    setTimeout(() => {
      const selectRoot = currentTarget.closest('.select-root')
      if (selectRoot && relatedTarget && !selectRoot.contains(relatedTarget)) {
        onOpenChange(false)
      }
    }, 0)
  }, [onOpenChange])

  // Aplicar el ancho calculado automáticamente
  const triggerStyle: React.CSSProperties = longestOptionWidth > 0 ? {
    minWidth: `${longestOptionWidth}px`
  } : {}

  return (
    <button
      ref={triggerRef}
      className="select-trigger"
      style={triggerStyle}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      data-state={open ? "open" : "closed"}
      aria-expanded={open}
      aria-haspopup="listbox"
    >
      {children}
      <ChevronDown className="select-icon" />
    </button>
  )
})

interface SelectValueProps {
  placeholder?: string
}

export const SelectValue = memo(function SelectValue({ placeholder }: SelectValueProps) {
  const { value, multiple, selectedLabels } = useSelectContext()

  const displayValue = useMemo(() => {
    // For single select
    if (!multiple) {
      return value ? selectedLabels.get(value as string) || value : placeholder
    }

    // For multiple select, just show the placeholder
    return placeholder
  }, [value, multiple, selectedLabels, placeholder])

  return (
    <span className="select-value" data-placeholder={!value || multiple ? "" : undefined}>
      {displayValue}
    </span>
  )
})

interface SelectTagsProps { }

export const SelectTags = memo(function SelectTags({ }: SelectTagsProps) {
  const { value, multiple, selectedLabels, onValueChange } = useSelectContext()

  const removeTag = useCallback((valueToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (multiple && Array.isArray(value)) {
      const newValue = value.filter((v) => v !== valueToRemove)
      onValueChange(newValue)
    }
  }, [multiple, value, onValueChange])

  const tags = useMemo(() => {
    if (!multiple) return null
    const values = Array.isArray(value) ? value : []
    if (values.length === 0) return null

    return values.map((val) => (
      <SelectTag
        key={val}
        value={val}
        label={selectedLabels.get(val) || val}
        onRemove={removeTag}
      />
    ))
  }, [multiple, value, selectedLabels, removeTag])

  if (!tags) return null

  return (
    <div className="select-tags-wrapper">
      {tags}
    </div>
  )
})

interface SelectTagProps {
  value: string
  label: string
  onRemove: (value: string, e: React.MouseEvent) => void
}

const SelectTag = memo(function SelectTag({ value, label, onRemove }: SelectTagProps) {
  const handleRemove = useCallback((e: React.MouseEvent) => {
    onRemove(value, e)
  }, [value, onRemove])

  return (
    <div className="select-tag">
      <span className="select-tag-text">{label}</span>
      <button className="select-tag-remove" onClick={handleRemove} type="button">
        <X />
      </button>
    </div>
  )
})

/**
 * Encuentra el contenedor scrollable más cercano que puede afectar la posición del dropdown
 */
const findScrollableContainer = (element: HTMLElement): HTMLElement | null => {
  let current = element.parentElement
  
  while (current && current !== document.body) {
    const computedStyle = window.getComputedStyle(current)
    const hasScrollableOverflow = ['auto', 'scroll', 'overlay'].includes(computedStyle.overflowY) ||
                                  ['auto', 'scroll', 'overlay'].includes(computedStyle.overflow)
    
    // También verificar si tiene una altura fija que podría crear scroll
    const hasFixedHeight = computedStyle.height !== 'auto' && 
                           computedStyle.maxHeight !== 'none' &&
                           current.scrollHeight > current.clientHeight
    
    // Detectar contenedores comunes de modales y overlays
    const isModalContainer = current.classList.contains('modal') ||
    
                            current.classList.contains('dialog') ||
                            current.classList.contains('popover') ||
                            current.classList.contains('overlay') ||
                            current.hasAttribute('role') && ['dialog', 'alertdialog'].includes(current.getAttribute('role') || '') ||
                            computedStyle.position === 'fixed' ||
                            computedStyle.position === 'absolute'
    
    if (hasScrollableOverflow || hasFixedHeight || isModalContainer) {
      return current
    }
    
    current = current.parentElement
  }
  
  return null
}

/**
 * Calcula el espacio disponible considerando contenedores scrollables y modales
 */
const calculateAvailableSpace = (
  triggerRect: DOMRect, 
  contentHeight: number,
  scrollableContainer: HTMLElement | null
) => {
  const safetyMargin = 20
  let spaceAbove: number
  let spaceBelow: number
  
  if (scrollableContainer) {
    const containerRect = scrollableContainer.getBoundingClientRect()
    const containerStyle = window.getComputedStyle(scrollableContainer)
    
    // Considerar padding del contenedor
    const paddingTop = parseInt(containerStyle.paddingTop, 10) || 0
    const paddingBottom = parseInt(containerStyle.paddingBottom, 10) || 0
    
    // Calcular espacio dentro del contenedor
    spaceAbove = triggerRect.top - containerRect.top - paddingTop
    spaceBelow = containerRect.bottom - triggerRect.bottom - paddingBottom
    
    // Si el contenedor es scrollable, considerar el scroll actual
    if (scrollableContainer.scrollHeight > scrollableContainer.clientHeight) {
      const scrollTop = scrollableContainer.scrollTop
      const scrollBottom = scrollableContainer.scrollHeight - scrollableContainer.clientHeight - scrollTop
      
      // Ajustar espacios considerando el scroll disponible
      spaceAbove += scrollTop
      spaceBelow += scrollBottom
    }
  } else {
    // Usar viewport como referencia (comportamiento original mejorado)
    const viewportHeight = window.innerHeight
    spaceAbove = triggerRect.top
    spaceBelow = viewportHeight - triggerRect.bottom
  }
  
  return {
    spaceAbove: Math.max(0, spaceAbove),
    spaceBelow: Math.max(0, spaceBelow),
    safetyMargin
  }
}

interface SelectContentProps {
  children: React.ReactNode
}

export const SelectContent = memo(function SelectContent({ children }: SelectContentProps) {
  const { open, onOpenChange } = useSelectContext()
  const contentRef = useRef<HTMLDivElement>(null)
  const [calculatedOpenUpward, setCalculatedOpenUpward] = useState(false)

  // Lógica mejorada de cálculo de posición
  useEffect(() => {
    if (open && contentRef.current) {
      const content = contentRef.current
      const selectRoot = content.closest('.select-root') as HTMLElement
      const trigger = selectRoot?.querySelector('.select-trigger') as HTMLElement
      
      if (trigger) {
        const triggerRect = trigger.getBoundingClientRect()
        
        // Buscar contenedor scrollable que pueda afectar la posición
        const scrollableContainer = findScrollableContainer(trigger)
        
        // Obtener altura estimada del contenido
        const contentHeight = Math.min(240, content.scrollHeight || 240)
        
        // Calcular espacios disponibles
        const { spaceAbove, spaceBelow, safetyMargin } = calculateAvailableSpace(
          triggerRect, 
          contentHeight, 
          scrollableContainer
        )
        
        let shouldOpenUpward = false
        
        // Lógica de decisión mejorada
        if (spaceBelow < contentHeight + safetyMargin) {
          if (spaceAbove >= contentHeight + safetyMargin) {
            // Hay suficiente espacio arriba
            shouldOpenUpward = true
          } else if (spaceAbove > spaceBelow) {
            // Poco espacio en ambos lados, pero más arriba
            shouldOpenUpward = true
          }
          // Si hay más espacio abajo, mantener hacia abajo (shouldOpenUpward = false)
        }
        
        setCalculatedOpenUpward(shouldOpenUpward)
        
        // Debug log (opcional, remover en producción)
        if (process.env.NODE_ENV === 'development') {
          console.log('Select position calculation:', {
            spaceAbove: Math.round(spaceAbove),
            spaceBelow: Math.round(spaceBelow),
            contentHeight,
            shouldOpenUpward,
            hasScrollableContainer: !!scrollableContainer,
            containerType: scrollableContainer?.tagName || 'none'
          })
        }
      }
    }
  }, [open])

  useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as Node
          const selectRoot = contentRef.current?.closest('.select-root')

          if (selectRoot && !selectRoot.contains(target)) {
            onOpenChange(false)
          }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
          document.removeEventListener('click', handleClickOutside, true)
        }
      }, 0)

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onOpenChange(false)
        }
      }

      // Manejar scroll en contenedores padre para reposicionar
      const handleScroll = () => {
        // Recalcular posición cuando hay scroll
        if (contentRef.current) {
          const content = contentRef.current
          const selectRoot = content.closest('.select-root') as HTMLElement
          const trigger = selectRoot?.querySelector('.select-trigger') as HTMLElement
          
          if (trigger) {
            const triggerRect = trigger.getBoundingClientRect()
            const scrollableContainer = findScrollableContainer(trigger)
            const contentHeight = Math.min(240, content.scrollHeight || 240)
            
            const { spaceAbove, spaceBelow, safetyMargin } = calculateAvailableSpace(
              triggerRect, 
              contentHeight, 
              scrollableContainer
            )
            
            const shouldOpenUpward = spaceBelow < contentHeight + safetyMargin && spaceAbove >= contentHeight + safetyMargin
            setCalculatedOpenUpward(shouldOpenUpward)
          }
        }
      }

      // Agregar listeners de scroll a contenedores relevantes
      const trigger = contentRef.current?.closest('.select-root')?.querySelector('.select-trigger') as HTMLElement
      if (trigger) {
        const scrollableContainer = findScrollableContainer(trigger)
        if (scrollableContainer) {
          scrollableContainer.addEventListener('scroll', handleScroll, { passive: true })
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })
      }

      document.addEventListener('keydown', handleEscape)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('keydown', handleEscape)
        
        // Cleanup scroll listeners
        if (trigger) {
          const scrollableContainer = findScrollableContainer(trigger)
          if (scrollableContainer) {
            scrollableContainer.removeEventListener('scroll', handleScroll)
          }
          window.removeEventListener('scroll', handleScroll)
          window.removeEventListener('resize', handleScroll)
        }
      }
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div
      ref={contentRef}
      className="select-content"
      data-open-upward={calculatedOpenUpward}
      role="listbox"
    >
      {children}
    </div>
  )
})

interface SelectItemProps {
  value: string
  children: React.ReactNode
  disabled?: boolean
}

export const SelectItem = memo(function SelectItem({ value, children, disabled }: SelectItemProps) {
  const { value: selectedValue, onValueChange, multiple, setSelectedLabel, registerOption } = useSelectContext()

  const isSelected = useMemo(() => {
    return multiple
      ? Array.isArray(selectedValue) && selectedValue.includes(value)
      : selectedValue === value
  }, [multiple, selectedValue, value])

  useEffect(() => {
    // Store the label for this value and register for width calculation
    if (typeof children === "string") {
      setSelectedLabel(value, children)
      registerOption(value, children)
    } else if (React.isValidElement(children) && typeof children.props.children === "string") {
      // Handle case where children is a React element with string content
      const label = children.props.children
      setSelectedLabel(value, label)
      registerOption(value, label)
    } else {
      // Fallback: use value as label
      setSelectedLabel(value, value)
      registerOption(value, value)
    }
  }, [value, children, setSelectedLabel, registerOption])

  const handleClick = useCallback(() => {
    if (disabled) return

    if (multiple) {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : []
      const newValues = isSelected
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value]
      onValueChange(newValues)
    } else {
      onValueChange(value)
    }
  }, [disabled, multiple, selectedValue, isSelected, value, onValueChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      if (!disabled) {
        handleClick()
      }
    }
  }, [disabled, handleClick])

  return (
    <div
      className={`select-item ${multiple ? "select-item-multiple" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-selected={isSelected ? "" : undefined}
      data-disabled={disabled ? "" : undefined}
      role="option"
      aria-selected={isSelected}
      tabIndex={disabled ? -1 : 0}
    >
      {multiple && (
        <div className="select-item-checkbox">
          <Check />
        </div>
      )}
      {children}
      {!multiple && isSelected && <Check className="select-item-indicator" />}
    </div>
  )
})

export const SelectSeparator = memo(function SelectSeparator() {
  return <div className="select-separator" />
})

interface SelectLabelProps {
  children: React.ReactNode
}

export const SelectLabel = memo(function SelectLabel({ children }: SelectLabelProps) {
  return <div className="select-label">{children}</div>
})