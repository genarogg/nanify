import type React from "react"

// Función simple para reemplazar cn
function classNames(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(" ")
}

// Reemplazar la implementación de cva con un objeto de mapeo directo
const statusClasses = {
  variants: {
    procesando: "bg-orange-500 text-white",
    listo: "bg-purple-500 text-white",
    entregado: "bg-green-500 text-white",
    archivado: "bg-gray-500 text-white",
    devuelto: "bg-red-500 text-white",
    pendiente: "bg-yellow-500 text-white",
    cancelado: "bg-red-600 text-white",
    confirmado: "bg-blue-500 text-white",
    enviado: "bg-indigo-500 text-white",
    recibido: "bg-teal-500 text-white",
    revision: "bg-amber-500 text-white",
    aprobado: "bg-emerald-500 text-white",
    rechazado: "bg-rose-500 text-white",
    pausado: "bg-slate-500 text-white",
    activo: "bg-lime-500 text-white",
    inactivo: "bg-neutral-500 text-white",
  },
  sizes: {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  },
}

// Reemplazar la interfaz StatusBadgeProps que usa VariantProps
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: keyof typeof statusClasses.variants
  size?: keyof typeof statusClasses.sizes
}

// Actualizar la función StatusBadge para usar la nueva implementación
export function StatusBadge({ className, variant = "procesando", size = "md", children, ...props }: StatusBadgeProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors",
        statusClasses.variants[variant],
        statusClasses.sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Componente de conveniencia con estados predefinidos
export interface StatusProps {
  status:
  | "procesando"
  | "listo"
  | "entregado"
  | "archivado"
  | "devuelto"
  | "pendiente"
  | "cancelado"
  | "confirmado"
  | "enviado"
  | "recibido"
  | "revision"
  | "aprobado"
  | "rechazado"
  | "pausado"
  | "activo"
  | "inactivo"
  size?: "sm" | "md" | "lg"
  className?: string
}

const statusLabels = {
  procesando: "Procesando",
  listo: "Listo",
  entregado: "Entregado",
  archivado: "Archivado",
  devuelto: "Devuelto",
  pendiente: "Pendiente",
  cancelado: "Cancelado",
  confirmado: "Confirmado",
  enviado: "Enviado",
  recibido: "Recibido",
  revision: "En Revisión",
  aprobado: "Aprobado",
  rechazado: "Rechazado",
  pausado: "Pausado",
  activo: "Activo",
  inactivo: "Inactivo",
}

const Status = ({ status, size = "md", className }: StatusProps) => {
  return (
    <StatusBadge variant={status} size={size} className={className}>
      {statusLabels[status]}
    </StatusBadge>
  )
}

export default Status
