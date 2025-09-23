"use client"

import { useState } from "react"
import { Textarea } from "@/components/ux"
import "./styles.css"

export default function TextareaPage() {
  const [basicValue, setBasicValue] = useState("")
  const [limitedValue, setLimitedValue] = useState("")
  const [predefinedValue, setPredefinedValue] = useState("Texto predefinido en el textarea...")
  const [withLabelValue, setWithLabelValue] = useState("")
  const [withIconValue, setWithIconValue] = useState("")
  const [errorValue, setErrorValue] = useState("")
  const [disabledValue, setDisabledValue] = useState("Este textarea está deshabilitado")

  return (
    <div className="component-documentation">
      {/* Header */}
      <header className="component-header">
        <h1>Textarea</h1>
        <p>
          Componente de área de texto personalizable con soporte para iconos, validación, 
          contador de caracteres y diferentes estados. Ideal para formularios y entrada 
          de texto multilínea.
        </p>
      </header>

      {/* Instalación */}
      <section className="component-section">
        <h2>Instalación</h2>
        <div className="code-block">
          <pre>{`import { Textarea } from "@/components/ux"`}</pre>
        </div>
      </section>

      {/* Uso Básico */}
      <section className="component-section">
        <h2>Uso Básico</h2>
        <p>El componente Textarea en su forma más simple requiere un nombre y placeholder.</p>
        <div className="example-container">
          <Textarea
            name="basic"
            placeholder="Escribe tu mensaje aquí..."
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="basic"
  placeholder="Escribe tu mensaje aquí..."
  value={basicValue}
  onChange={(e) => setBasicValue(e.target.value)}
/>`}</pre>
        </div>
      </section>

      {/* Con Etiqueta */}
      <section className="component-section">
        <h2>Con Etiqueta</h2>
        <p>Añade una etiqueta descriptiva para mejorar la accesibilidad.</p>
        <div className="example-container">
          <Textarea
            name="withLabel"
            label="Comentarios"
            placeholder="Comparte tus comentarios..."
            value={withLabelValue}
            onChange={(e) => setWithLabelValue(e.target.value)}
            required
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="withLabel"
  label="Comentarios"
  placeholder="Comparte tus comentarios..."
  value={withLabelValue}
  onChange={(e) => setWithLabelValue(e.target.value)}
  required
/>`}</pre>
        </div>
      </section>

      {/* Con Límite de Caracteres */}
      <section className="component-section">
        <h2>Con Límite de Caracteres</h2>
        <p>Controla la longitud del texto con maxLength y muestra un contador visual.</p>
        <div className="example-container">
          <Textarea
            name="limited"
            placeholder="Máximo 200 caracteres..."
            value={limitedValue}
            onChange={(e) => setLimitedValue(e.target.value)}
            maxLength={200}
      
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="limited"
  placeholder="Máximo 200 caracteres..."
  value={limitedValue}
  onChange={(e) => setLimitedValue(e.target.value)}
  maxLength={200}
/>`}</pre>
        </div>
      </section>

      {/* Con Valor Predefinido */}
      <section className="component-section">
        <h2>Con Valor Predefinido</h2>
        <p>Establece un valor inicial y personaliza el número de filas visibles.</p>
        <div className="example-container">
          <Textarea
            name="predefined"
            placeholder="Tu texto aquí..."
            value={predefinedValue}
            onChange={(e) => setPredefinedValue(e.target.value)}
            rows={4}
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="predefined"
  placeholder="Tu texto aquí..."
  value={predefinedValue}
  onChange={(e) => setPredefinedValue(e.target.value)}
  rows={4}
/>`}</pre>
        </div>
      </section>

      {/* Con Icono */}
      <section className="component-section">
        <h2>Con Icono</h2>
        <p>Añade iconos para mejorar la experiencia visual del usuario.</p>
        <div className="example-container">
          <Textarea
            name="withIcon"
            placeholder="Escribe un mensaje..."
            value={withIconValue}
            onChange={(e) => setWithIconValue(e.target.value)}
            icon="message"
            iconFixed={true}
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="withIcon"
  placeholder="Escribe un mensaje..."
  value={withIconValue}
  onChange={(e) => setWithIconValue(e.target.value)}
  icon="message"
  iconFixed={true}
