"use client"

import type React from "react"
// import DashboardLayout from "../../../../../../frida-frontend/src/components/dashboard/dashboard-layout"
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
        {/* <DashboardLayout /> */}
      </section>
    </div>
  )
}

export default Documentation
