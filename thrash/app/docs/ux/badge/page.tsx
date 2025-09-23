"use client"

import { useState } from "react"
import { Badge } from "@/components/ux"
import "./styles.css"

export default function BadgePage() {
  const [customColor, setCustomColor] = useState("#8b5cf6")
  const [customWidth, setCustomWidth] = useState("")

  const handleBadgeClick = (variant: string) => {
    console.log(`Badge ${variant} clicked!`)
  }

  return (
    <div className="badge-demo-container">
      <header className="badge-demo-header">
        <h1>🏷️ Badge Component</h1>
        <p>Componente de etiquetas para mostrar estados, categorías y información destacada</p>
      </header>

      {/* Variantes Predefinidas */}
      <section className="badge-demo-section">
        <h2>🎨 Variantes Predefinidas</h2>
        <div className="badge-variants-grid">
          <div className="badge-example">
            <Badge variant="success">Success</Badge>
            <p>Estado exitoso</p>
          </div>

          <div className="badge-example">
            <Badge variant="warning">Warning</Badge>
            <p>Advertencia</p>
          </div>

          <div className="badge-example">
            <Badge variant="error">Error</Badge>
            <p>Error o fallo</p>
          </div>

          <div className="badge-example">
            <Badge variant="info">Info</Badge>
            <p>Información</p>
          </div>

          <div className="badge-example">
            <Badge variant="primary">Primary</Badge>
            <p>Acción principal</p>
          </div>

          <div className="badge-example">
            <Badge variant="secondary">Secondary</Badge>
            <p>Acción secundaria</p>
          </div>
        </div>
      </section>

      {/* Badges Clickeables */}
      <section className="badge-demo-section">
        <h2>👆 Badges Interactivos</h2>
        <div className="badge-interactive-grid">
          <Badge variant="success" onClick={() => handleBadgeClick("success")}>
            Clickeable Success
          </Badge>

          <Badge variant="primary" onClick={() => handleBadgeClick("primary")}>
            Clickeable Primary
          </Badge>

          <Badge variant="warning" onClick={() => handleBadgeClick("warning")}>
            Clickeable Warning
          </Badge>
        </div>
        <p className="badge-note">💡 Los badges clickeables tienen efectos hover y se comportan como botones</p>
      </section>

      {/* Personalización */}
      <section className="badge-demo-section">
        <h2>🎛️ Personalización</h2>

        <div className="customization-controls">
          <div className="control-group">
            <label htmlFor="color-picker">Color personalizado:</label>
            <input
              id="color-picker"
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="width-input">Ancho personalizado:</label>
            <input
              id="width-input"
              type="text"
              placeholder="ej: 120px, 50%"
              value={customWidth}
              onChange={(e) => setCustomWidth(e.target.value)}
            />
          </div>
        </div>

        <div className="custom-badge-preview">
          <Badge customColor={customColor} width={customWidth || undefined}>
            Badge Personalizado
          </Badge>
        </div>
      </section>

      {/* Diferentes Tamaños */}
      <section className="badge-demo-section">
        <h2>📏 Diferentes Anchos</h2>
        <div className="badge-sizes-grid">
          <Badge variant="primary" width="80px">
            Pequeño
          </Badge>
          <Badge variant="info" width="120px">
            Mediano
          </Badge>
          <Badge variant="success" width="160px">
            Grande
          </Badge>
          <Badge variant="warning" width="200px">
            Extra Grande
          </Badge>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="badge-demo-section">
        <h2>💼 Casos de Uso</h2>

        <div className="use-cases">
          <div className="use-case">
            <h3>Estados de Usuario</h3>
            <div className="use-case-badges">
              <Badge variant="success">Activo</Badge>
              <Badge variant="warning">Pendiente</Badge>
              <Badge variant="error">Inactivo</Badge>
            </div>
          </div>

          <div className="use-case">
            <h3>Prioridades</h3>
            <div className="use-case-badges">
              <Badge variant="error">Alta</Badge>
              <Badge variant="warning">Media</Badge>
              <Badge variant="info">Baja</Badge>
            </div>
          </div>

          <div className="use-case">
            <h3>Categorías</h3>
            <div className="use-case-badges">
              <Badge variant="primary">Frontend</Badge>
              <Badge variant="secondary">Backend</Badge>
              <Badge customColor="#10b981">DevOps</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Código de Ejemplo */}
      <section className="badge-demo-section">
        <h2>💻 Ejemplos de Código</h2>

        <div className="code-examples">
          <div className="code-example">
            <h4>Badge Básico</h4>
            <div className="code-block">
              <code>{`<Badge variant="success">Success</Badge>`}</code>
            </div>
          </div>

          <div className="code-example">
            <h4>Badge Clickeable</h4>
            <div className="code-block">
              <code>{`<Badge variant="primary" onClick={handleClick}>
  Clickeable
</Badge>`}</code>
            </div>
          </div>

          <div className="code-example">
            <h4>Badge Personalizado</h4>
            <div className="code-block">
              <code>{`<Badge 
  customColor="#8b5cf6" 
  width="120px"
>
  Personalizado
</Badge>`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="badge-demo-section">
        <h2>⚙️ Props Disponibles</h2>

        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Default</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>children</code>
                </td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>Contenido del badge</td>
              </tr>
              <tr>
                <td>
                  <code>variant</code>
                </td>
                <td>string</td>
                <td>"primary"</td>
                <td>Variante de color predefinida</td>
              </tr>
              <tr>
                <td>
                  <code>customColor</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Color personalizado (hex, rgb, etc.)</td>
              </tr>
              <tr>
                <td>
                  <code>width</code>
                </td>
                <td>string | number</td>
                <td>-</td>
                <td>Ancho personalizado</td>
              </tr>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>string</td>
                <td>""</td>
                <td>Clases CSS adicionales</td>
              </tr>
              <tr>
                <td>
                  <code>onClick</code>
                </td>
                <td>function</td>
                <td>-</td>
                <td>Función ejecutada al hacer click</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
