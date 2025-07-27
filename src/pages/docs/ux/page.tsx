"use client"

import type React from "react"
import { A } from "@/components/nano"
import { Icon } from "@/components/ux"
import {
  ArrowRight,
  Palette,
  MousePointer,

  FileText,

  List,
  Layers,

} from "lucide-react"
import "./styles.css"

type RouteProps = {}

const Routes: React.FC<RouteProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Componentes UX de la Aplicación</h1>
        <p className="documentation-description">
          Explora todos los componentes de experiencia de usuario disponibles en la biblioteca UX.
        </p>
      </header>



      <section className="documentation-section">
        <h2 className="section-title">Componentes de Formulario</h2>

        <div className="routes-grid">
          {/* Input Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<FileText size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Input</h3>
              <p className="route-description">
                Campos de entrada con validación, iconos y diferentes estados visuales.
              </p>
              <A href="/ux/input" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>

          {/* Select Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<List size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Select</h3>
              <p className="route-description">Componente de selección múltiple y simple con etiquetas y búsqueda.</p>
              <A href="/ux/select" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>


        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Componentes de Navegación</h2>

        <div className="routes-grid">
          {/* Tabs Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Layers size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Tabs</h3>
              <p className="route-description">Sistema de pestañas con animaciones fluidas y contenido dinámico.</p>
              <A href="/ux/tabs" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>


        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Componentes de Interfaz</h2>

        <div className="routes-grid">
          {/* Modal Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<MousePointer size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Modal</h3>
              <p className="route-description">Ventanas modales personalizables con diferentes tamaños y estilos.</p>
              <A href="/ux/modal" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>


        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Componentes de Visualización</h2>

        <div className="routes-grid">
          {/* Badge Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Palette size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Badge</h3>
              <p className="route-description">Etiquetas para mostrar estados, categorías y información destacada.</p>
              <A href="/ux/badge" className="route-link">
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
