"use client"

import type React from "react"
import { useState } from "react"
import { A, Squeleto } from "@/components/nano"
import { Icon } from "@/components/ux"
import { ArrowLeft, Loader, Palette, Settings } from "lucide-react"
import "./styles.css"

type SqueletoDocProps = {}

const SqueletoDoc: React.FC<SqueletoDocProps> = () => {
  const [isLoading, setIsLoading] = useState(true)

  const toggleLoading = () => {
    setIsLoading(!isLoading)
  }

  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <A href="/nano" className="back-link">
          <Icon icon={<ArrowLeft size={20} />} />
          Volver a Nano
        </A>
        <h1 className="documentation-title">Componente Squeleto</h1>
        <p className="documentation-description">
          Componente de skeleton loading para mostrar placeholders mientras se cargan los datos.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<Loader size={24} />} />
          Demo Interactivo
        </h2>

        <div className="demo-container">
          <div className="demo-controls">
            <button onClick={toggleLoading} className="toggle-button">
              {isLoading ? "Mostrar Contenido" : "Mostrar Skeleton"}
            </button>
          </div>

          <div className="demo-content">
            {isLoading ? (
              <div className="skeleton-demo">
                <div className="skeleton-card">
                  <Squeleto width="100%" height={200} />
                  <div className="skeleton-text">
                    <Squeleto width="80%" height={24} />
                    <Squeleto width="60%" height={16} />
                    <Squeleto width="90%" height={16} />
                  </div>
                </div>

                <div className="skeleton-list">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="skeleton-list-item">
                      <Squeleto width={50} height={50} />
                      <div className="skeleton-list-content">
                        <Squeleto width="70%" height={18} />
                        <Squeleto width="50%" height={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="actual-content">
                <div className="content-card">
                  <img src="/placeholder.svg?height=200&width=400" alt="Contenido cargado" className="content-image" />
                  <div className="content-text">
                    <h3>Contenido Cargado</h3>
                    <p>Este es el contenido real que se muestra después de la carga.</p>
                    <p>El skeleton proporciona una experiencia de usuario fluida mientras se cargan los datos.</p>
                  </div>
                </div>

                <div className="content-list">
                  {[
                    { name: "Usuario 1", email: "usuario1@ejemplo.com" },
                    { name: "Usuario 2", email: "usuario2@ejemplo.com" },
                    { name: "Usuario 3", email: "usuario3@ejemplo.com" },
                  ].map((user, index) => (
                    <div key={index} className="content-list-item">
                      <div className="user-avatar">{user.name.charAt(0)}</div>
                      <div className="user-info">
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Ejemplos de Uso</h2>

        <div className="code-examples">
          <div className="code-example">
            <h3>Importación</h3>
            <pre className="code-block">
              <code>{`import { Squeleto } from "@nano"`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Skeleton Básico</h3>
            <pre className="code-block">
              <code>{`<Squeleto width={200} height={20} />`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Skeleton con Colores Personalizados</h3>
            <pre className="code-block">
              <code>{`<Squeleto 
  width="100%" 
  height={50} 
  baseColor="#f0f0f0"
  highlightColor="#e0e0e0"
/>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Skeleton con Animación Personalizada</h3>
            <pre className="code-block">
              <code>{`<Squeleto 
  width={300} 
  height={100} 
  duration={2}
  baseColor="#f5f5f5"
  highlightColor="#e8e8e8"
/>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Múltiples Skeletons</h3>
            <pre className="code-block">
              <code>{`// Para una tarjeta de usuario
<div className="user-card">
  <Squeleto width={60} height={60} /> {/* Avatar */}
  <div className="user-info">
    <Squeleto width="80%" height={20} /> {/* Nombre */}
    <Squeleto width="60%" height={16} /> {/* Email */}
  </div>
</div>`}</code>
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
                <th>Por Defecto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>width</code>
                </td>
                <td>any</td>
                <td>✅</td>
                <td>-</td>
                <td>Ancho del skeleton (px, %, etc.)</td>
              </tr>
              <tr>
                <td>
                  <code>height</code>
                </td>
                <td>any</td>
                <td>✅</td>
                <td>-</td>
                <td>Alto del skeleton (px, %, etc.)</td>
              </tr>
              <tr>
                <td>
                  <code>baseColor</code>
                </td>
                <td>string</td>
                <td>❌</td>
                <td>"#f0f0f0"</td>
                <td>Color base del skeleton</td>
              </tr>
              <tr>
                <td>
                  <code>highlightColor</code>
                </td>
                <td>string</td>
                <td>❌</td>
                <td>"#e0e0e0"</td>
                <td>Color del highlight animado</td>
              </tr>
              <tr>
                <td>
                  <code>duration</code>
                </td>
                <td>number</td>
                <td>❌</td>
                <td>1.5</td>
                <td>Duración de la animación en segundos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<Palette size={24} />} />
          Personalización de Colores
        </h2>

        <div className="color-examples">
          <div className="color-example">
            <h3>Tema Claro (Por defecto)</h3>
            <div className="color-demo">
              <Squeleto width="100%" height={40} />
            </div>
            <div className="color-code">
              <code>baseColor: "#f0f0f0", highlightColor: "#e0e0e0"</code>
            </div>
          </div>

          <div className="color-example">
            <h3>Tema Oscuro</h3>
            <div className="color-demo dark">
              <Squeleto width="100%" height={40} baseColor="#2d3748" highlightColor="#4a5568" />
            </div>
            <div className="color-code">
              <code>baseColor: "#2d3748", highlightColor: "#4a5568"</code>
            </div>
          </div>

          <div className="color-example">
            <h3>Tema Azul</h3>
            <div className="color-demo">
              <Squeleto width="100%" height={40} baseColor="#ebf8ff" highlightColor="#bee3f8" />
            </div>
            <div className="color-code">
              <code>baseColor: "#ebf8ff", highlightColor: "#bee3f8"</code>
            </div>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<Settings size={24} />} />
          Patrones Comunes
        </h2>

        <div className="patterns-grid">
          <div className="pattern-card">
            <h3>Tarjeta de Artículo</h3>
            <div className="pattern-demo">
              <Squeleto width="100%" height={120} />
              <div className="pattern-text">
                <Squeleto width="90%" height={20} />
                <Squeleto width="70%" height={16} />
                <Squeleto width="50%" height={14} />
              </div>
            </div>
            <pre className="pattern-code">
              <code>{`<div className="article-card">
  <Squeleto width="100%" height={120} />
  <Squeleto width="90%" height={20} />
  <Squeleto width="70%" height={16} />
  <Squeleto width="50%" height={14} />
</div>`}</code>
            </pre>
          </div>

          <div className="pattern-card">
            <h3>Lista de Usuarios</h3>
            <div className="pattern-demo">
              {[1, 2, 3].map((item) => (
                <div key={item} className="pattern-user-item">
                  <Squeleto width={40} height={40} />
                  <div className="pattern-user-info">
                    <Squeleto width="60%" height={16} />
                    <Squeleto width="40%" height={12} />
                  </div>
                </div>
              ))}
            </div>
            <pre className="pattern-code">
              <code>{`{users.map((_, index) => (
  <div key={index} className="user-item">
    <Squeleto width={40} height={40} />
    <div className="user-info">
      <Squeleto width="60%" height={16} />
      <Squeleto width="40%" height={12} />
    </div>
  </div>
))}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Mejores Prácticas</h2>

        <div className="best-practices">
          <div className="practice-item">
            <h4>🎯 Coincide con el Contenido Real</h4>
            <p>
              Haz que el skeleton coincida lo más posible con la estructura y dimensiones del contenido real que se va a
              cargar.
            </p>
          </div>

          <div className="practice-item">
            <h4>⚡ Usa Dimensiones Apropiadas</h4>
            <p>
              Utiliza porcentajes para anchos responsivos y píxeles para alturas específicas que coincidan con tu
              diseño.
            </p>
          </div>

          <div className="practice-item">
            <h4>🎨 Mantén la Consistencia</h4>
            <p>
              Usa los mismos colores base y highlight en toda tu aplicación para mantener una experiencia visual
              consistente.
            </p>
          </div>

          <div className="practice-item">
            <h4>⏱️ Duración Apropiada</h4>
            <p>
              La duración por defecto (1.5s) funciona bien para la mayoría de casos. Ajusta solo si es necesario para tu
              diseño específico.
            </p>
          </div>

          <div className="practice-item">
            <h4>📱 Considera la Accesibilidad</h4>
            <p>
              Los skeletons ayudan a los usuarios a entender que el contenido se está cargando, mejorando la percepción
              de rendimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Librería Base</h2>

        <div className="library-info">
          <div className="info-card">
            <h3>react-loading-skeleton</h3>
            <p>
              El componente Squeleto está basado en la librería <code>react-loading-skeleton</code>, que proporciona una
              implementación robusta y optimizada de skeleton loading.
            </p>
            <div className="library-links">
              <a
                href="https://github.com/dvtng/react-loading-skeleton"
                target="_blank"
                rel="noopener noreferrer"
                className="library-link"
              >
                📚 Documentación Oficial
              </a>
              <a
                href="https://www.npmjs.com/package/react-loading-skeleton"
                target="_blank"
                rel="noopener noreferrer"
                className="library-link"
              >
                📦 NPM Package
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SqueletoDoc
