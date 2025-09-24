"use client"

import type React from "react"
import { A } from "@/components/nano"
import { Icon } from "@/components/ux"
import { ArrowRight, UserCircle, Layout, FileText, Palette } from "lucide-react"
import "./styles.css"

type RouteProps = {}

const Routes: React.FC<RouteProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Navegación de la Aplicación</h1>
        <p className="documentation-description">
          Explora todos los componentes y páginas disponibles en la aplicación.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">Componentes</h2>

        <div className="routes-grid">


          {/* Nano Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Layout size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Nano</h3>
              <p className="route-description">Componentes utilitarios y herramientas para el desarrollo rápido.</p>
              <A href="/nano" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>



          {/* UX Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Palette size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">UX</h3>
              <p className="route-description">
                Componentes de experiencia de usuario para interfaces intuitivas y atractivas.
              </p>
              <A href="/ux" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>

          {/* Gravatar Component */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<UserCircle size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Gravatar</h3>
              <p className="route-description">
                Componente para mostrar imágenes de perfil utilizando el servicio Gravatar.
              </p>
              <A href="/gravatar" className="route-link">
                Ver componente <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>
        </div>
      </section>



      <section className="documentation-section">
        <h2 className="section-title">Formularios</h2>

        <div className="routes-grid">
          {/* Loki Form */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<FileText size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Formulario Loki</h3>
              <p className="route-description">Formulario de inicio de sesión con estilo Loki, elegante y funcional.</p>
              <A href="/form/form-loki" className="route-link">
                Ver formulario <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Routes