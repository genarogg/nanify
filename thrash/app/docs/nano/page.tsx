"use client"

import type React from "react"
import { A } from "@/components/nano"
import { Icon } from "@/components/ux"
import { ArrowRight, Link, Bell, ImageIcon, Layers } from "lucide-react"
import "./styles.css"

type RouteProps = {}

const Routes: React.FC<RouteProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Biblioteca Nano</h1>
        <p className="documentation-description">
          Componentes utilitarios y herramientas para el desarrollo rápido de aplicaciones React.
        </p>
      </header>

      <section className="documentation-section">
        <div className="routes-grid">
          {/* A Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Link size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">A (Link)</h3>
              <p className="route-description">
                Componente de enlace versátil que maneja navegación interna, externa y acciones de botón.
              </p>
              <A href="/nano/a" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>

          {/* Notify Function */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Bell size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Natify</h3>
              <p className="route-description">
                Función para mostrar notificaciones toast con diferentes tipos y configuraciones.
              </p>
              <A href="/nano/nanify" className="route-link">
                Ver función <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>

          {/* Img Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<ImageIcon size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Img</h3>
              <p className="route-description">
                Componente de imagen inteligente con lazy loading, blur placeholder y soporte para contenido
                superpuesto.
              </p>
              <A href="/nano/img" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>

          {/* Squeleto Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Layers size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Squeleto</h3>
              <p className="route-description">
                Componente de skeleton loading para mostrar placeholders mientras se cargan los datos.
              </p>
              <A href="/nano/squeleto" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Routes