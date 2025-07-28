"use client"
import { Spinner } from "@/components/ux"
import "./styles.css"

export default function SpinnerPage() {
  return (
    <div className="component-documentation">
      <header className="component-header">
        <h1>Spinner</h1>
        <p>Componente de carga animado con diferentes tamaños y colores.</p>
      </header>

      <section className="component-section">
        <h2>Spinner Básico</h2>
        <div className="example-container">
          <Spinner />
        </div>
        <div className="code-block">
          <pre>{`<Spinner />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Diferentes Tamaños</h2>
        <div className="example-container">
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div>
              <p>Pequeño</p>
              <Spinner />
            </div>
            <div>
              <p>Mediano</p>
              <Spinner  />
            </div>
            <div>
              <p>Grande</p>
              <Spinner />
            </div>
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Spinner />
<Spinner  />
<Spinner />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Diferentes Colores</h2>
        <div className="example-container">
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div>
              <p>Primario</p>
              <Spinner  />
            </div>
            <div>
              <p>Secundario</p>
              <Spinner />
            </div>
            <div>
              <p>Éxito</p>
              <Spinner />
            </div>
            <div>
              <p>Peligro</p>
              <Spinner  />
            </div>
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Spinner  />
<Spinner />
<Spinner />
<Spinner  />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Con Texto</h2>
        <div className="example-container">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Spinner />
            <p>Cargando...</p>
          </div>
        </div>
        <div className="code-block">
          <pre>{`<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
  <Spinner />
  <p>Cargando...</p>
</div>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Propiedades</h2>
        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo</th>
                <th>Por defecto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>'small' | 'medium' | 'large'</td>
                <td>'medium'</td>
                <td>Tamaño del spinner</td>
              </tr>
              <tr>
                <td>color</td>
                <td>'primary' | 'secondary' | 'success' | 'danger'</td>
                <td>'primary'</td>
                <td>Color del spinner</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>-</td>
                <td>Clases CSS adicionales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
