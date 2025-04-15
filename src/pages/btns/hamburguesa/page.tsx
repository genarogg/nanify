"use client"

import React from "react"
import BtnLoki from "@components/btns/hamburguesa/btn-loki"
import BtnFreya from "@components/btns/hamburguesa/btn-freya"
import BtnThor from "@components/btns/hamburguesa/btn-thor"

import "./styles.css"

type DocumentationProps = {}

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Documentación</h1>
        <p className="documentation-description">
          Esta página documenta varios componentes de botones hamburguesa utilizados en el proyecto.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">Botones Hamburguesa</h2>

        {/* BtnLoki Component */}
        <div className="component-card">
          <h3 className="component-title">BtnLoki</h3>
          <p className="component-description">Componente BtnLoki</p>

          <div className="component-preview">
            <BtnLoki />
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">{"<BtnLoki isActive={isActive1} setIsActive={setIsActive1} />"}</code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnLoki</code> se utiliza para mostrar un botón de tipo
                Loki.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">isActive</span>: Estado del botón.
                </li>
                <li>
                  <span className="props-name">setIsActive</span>: Función para cambiar el estado del botón.
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* BtnFreya Component */}
        <div className="component-card">
          <h3 className="component-title">BtnFreya</h3>
          <p className="component-description">Componente BtnFreya</p>

          <div className="component-preview">
            <BtnFreya />
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">{"<BtnFreya isActive={isActive3} setIsActive={setIsActive3} />"}</code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnFreya</code> se utiliza para mostrar un botón de tipo
                Freya.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">isActive</span>: Estado del botón.
                </li>
                <li>
                  <span className="props-name">setIsActive</span>: Función para cambiar el estado del botón.
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* BtnThor Component */}
        <div className="component-card">
          <h3 className="component-title">BtnThor</h3>
          <p className="component-description">Componente BtnThor</p>

          <div className="component-preview">
            <BtnThor />
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">{"<BtnThor isActive={isActive2} setIsActive={setIsActive2} />"}</code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnThor</code> se utiliza para mostrar un botón de tipo
                Thor.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">isActive</span>: Estado del botón.
                </li>
                <li>
                  <span className="props-name">setIsActive</span>: Función para cambiar el estado del botón.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documentation
