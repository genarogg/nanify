"use client"

import type React from "react"

import { BtnNormalBasic, BtnText, BtnRowCircle, BtnExpansion } from "@components/ux"

import "./styles.css"


type DocumentationProps = {}

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Documentación</h1>
        <p className="documentation-description">
          Esta página documenta varios componentes y funciones utilizados en el proyecto.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">Components</h2>

        {/* BtnText Component */}
        <div className="component-card">
          <h3 className="component-title">BtnText</h3>
          <p className="component-description">Componente BtnText</p>

          <div className="component-preview">
            <BtnText
              onClick={() => {
                console.log("Hola")
              }}
            >
              <label htmlFor="">sadsad</label>
            </BtnText>
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">{'<BtnText text="Hola" onClick={() => { console.log("Hola") }} />'}</code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnText</code> se utiliza para mostrar un botón con texto.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">text</span>: El texto que se mostrará en el botón.
                </li>
                <li>
                  <span className="props-name">onClick</span>: Función que se ejecutará al hacer clic en el botón.
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* BtnNormalBasic Component */}
        <div className="component-card">
          <h3 className="component-title">BtnNormalBasic</h3>
          <p className="component-description">Componente BtnNormalBasic</p>

          <div className="component-preview">
            <BtnNormalBasic
              onClick={() => {
                console.log("Normal")
              }}
            >
              hola
            </BtnNormalBasic>
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">
                {'<BtnNormalBasic onClick={() => { console.log("Normal") }} >hola</BtnNormalBasic>'}
              </code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnNormalBasic</code> se utiliza para mostrar un botón
                normal.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">onClick</span>: Función que se ejecutará al hacer clic en el botón.
                </li>
                <li>
                  <span className="props-name">children</span>: Contenido del botón.
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* BtnRowCircle Component */}
        <div className="component-card">
          <h3 className="component-title">BtnRowCircle</h3>
          <p className="component-description">Componente BtnRowCircle</p>

          <div className="component-preview">
            <BtnRowCircle
              className="active"
              onClick={() => {
                console.log("Row Circle")
              }}
            />


          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">
                {'<BtnRowCircle onClick={() => { console.log("Row Circle") }} >Botón Circular</BtnRowCircle>'}
              </code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnRowCircle</code> se utiliza para mostrar un botón con
                estilo circular.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">onClick</span>: Función que se ejecutará al hacer clic en el botón.
                </li>
                <li>
                  <span className="props-name">children</span>: Contenido del botón.
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* BtnExpansion Component */}
        <div className="component-card">
          <h3 className="component-title">BtnExpansion</h3>
          <p className="component-description">Componente BtnExpansion</p>

          <div className="component-preview">
            <BtnExpansion
              onClick={() => {
                console.log("Expansion")
              }}
            >
              Botón Expansión
            </BtnExpansion>
          </div>

          <div className="usage-section">
            <p className="usage-title">Uso del componente:</p>
            <div className="code-block">
              <code className="code-text">
                {'<BtnExpansion onClick={() => { console.log("Expansion") }} >Botón Expansión</BtnExpansion>'}
              </code>
            </div>
          </div>

          <div className="description-section">
            <ul className="props-list">
              <li>
                El componente <code className="inline-code">BtnExpansion</code> se utiliza para mostrar un botón con
                efecto de expansión.
              </li>
              <li>Props:</li>
              <ul className="props-list nested-list">
                <li>
                  <span className="props-name">onClick</span>: Función que se ejecutará al hacer clic en el botón.
                </li>
                <li>
                  <span className="props-name">children</span>: Contenido del botón.
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
