"use client"

import type React from "react"
import LokiLogin from "@/components/OLD/form/form-loki"
import "./styles.css"

type DocumentationProps = {}

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Documentación</h1>
        <p className="documentation-description">
          Esta página documenta componentes de formularios utilizados en el proyecto.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">Formularios</h2>

        {/* LokiLogin Component */}
        <div className="component-card">
          <h3 className="component-title">LokiLogin</h3>
          <p className="component-description">Componente de formulario de inicio de sesión con estilo Loki</p>

          <div className="component-preview" style={{ margin: "0 auto" }}>
            <div className="loki-form-container" style={{ margin: "0 auto" }}>
              <LokiLogin />
            </div>
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">
                {'<div className="loki-form-container" style={{ margin: "0 auto" }}>\n  <LokiLogin />\n</div>'}
              </code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">LokiLogin</code> es un formulario de inicio de sesión con
                estilo Loki.
              </li>
              <li>
                Se recomienda colocarlo dentro de un contenedor con la clase{" "}
                <code className="inline-code">loki-form-container</code> para un correcto posicionamiento.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documentation
