"use client"

import type React from "react"
import { A, Icon } from "@nano"
import { ArrowRight, BoxIcon, UserCircle, Layout, FileText, Sliders } from 'lucide-react'
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
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Botones</h2>

        <div className="routes-grid">
          {/* Hamburger Buttons */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<BoxIcon size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Botones Hamburguesa</h3>
              <p className="route-description">Colección de botones hamburguesa animados para menús de navegación.</p>
              <A href="/btns/hamburguesa" className="route-link">
                Ver botones <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>

          {/* Basic Buttons */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<BoxIcon size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Botones Básicos</h3>
              <p className="route-description">
                Componentes de botones básicos para diferentes acciones en la interfaz.
              </p>
              <A href="/btns/basico" className="route-link">
                Ver botones <Icon icon={<ArrowRight size={16} />} />
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

      <section className="documentation-section">
        <h2 className="section-title">Sliders</h2>

        <div className="routes-grid">
          {/* Background Slider */}
          <div className="route-card">
            <div className="route-icon">
              <Icon icon={<Sliders size={32} />} />
            </div>
            <div className="route-content">
              <h3 className="route-title">Slider de Fondo</h3>
              <p className="route-description">
                Componente de slider para cambiar el fondo de la página con transiciones suaves.
              </p>
              <A href="/slider/background" className="route-link">
                Ver slider <Icon icon={<ArrowRight size={16} />} />
              </A>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Routes

