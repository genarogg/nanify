"use client"

import { Tabs } from "@/components/ux"
import "./styles.css"

// Componentes de ejemplo para las pestañas
const TabContent1 = () => (
  <div className="tab-example-content">
    <h3>🏠 Contenido del Dashboard</h3>
    <p>Este es el contenido de la primera pestaña. Aquí podrías mostrar métricas, gráficos o información general.</p>
    <div className="example-cards">
      <div className="example-card">
        <h4>Usuarios Activos</h4>
        <p className="metric">1,234</p>
      </div>
      <div className="example-card">
        <h4>Ventas del Mes</h4>
        <p className="metric">$45,678</p>
      </div>
    </div>
  </div>
)

const TabContent2 = () => (
  <div className="tab-example-content">
    <h3>👥 Gestión de Usuarios</h3>
    <p>Contenido relacionado con la gestión de usuarios del sistema.</p>
    <div className="user-list">
      <div className="user-item">
        <div className="user-avatar">JD</div>
        <div className="user-info">
          <h4>John Doe</h4>
          <p>john@example.com</p>
        </div>
        <span className="user-status active">Activo</span>
      </div>
      <div className="user-item">
        <div className="user-avatar">JS</div>
        <div className="user-info">
          <h4>Jane Smith</h4>
          <p>jane@example.com</p>
        </div>
        <span className="user-status inactive">Inactivo</span>
      </div>
    </div>
  </div>
)

const TabContent3 = () => (
  <div className="tab-example-content">
    <h3>⚙️ Configuración</h3>
    <p>Panel de configuración del sistema.</p>
    <div className="settings-form">
      <div className="setting-item">
        <label>Notificaciones por email</label>
        <input type="checkbox" defaultChecked />
      </div>
      <div className="setting-item">
        <label>Tema oscuro</label>
        <input type="checkbox" />
      </div>
      <div className="setting-item">
        <label>Idioma</label>
        <select>
          <option>Español</option>
          <option>English</option>
          <option>Français</option>
        </select>
      </div>
    </div>
  </div>
)

const TabContent4 = () => (
  <div className="tab-example-content">
    <h3>📊 Reportes</h3>
    <p>Visualización de reportes y estadísticas.</p>
    <div className="reports-grid">
      <div className="report-card">
        <h4>Reporte Mensual</h4>
        <p>Estadísticas del último mes</p>
        <button className="report-btn">Ver Reporte</button>
      </div>
      <div className="report-card">
        <h4>Análisis Anual</h4>
        <p>Resumen del año completo</p>
        <button className="report-btn">Ver Análisis</button>
      </div>
    </div>
  </div>
)

const TabContent5 = () => (
  <div className="tab-example-content">
    <h3>🔧 Herramientas</h3>
    <p>Herramientas y utilidades del sistema.</p>
    <div className="tools-grid">
      <div className="tool-item">
        <div className="tool-icon">🔍</div>
        <h4>Búsqueda Avanzada</h4>
        <p>Buscar en toda la base de datos</p>
      </div>
      <div className="tool-item">
        <div className="tool-icon">📤</div>
        <h4>Exportar Datos</h4>
        <p>Exportar información en varios formatos</p>
      </div>
      <div className="tool-item">
        <div className="tool-icon">🔄</div>
        <h4>Sincronización</h4>
        <p>Sincronizar con servicios externos</p>
      </div>
    </div>
  </div>
)

