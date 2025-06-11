"use client"

import { useState, useCallback, memo } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectLabel,
  SelectTags,
} from "@components/ux/select"

const frameworkOptions = [
  {
    category: "Frontend", items: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue.js" },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte" }
    ]
  },
  {
    category: "Backend", items: [
      { value: "nextjs", label: "Next.js" },
      { value: "nuxt", label: "Nuxt.js" },
      { value: "express", label: "Express" }
    ]
  }
]

const procedureOptions = [
  { value: "carta-culminacion", label: "CARTA DE CULMINACION" },
  { value: "certificacion-acta-grado", label: "CERTIFICACION ACTA DE GRADO" },
  { value: "certificacion-correo-institucional", label: "CERTIFICACION DE CORREO INSTITUCIONAL" },
  { value: "certificacion-fondo-negro", label: "CERTIFICACION DE FONDO NEGRO" },
  { value: "certificacion-programa", label: "CERTIFICACION DE PROGRAMA" },
  { value: "constancia-cine-unesco", label: "CONSTANCIA CINE-UNESCO" },
  { value: "constancia-buena-conducta", label: "CONSTANCIA DE BUENA CONDUCTA" },
  { value: "constancia-conversion-notas", label: "CONSTANCIA DE CONVERSION DE NOTAS" },
  { value: "constancia-egreso", label: "CONSTANCIA DE EGRESO" },
  { value: "modalidad-estudios", label: "MODALIDAD DE ESTUDIOS" },
  { value: "notas-certificadas", label: "NOTAS CERTIFICADAS" },
  { value: "pensum-estudios", label: "PENSUM DE ESTUDIOS" },
  { value: "certificacion-datos-autoridades", label: "CERTIFICACION DE DATOS DE AUTORIDADES" }
]

const statusOptions = [
  { value: "validado", label: "Validado" },
  { value: "listo", label: "Listo" },
  { value: "entregado", label: "Entregado" },
  { value: "procesando", label: "Procesando" },
  { value: "pendiente", label: "Pendiente" },
  { value: "rechazado", label: "Rechazado" }
]

const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" }
]

const SelectSection = memo(function SelectSection({
  label,
  icon,
  children
}: {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginBottom: "0.5rem",
          fontWeight: "500",
        }}
      >
        {icon}
        {label}
      </label>
      {children}
    </div>
  )
})

const ProcedureIcon = memo(() => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#8b5cf6" />
    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
))

const StatusIcon = memo(() => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#10b981" />
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
))

export default function SelectDemo() {
  const [framework, setFramework] = useState("")
  const [theme, setTheme] = useState("light")
  const [procedures, setProcedures] = useState<string[]>([])
  const [status, setStatus] = useState<string[]>([])

  const handleFrameworkChange = useCallback((value: string | string[]) => {
    setFramework(value as string)
  }, [])

  const handleThemeChange = useCallback((value: string | string[]) => {
    setTheme(value as string)
  }, [])

  const handleProceduresChange = useCallback((value: string | string[]) => {
    setProcedures(value as string[])
  }, [])

  const handleStatusChange = useCallback((value: string | string[]) => {
    setStatus(value as string[])
  }, [])

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Custom Select Component
      </h1>

      {/* Single Select - Framework */}
      <SelectSection label="Choose a framework (Single):">
        <Select value={framework} onValueChange={handleFrameworkChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a framework..." />
          </SelectTrigger>
          <SelectContent>
            {frameworkOptions.map((category) => (
              <div key={category.category}>
                <SelectLabel>{category.category}</SelectLabel>
                {category.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
                <SelectSeparator />
              </div>
            ))}
          </SelectContent>
        </Select>
      </SelectSection>

      {/* Multi Select - Procedures */}
      <SelectSection
        label="Tipo de trámite:"
        icon={<ProcedureIcon />}
      >
        <Select multiple value={procedures} onValueChange={handleProceduresChange} openUpward={true}>
          <SelectTrigger>
            <SelectValue placeholder="CARTA DE CULMINACION" />
          </SelectTrigger>
          <SelectContent>
            {procedureOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
          <SelectTags />
        </Select>
      </SelectSection>

      {/* Multi Select - Status */}
      <SelectSection
        label="Estatus:"
        icon={<StatusIcon />}
      >
        <Select multiple value={status} onValueChange={handleStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder="Validado, Listo, Entregado, Procesando" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
          <SelectTags />
        </Select>
      </SelectSection>

      {/* Single Select - Theme */}
      <SelectSection label="Theme (Single):">
        <Select value={theme} onValueChange={handleThemeChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {themeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SelectSection>

      {/* Results */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f3f4f6",
          borderRadius: "6px",
          fontSize: "0.875rem",
        }}
      >
        <strong>Current Selection:</strong>
        <br />
        Framework: {framework || "None"}
        <br />
        Procedures: {procedures.length > 0 ? procedures.join(", ") : "None"}
        <br />
        Status: {status.length > 0 ? status.join(", ") : "None"}
        <br />
        Theme: {theme}
      </div>
    </div>
  )
}