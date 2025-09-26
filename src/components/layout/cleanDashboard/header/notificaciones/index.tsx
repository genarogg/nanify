"use client"
import type React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ux"
import { Bell, BellOff, CheckCircle, MessageCircle, AlertCircle, ChevronRight } from "lucide-react"
import "./notificaciones.css"

interface Notificacion {
  id: number
  titulo: string
  descripcion: string
  icono?: React.ReactNode
  leida?: boolean
}

interface NotificacionesProps {
  notificaciones?: Notificacion[]
}

const Notificaciones: React.FC<NotificacionesProps> = ({ 
  notificaciones = [
    { id: 1, titulo: "Nuevo mensaje", descripcion: "Tienes un mensaje de soporte", icono: <MessageCircle className="notif-icon" /> },
    { id: 2, titulo: "Alerta de seguridad", descripcion: "Inició sesión desde un nuevo dispositivo", icono: <AlertCircle className="notif-icon" /> },
    { id: 3, titulo: "Actualización completada", descripcion: "Se actualizó tu perfil con éxito", icono: <CheckCircle className="notif-icon" />, leida: true },
  ] 
}) => {
  const noLeidas = notificaciones.filter(n => !n.leida).length

  const handleMarkAllRead = () => console.log("Marcar todas como leídas")
  const handleViewAll = () => console.log("Ver todas las notificaciones")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="notif-btn hidden-xs">
          {noLeidas > 0 ? <Bell className="notif-bell" /> : <BellOff className="notif-bell" />}
          {noLeidas > 0 && <span className="notif-badge">{noLeidas}</span>}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="notif-dropdown-content" align="end" maxHeight={350}>
        {/* Encabezado */}
        <div className="notif-header">
          <span className="notif-title">Notificaciones</span>
          <button className="notif-mark-all" onClick={handleMarkAllRead}>
            Marcar todas como leídas
          </button>
        </div>

        <DropdownMenuSeparator />

        {/* Lista */}
        <div className="notif-list">
          {notificaciones.length === 0 ? (
            <div className="notif-empty">No tienes notificaciones</div>
          ) : (
            notificaciones.map((n) => (
              <DropdownMenuItem key={n.id} className={`notif-item ${n.leida ? "leida" : ""}`}>
                {n.icono}
                <div className="notif-info">
                  <div className="notif-titulo">{n.titulo}</div>
                  <div className="notif-desc">{n.descripcion}</div>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>

        <DropdownMenuSeparator />

        {/* Footer */}
        <DropdownMenuItem className="notif-footer" onClick={handleViewAll}>
          Ver todas
          <ChevronRight className="notif-footer-icon" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Notificaciones
