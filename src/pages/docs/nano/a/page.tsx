"use client"

import type React from "react"
import { A } from "@nano"
import { Icon } from "@components/ux"
import { ArrowLeft, ExternalLink, Mail, MousePointer } from "lucide-react"
import "./styles.css"

type ADocProps = {}

const ADoc: React.FC<ADocProps> = () => {
  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <A href="/nano" className="back-link">
          <Icon icon={<ArrowLeft size={20} />} />
          Volver a Nano
        </A>
        <h1 className="documentation-title">Componente A</h1>
        <p className="documentation-description">
          Componente de enlace versátil que maneja navegación interna, externa y acciones de botón.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<MousePointer size={24} />} />
          Vista Previa
        </h2>

        <div className="preview-container">
          <div className="preview-item">
            <h3>Navegación Interna (por defecto)</h3>
            <A href="/gravatar" className="demo-link">
              Ir a Gravatar
            </A>
          </div>

          <div className="preview-item">
            <h3>Enlace Externo</h3>
            <A href="https://github.com" type="a" className="demo-link">
              <Icon icon={<ExternalLink size={16} />} />
              GitHub
            </A>
          </div>

          <div className="preview-item">
            <h3>Enlace de Email</h3>
            <A href="correo@ejemplo.com" type="mailto" className="demo-link">
              <Icon icon={<Mail size={16} />} />
              Enviar Email
            </A>
          </div>

          <div className="preview-item">
            <h3>Botón con Acción</h3>
            <A href="/nano" type="btn" className="demo-button" onClick={() => alert("¡Botón clickeado!")}>
              Botón de Acción
            </A>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Ejemplos de Uso</h2>

        <div className="code-examples">
          <div className="code-example">
            <h3>Navegación Interna</h3>
            <pre className="code-block">
              <code>{`import { A } from "@nano"

// Navegación interna (por defecto)
<A href="/ruta">Ir a página</A>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Enlace Externo</h3>
            <pre className="code-block">
              <code>{`// Enlace externo (abre en nueva pestaña)
<A href="https://ejemplo.com" type="a">
  Sitio Externo
</A>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Enlace de Email</h3>
            <pre className="code-block">
              <code>{`// Enlace de email
<A href="correo@ejemplo.com" type="mailto">
  Enviar Email
</A>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Botón con Acción</h3>
            <pre className="code-block">
              <code>{`// Botón que ejecuta una función
<A 
  href="/ruta" 
  type="btn" 
  onClick={() => console.log('Clicked!')}
>
  Botón
</A>`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Propiedades</h2>

        <div className="properties-table">
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo</th>
                <th>Requerida</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>href</code>
                </td>
                <td>string</td>
                <td>✅</td>
                <td>URL o ruta de destino</td>
              </tr>
              <tr>
                <td>
                  <code>type</code>
                </td>
                <td>"btn" | "mailto" | "a" | "push"</td>
                <td>❌</td>
                <td>Tipo de enlace (por defecto: navegación interna)</td>
              </tr>
              <tr>
                <td>
                  <code>children</code>
                </td>
                <td>ReactNode</td>
                <td>❌</td>
                <td>Contenido del enlace</td>
              </tr>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>string</td>
                <td>❌</td>
                <td>Clases CSS adicionales</td>
              </tr>
              <tr>
                <td>
                  <code>style</code>
                </td>
                <td>CSSProperties</td>
                <td>❌</td>
                <td>Estilos inline</td>
              </tr>
              <tr>
                <td>
                  <code>onClick</code>
                </td>
                <td>function</td>
                <td>❌</td>
                <td>Función ejecutada al hacer click (solo para type="btn")</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Tipos de Enlace</h2>

        <div className="types-grid">
          <div className="type-card">
            <h3>Por Defecto (undefined)</h3>
            <p>Navegación interna usando React Router Link</p>
            <div className="code-block">
              <code>{`<A href="/ruta">Enlace interno</A>`}</code>
            </div>
          </div>

          <div className="type-card">
            <h3>type="btn"</h3>
            <p>Botón que navega y ejecuta una función onClick</p>
            <div className="code-block">
              <code>{`<A href="/ruta" type="btn" onClick={handleClick}>
  Botón
</A>`}</code>
            </div>
          </div>

          <div className="type-card">
            <h3>type="a"</h3>
            <p>Enlace externo que abre en nueva pestaña</p>
            <div className="code-block">
              <code>{`<A href="https://ejemplo.com" type="a">
  Enlace externo
</A>`}</code>
            </div>
          </div>

          <div className="type-card">
            <h3>type="mailto"</h3>
            <p>Enlace de email que abre el cliente de correo</p>
            <div className="code-block">
              <code>{`<A href="correo@ejemplo.com" type="mailto">
  Enviar email
</A>`}</code>
            </div>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Notas de Implementación</h2>

        <div className="implementation-notes">
          <div className="note-item">
            <h4>React Router</h4>
            <p>
              El componente utiliza React Router's Link para la navegación interna, proporcionando navegación SPA sin
              recargar la página.
            </p>
          </div>

          <div className="note-item">
            <h4>Seguridad</h4>
            <p>
              Los enlaces externos incluyen automáticamente <code>rel="noreferrer"</code>
              para prevenir vulnerabilidades de seguridad.
            </p>
          </div>

          <div className="note-item">
            <h4>Accesibilidad</h4>
            <p>
              Los botones incluyen <code>role="button"</code> para mejorar la accesibilidad cuando se usa type="btn".
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ADoc