export default function TabsPage() {
  // Configuración de las pestañas
  const tabsData = [
    {
      titulo: "Dashboard",
      componente: <TabContent1 />,
    },
    {
      titulo: "Usuarios",
      componente: <TabContent2 />,
    },
    {
      titulo: "Configuración",
      componente: <TabContent3 />,
    },
    {
      titulo: "Reportes",
      componente: <TabContent4 />,
    },
    {
      titulo: "Herramientas",
      componente: <TabContent5 />,
    },
  ]

  // Ejemplo con menos pestañas
  const simpleTabsData = [
    {
      titulo: "Información",
      componente: (
        <div className="simple-tab-content">
          <h3>📋 Información General</h3>
          <p>Esta es una implementación simple del componente Tabs con solo tres pestañas.</p>
        </div>
      ),
    },
    {
      titulo: "Detalles",
      componente: (
        <div className="simple-tab-content">
          <h3>🔍 Detalles</h3>
          <p>Aquí se muestran los detalles específicos del elemento seleccionado.</p>
        </div>
      ),
    },
    {
      titulo: "Historial",
      componente: (
        <div className="simple-tab-content">
          <h3>📅 Historial</h3>
          <p>Registro de cambios y actividades realizadas.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="tabs-demo-container">
      <header className="tabs-demo-header">
        <h1>📑 Tabs Component</h1>
        <p>Componente de pestañas con animaciones fluidas y diseño responsivo</p>
      </header>

      {/* Ejemplo Principal */}
      <section className="tabs-demo-section">
        <h2>🎯 Ejemplo Principal</h2>
        <p>Implementación completa con múltiples pestañas y contenido variado:</p>
        <div className="tabs-wrapper">
          <Tabs tabs={tabsData} defaultTab={0} />
        </div>
      </section>

      {/* Ejemplo Simple */}
      <section className="tabs-demo-section">
        <h2>✨ Ejemplo Simplificado</h2>
        <p>Versión más simple con menos pestañas:</p>
        <div className="tabs-wrapper">
          <Tabs tabs={simpleTabsData} defaultTab={0} />
        </div>
      </section>

      {/* Características */}
      <section className="tabs-demo-section">
        <h2>🚀 Características</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Animaciones Fluidas</h3>
            <p>Transiciones suaves entre pestañas con animaciones de spring</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Diseño Responsivo</h3>
            <p>Se adapta perfectamente a diferentes tamaños de pantalla</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Scroll Horizontal</h3>
            <p>Scroll automático en pantallas pequeñas con indicadores visuales</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Alto Rendimiento</h3>
            <p>Optimizado con Framer Motion para animaciones performantes</p>
          </div>
        </div>
      </section>

      {/* Código de Ejemplo */}
      <section className="tabs-demo-section">
        <h2>💻 Uso del Componente</h2>

        <div className="code-example-section">
          <h3>1. Definir el contenido de las pestañas</h3>
          <div className="code-block">
            <code>{`const tabsData = [
  {
    titulo: "Dashboard",
    componente: <DashboardContent />,
  },
  {
    titulo: "Usuarios", 
    componente: <UsersContent />,
  },
  {
    titulo: "Configuración",
    componente: <SettingsContent />,
  }
]`}</code>
          </div>
        </div>

        <div className="code-example-section">
          <h3>2. Implementar el componente</h3>
          <div className="code-block">
            <code>{`<Tabs 
  tabs={tabsData} 
  defaultTab={0}
  className="custom-tabs"
/>`}</code>
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="tabs-demo-section">
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
                  <code>tabs</code>
                </td>
                <td>TabItem[]</td>
                <td>-</td>
                <td>Array de objetos con titulo y componente</td>
              </tr>
              <tr>
                <td>
                  <code>defaultTab</code>
                </td>
                <td>number</td>
                <td>0</td>
                <td>Índice de la pestaña activa por defecto</td>
              </tr>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>string</td>
                <td>""</td>
                <td>Clases CSS adicionales</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="interface-section">
          <h3>Interface TabItem</h3>
          <div className="code-block">
            <code>{`interface TabItem {
  titulo: string
  componente: React.ReactNode
}`}</code>
          </div>
        </div>
      </section>

      {/* Consejos de Uso */}
      <section className="tabs-demo-section">
        <h2>💡 Consejos de Uso</h2>

        <div className="tips-grid">
          <div className="tip-card">
            <h4>🎯 Organización del Contenido</h4>
            <p>Agrupa contenido relacionado en pestañas lógicas. Evita tener demasiadas pestañas (máximo 7-8).</p>
          </div>

          <div className="tip-card">
            <h4>📱 Responsividad</h4>
            <p>El componente maneja automáticamente el scroll horizontal en pantallas pequeñas.</p>
          </div>

          <div className="tip-card">
            <h4>⚡ Rendimiento</h4>
            <p>El contenido de las pestañas se renderiza solo cuando es necesario, optimizando el rendimiento.</p>
          </div>

          <div className="tip-card">
            <h4>🎨 Personalización</h4>
            <p>Usa la prop className para aplicar estilos personalizados al contenedor principal.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