/>`}</pre>
        </div>
      </section>

      {/* Estado de Error */}
      <section className="component-section">
        <h2>Estado de Error</h2>
        <p>Muestra mensajes de validación y estados de error.</p>
        <div className="example-container">
          <Textarea
            name="error"
            label="Descripción"
            placeholder="Describe el problema..."
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error={errorValue.length === 0 ? "Este campo es requerido" : ""}
            required
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="error"
  label="Descripción"
  placeholder="Describe el problema..."
  value={errorValue}
  onChange={(e) => setErrorValue(e.target.value)}
  error={errorValue.length === 0 ? "Este campo es requerido" : ""}
  required
/>`}</pre>
        </div>
      </section>

      {/* Estado Deshabilitado */}
      <section className="component-section">
        <h2>Estado Deshabilitado</h2>
        <p>Desactiva la interacción cuando sea necesario.</p>
        <div className="example-container">
          <Textarea
            name="disabled"
            placeholder="Campo deshabilitado"
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled={true}
          />
        </div>
        <div className="code-block">
          <pre>{`<Textarea
  name="disabled"
  placeholder="Campo deshabilitado"
  value={disabledValue}
  onChange={(e) => setDisabledValue(e.target.value)}
  disabled={true}
/>`}</pre>
        </div>
      </section>

      {/* API Reference */}
      <section className="component-section">
        <h2>API Reference</h2>
        <p>Propiedades disponibles para el componente Textarea.</p>
        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo</th>
                <th>Por defecto</th>
                <th>Descripción</th>
                <th>Requerido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>name</code></td>
                <td>string</td>
                <td>-</td>
                <td>Nombre del textarea (atributo name)</td>
                <td>✅</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td>string</td>
                <td>-</td>
                <td>Texto de placeholder</td>
                <td>✅</td>
              </tr>
              <tr>
                <td><code>value</code></td>
                <td>string</td>
                <td>-</td>
                <td>Valor controlado del textarea</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>defaultValue</code></td>
                <td>string</td>
                <td>-</td>
                <td>Valor por defecto (no controlado)</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>onChange</code></td>
                <td>function</td>
                <td>-</td>
                <td>Función que se ejecuta al cambiar el valor</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td>string</td>
                <td>-</td>
                <td>Etiqueta del textarea</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>rows</code></td>
                <td>number</td>
                <td>4</td>
                <td>Número de filas visibles</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>maxLength</code></td>
                <td>number</td>
                <td>-</td>
                <td>Límite máximo de caracteres</td>
                <td>❌</td>
              </tr>
             
              <tr>
                <td><code>icon</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Icono a mostrar</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>iconFixed</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Si el icono es fijo o se mueve con el placeholder</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>string</td>
                <td>-</td>
                <td>Mensaje de error a mostrar</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Deshabilitar el textarea</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>required</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Campo requerido</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>id</code></td>
                <td>string</td>
                <td>name</td>
                <td>ID único del elemento</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>className</code></td>
                <td>string</td>
                <td>""</td>
                <td>Clases CSS adicionales</td>
                <td>❌</td>
              </tr>
              <tr>
                <td><code>hasContentState</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Estado inicial de contenido</td>
                <td>❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ref Methods */}
      <section className="component-section">
        <h2>Métodos de Referencia</h2>
        <p>Métodos disponibles cuando usas una referencia al componente.</p>
        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Método</th>
                <th>Parámetros</th>
                <th>Retorno</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>focus()</code></td>
                <td>-</td>
                <td>void</td>
                <td>Enfoca el textarea</td>
              </tr>
              <tr>
                <td><code>blur()</code></td>
                <td>-</td>
                <td>void</td>
                <td>Desenfoca el textarea</td>
              </tr>
              <tr>
                <td><code>getValue()</code></td>
                <td>-</td>
                <td>string</td>
                <td>Obtiene el valor actual</td>
              </tr>
              <tr>
                <td><code>setValue()</code></td>
                <td>value: string</td>
                <td>void</td>
                <td>Establece un nuevo valor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section className="component-section">
        <h2>Accesibilidad</h2>
        <p>El componente incluye las siguientes características de accesibilidad:</p>
        <div className="example-container">
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Soporte completo para lectores de pantalla</li>
            <li>Navegación por teclado estándar</li>
            <li>Etiquetas y descripciones ARIA apropiadas</li>
            <li>Indicadores visuales para estados de foco y error</li>
            <li>Anuncios de errores en tiempo real</li>
            <li>Asociación correcta entre etiquetas y controles</li>
          </ul>
        </div>
      </section>

      {/* Notes */}
      <section className="component-section">
        <h2>Notas de Uso</h2>
        <div className="example-container">
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <strong>✅ Buena práctica:</strong> Siempre incluye una etiqueta descriptiva para mejorar la accesibilidad.
          </div>
          <div style={{ backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '0.5rem' }}>
            <strong>⚠️ Importante:</strong> El componente puede ser controlado o no controlado, pero no cambies entre modos durante el ciclo de vida del componente.
          </div>
        </div>
      </section>
    </div>
  )
}