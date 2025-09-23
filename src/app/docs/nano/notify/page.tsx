"use client"

import type React from "react"
import { useState } from "react"
import { notify } from "@/components/nano"
import { Icon } from "@/components/ux"
import { Bell, CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import "./styles.css"
import { Toaster } from 'sonner'
import 'sonner/dist/styles.css';


type NotifyDocProps = {}

const NatifyDoc: React.FC<NotifyDocProps> = () => {
  const [message, setMessage] = useState("¡Esta es una notificación de ejemplo!")

  const handleSuccessNotify = () => {
    notify({
      type: "success",
      message: message || "¡Operación exitosa!",
    })
  }

  const handleErrorNotify = () => {
    notify({
      type: "error",
      message: message || "¡Ha ocurrido un error!",
    })
  }

  const handleWarningNotify = () => {
    notify({
      type: "warning",
      message: message || "¡Advertencia importante!",
    })
  }

  const handleCustomNotify = () => {
    notify({
      type: "success",
      message: "Notificación personalizada",

    })
  }

  return (
    <div className="documentation-container">
      <header className="documentation-header">

        <h1 className="documentation-title">Función Notify</h1>
        <p className="documentation-description">
          Función para mostrar notificaciones toast con diferentes tipos y configuraciones personalizables.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<Bell size={24} />} />
          Demo Interactivo
        </h2>

        <div className="demo-container">
          <div className="demo-controls">
            <div className="input-group">
              <label htmlFor="message-input">Mensaje de la notificación:</label>
              <input
                id="message-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                className="message-input"
              />
            </div>

            <div className="buttons-grid">
              <button onClick={handleSuccessNotify} className="demo-button success">
                <Icon icon={<CheckCircle size={16} />} />
                Success
              </button>

              <button onClick={handleErrorNotify} className="demo-button error">
                <Icon icon={<XCircle size={16} />} />
                Error
              </button>

              <button onClick={handleWarningNotify} className="demo-button warning">
                <Icon icon={<AlertTriangle size={16} />} />
                Warning
              </button>

              <button onClick={handleCustomNotify} className="demo-button custom">
                <Icon icon={<Bell size={16} />} />
                Personalizada
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Ejemplos de Uso</h2>

        <div className="code-examples">
          <div className="code-example">
            <h3>Importación</h3>
            <pre className="code-block">
              <code>{`import { notify } from "@nano"`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Notificación de Éxito</h3>
            <pre className="code-block">
              <code>{`notify({
  type: "success",
  message: "¡Operación completada exitosamente!"
})`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Notificación de Error</h3>
            <pre className="code-block">
              <code>{`notify({
  type: "error",
  message: "Ha ocurrido un error inesperado"
})`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Notificación de Advertencia</h3>
            <pre className="code-block">
              <code>{`notify({
  type: "warning",
  message: "Por favor, revisa los datos ingresados"
})`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Configuración Personalizada</h3>
            <pre className="code-block">
              <code>{`notify({
  type: "success",
  message: "Configuración guardada",
  config: {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false
  }
})`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Parámetros</h2>

        <div className="properties-table">
          <table>
            <thead>
              <tr>
                <th>Parámetro</th>
                <th>Tipo</th>
                <th>Requerido</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>type</code>
                </td>
                <td>"success" | "error" | "warning"</td>
                <td>✅</td>
                <td>Tipo de notificación</td>
              </tr>
              <tr>
                <td>
                  <code>message</code>
                </td>
                <td>string</td>
                <td>✅</td>
                <td>Mensaje a mostrar</td>
              </tr>
              <tr>
                <td>
                  <code>config</code>
                </td>
                <td>ToastOptions</td>
                <td>❌</td>
                <td>Configuración personalizada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Opciones de Configuración</h2>

        <div className="config-table">
          <table>
            <thead>
              <tr>
                <th>Opción</th>
                <th>Tipo</th>
                <th>Por Defecto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>position</code>
                </td>
                <td>ToastPosition</td>
                <td>"bottom-center"</td>
                <td>Posición del toast en pantalla</td>
              </tr>
              <tr>
                <td>
                  <code>autoClose</code>
                </td>
                <td>number | false</td>
                <td>5000</td>
                <td>Tiempo en ms antes de cerrar automáticamente</td>
              </tr>
              <tr>
                <td>
                  <code>hideProgressBar</code>
                </td>
                <td>boolean</td>
                <td>false</td>
                <td>Ocultar la barra de progreso</td>
              </tr>
              <tr>
                <td>
                  <code>closeOnClick</code>
                </td>
                <td>boolean</td>
                <td>true</td>
                <td>Cerrar al hacer click</td>
              </tr>
              <tr>
                <td>
                  <code>pauseOnHover</code>
                </td>
                <td>boolean</td>
                <td>true</td>
                <td>Pausar el timer al pasar el mouse</td>
              </tr>
              <tr>
                <td>
                  <code>draggable</code>
                </td>
                <td>boolean</td>
                <td>true</td>
                <td>Permitir arrastrar para cerrar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Posiciones Disponibles</h2>

        <div className="positions-grid">
          <div className="position-card">
            <h4>top-left</h4>
            <p>Esquina superior izquierda</p>
          </div>
          <div className="position-card">
            <h4>top-center</h4>
            <p>Centro superior</p>
          </div>
          <div className="position-card">
            <h4>top-right</h4>
            <p>Esquina superior derecha</p>
          </div>
          <div className="position-card">
            <h4>bottom-left</h4>
            <p>Esquina inferior izquierda</p>
          </div>
          <div className="position-card">
            <h4>bottom-center</h4>
            <p>Centro inferior (por defecto)</p>
          </div>
          <div className="position-card">
            <h4>bottom-right</h4>
            <p>Esquina inferior derecha</p>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Configuración Requerida</h2>

        <div className="setup-note">
          <div className="warning-box">
            <Icon icon={<AlertTriangle size={24} />} />
            <div>
              <h4>⚠️ Importante</h4>
              <p>
                Para que las notificaciones funcionen correctamente, debes incluir el
                <code>ToastContainer</code> en tu layout principal:
              </p>
            </div>
          </div>

          <div className="code-example">
            <h3>Layout Configuration</h3>
            <pre className="code-block">
              <code>{`import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </section>
      <Toaster
        position="bottom-center"
        richColors={true}
        theme="light"
        expand={false}
        visibleToasts={4}
      />
    </div>
  )
}

export default NatifyDoc
