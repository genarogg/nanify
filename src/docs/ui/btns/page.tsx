"use client"

import { useState } from "react"


import {
  CheckBox,
  CheckboxGroup,
  Switch
} from "@ui"

export default function Home() {
  // Toggle states
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)

  // Individual checkbox states
  const [rememberMe, setRememberMe] = useState(false)
  const [newsletter, setNewsletter] = useState(true)
  const [terms, setTerms] = useState(false)

  // Multiple checkbox states
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["javascript"])
  const [selectedFramework, setSelectedFramework] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "database"])

  const languageOptions = [
    { id: "javascript", label: "JavaScript", description: "Lenguaje de programación versátil" },
    { id: "typescript", label: "TypeScript", description: "JavaScript con tipado estático" },
    { id: "python", label: "Python", description: "Lenguaje ideal para IA y backend" },
    { id: "java", label: "Java", description: "Lenguaje robusto para aplicaciones enterprise" },
    { id: "csharp", label: "C#", description: "Lenguaje de Microsoft para .NET" },
    { id: "go", label: "Go", description: "Lenguaje rápido y eficiente de Google" },
  ]

  const frameworkOptions = [
    { id: "react", label: "React", description: "Biblioteca para interfaces de usuario" },
    { id: "vue", label: "Vue.js", description: "Framework progresivo para UI" },
    { id: "angular", label: "Angular", description: "Framework completo de Google" },
    { id: "svelte", label: "Svelte", description: "Compilador de componentes web" },
  ]

  const featureOptions = [
    { id: "auth", label: "Autenticación", description: "Sistema de login y registro" },
    { id: "database", label: "Base de datos", description: "Almacenamiento persistente" },
    { id: "api", label: "API REST", description: "Servicios web RESTful" },
    { id: "realtime", label: "Tiempo real", description: "Actualizaciones en vivo" },
    { id: "analytics", label: "Analytics", description: "Seguimiento y métricas" },
    { id: "payments", label: "Pagos", description: "Procesamiento de pagos" },
  ]

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>🎛️ Demo de Componentes Interactivos</h1>
        <p>Explora toggles, checkboxes y selecciones múltiples con animaciones</p>
      </header>

      {/* Toggle Buttons Section */}
      <section className="demo-section">
        <h2>🔄 Toggle Buttons</h2>
        <div className="toggle-grid">
          <div className="control-item">
            <Switch isOn={notifications} onToggle={() => setNotifications(!notifications)} />
            <div className="control-info">
              <h3>Notificaciones</h3>
              <p>
                Estado:{" "}
                <span className={notifications ? "status-on" : "status-off"}>
                  {notifications ? "Activadas" : "Desactivadas"}
                </span>
              </p>
            </div>
          </div>

          <div className="control-item">
            <Switch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
            <div className="control-info">
              <h3>Modo Oscuro</h3>
              <p>
                Estado:{" "}
                <span className={darkMode ? "status-on" : "status-off"}>{darkMode ? "Activado" : "Desactivado"}</span>
              </p>
            </div>
          </div>

          <div className="control-item">
            <Switch isOn={autoSave} onToggle={() => setAutoSave(!autoSave)} />
            <div className="control-info">
              <h3>Guardado Automático</h3>
              <p>
                Estado:{" "}
                <span className={autoSave ? "status-on" : "status-off"}>{autoSave ? "Activado" : "Desactivado"}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Checkboxes Section */}
      <section className="demo-section">
        <h2>☑️ Checkboxes Individuales</h2>
        <div className="checkbox-list">
          <CheckBox
            isChecked={rememberMe}
            onToggle={() => setRememberMe(!rememberMe)}
            label="Mantener sesión iniciada"
          />
          <CheckBox
            isChecked={newsletter}
            onToggle={() => setNewsletter(!newsletter)}
            label="Recibir newsletter semanal"
          />
          <CheckBox isChecked={terms} onToggle={() => setTerms(!terms)} label="Acepto términos y condiciones" />
        </div>

        <div className="data-display">
          <h4>📊 Estado de checkboxes:</h4>
          <ul>
            <li>
              Mantener sesión: <strong>{rememberMe ? "✅ Sí" : "❌ No"}</strong>
            </li>
            <li>
              Newsletter: <strong>{newsletter ? "✅ Sí" : "❌ No"}</strong>
            </li>
            <li>
              Términos: <strong>{terms ? "✅ Sí" : "❌ No"}</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Multiple Selection Sections */}
      <section className="demo-section">
        <h2>🎯 Selecciones Múltiples</h2>

        <div className="multiple-grid">
          <div className="multiple-item">
            <CheckboxGroup
              title="Lenguajes de Programación"
              subtitle="Selecciona todos los que domines"
              options={languageOptions}
              selectedValues={selectedLanguages}
              onChange={setSelectedLanguages}
              allowMultiple={true}
              maxSelections={4}
              showSelectAll={true} // Añadir la opción de seleccionar todos
            />
            <div className="selection-display">
              <strong>Seleccionados ({selectedLanguages.length}):</strong>
              <div className="tags">
                {selectedLanguages.map((lang) => (
                  <span key={lang} className="tag">
                    {languageOptions.find((l) => l.id === lang)?.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="multiple-item">
            <CheckboxGroup
              title="Framework Principal"
              subtitle="Selecciona solo uno"
              options={frameworkOptions}
              selectedValues={selectedFramework}
              onChange={setSelectedFramework}
              allowMultiple={false}
            />
            <div className="selection-display">
              <strong>Seleccionado:</strong>
              <div className="tags">
                {selectedFramework.map((fw) => (
                  <span key={fw} className="tag tag-single">
                    {frameworkOptions.find((f) => f.id === fw)?.label}
                  </span>
                ))}
                {selectedFramework.length === 0 && <span className="no-selection">Ninguno</span>}
              </div>
            </div>
          </div>

          <div className="multiple-item full-width">
            <CheckboxGroup
              title="Características del Proyecto"
              subtitle="Selecciona las funcionalidades que necesitas"
              options={featureOptions}
              selectedValues={selectedFeatures}
              onChange={setSelectedFeatures}
              allowMultiple={true}
              showSelectAll={true} // Añadir la opción de seleccionar todos
            />
            <div className="selection-display">
              <strong>Características seleccionadas ({selectedFeatures.length}):</strong>
              <div className="tags">
                {selectedFeatures.map((feature) => (
                  <span key={feature} className="tag">
                    {featureOptions.find((f) => f.id === feature)?.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="demo-section summary-section">
        <h2>📋 Resumen de Configuración</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <h3>⚙️ Configuración</h3>
            <ul>
              <li>Notificaciones: {notifications ? "✅" : "❌"}</li>
              <li>Modo oscuro: {darkMode ? "✅" : "❌"}</li>
              <li>Guardado automático: {autoSave ? "✅" : "❌"}</li>
            </ul>
          </div>

          <div className="summary-card">
            <h3>👤 Preferencias</h3>
            <ul>
              <li>Mantener sesión: {rememberMe ? "✅" : "❌"}</li>
              <li>Newsletter: {newsletter ? "✅" : "❌"}</li>
              <li>Términos aceptados: {terms ? "✅" : "❌"}</li>
            </ul>
          </div>

          <div className="summary-card">
            <h3>💻 Tecnologías</h3>
            <p>
              <strong>Lenguajes:</strong> {selectedLanguages.length > 0 ? selectedLanguages.join(", ") : "Ninguno"}
            </p>
            <p>
              <strong>Framework:</strong> {selectedFramework.length > 0 ? selectedFramework[0] : "Ninguno"}
            </p>
            <p>
              <strong>Características:</strong> {selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "Ninguna"}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
        }

        .demo-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 30px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .demo-header h1 {
          color: #1e293b;
          margin-bottom: 10px;
          font-size: 2.5rem;
        }

        .demo-header p {
          color: #64748b;
          font-size: 1.1rem;
        }

        .demo-section {
          margin-bottom: 40px;
          padding: 30px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .demo-section h2 {
          color: #1e293b;
          margin-bottom: 25px;
          font-size: 1.8rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 10px;
        }

        .toggle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .control-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
        }

        .control-info h3 {
          margin: 0 0 5px 0;
          color: #374151;
          font-size: 1.1rem;
        }

        .control-info p {
          margin: 0;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .status-on {
          color: #059669;
          font-weight: 600;
        }

        .status-off {
          color: #dc2626;
          font-weight: 600;
        }

        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 25px;
        }

        .data-display {
          padding: 20px;
          background: #f1f5f9;
          border-radius: 12px;
          border-left: 4px solid #3b82f6;
        }

        .data-display h4 {
          margin: 0 0 15px 0;
          color: #1e293b;
        }

        .data-display ul {
          margin: 0;
          padding-left: 20px;
        }

        .data-display li {
          margin-bottom: 8px;
          color: #475569;
        }

        .multiple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .multiple-item.full-width {
          grid-column: 1 / -1;
        }

        .selection-display {
          margin-top: 20px;
          padding: 15px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .tag {
          background: #3b82f6;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .tag-single {
          background: #059669;
        }

        .no-selection {
          color: #9ca3af;
          font-style: italic;
        }

        .summary-section {
          background: linear-gradient(135deg, #1e293b, #334155);
          color: white;
        }

        .summary-section h2 {
          color: white;
          border-bottom-color: #475569;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 25px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .summary-card h3 {
          margin: 0 0 15px 0;
          color: #f1f5f9;
        }

        .summary-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .summary-card li {
          margin-bottom: 8px;
          color: #cbd5e1;
        }

        .summary-card p {
          margin: 8px 0;
          color: #cbd5e1;
        }

        @media (max-width: 768px) {
          .demo-container {
            padding: 15px;
          }
          
          .toggle-grid,
          .multiple-grid {
            grid-template-columns: 1fr;
          }
          
          .demo-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}
