"use client"
import "./styles.css"

import { MenuToolTip, UltimateTooTip } from "@/components/tooltip"

const Documentation = () => {
    const menuItems = ["Opción 1", "Opción 2", "Opción 3"]

    return (
        <div className="documentation-container">
            <header className="documentation-header">
                <h1 className="documentation-title">📘 Documentación de Tooltips</h1>
                <p className="documentation-description">
                    Los componentes <code className="inline-code">MenuToolTip</code> y <code className="inline-code">UltimateTooTip</code> 
                    están construidos sobre <code className="inline-code">@tippyjs/react</code> y permiten mostrar mensajes de ayuda o menús desplegables de forma elegante e interactiva.
                </p>
            </header>

            <section className="documentation-section">
                <h2 className="section-title">🔹 Componentes</h2>

                {/* MenuToolTip */}
                <div className="component-card">
                    <h3 className="component-title">MenuToolTip</h3>
                    <p className="component-description">
                        Tooltip diseñado para mostrar un <strong>menú desplegable</strong> con una lista de opciones.
                    </p>

                    <div className="component-preview">
                        <MenuToolTip items={menuItems} placement="bottom" animation="shift-away">
                            <button className="demo-menu-trigger">Abrir menú</button>
                        </MenuToolTip>
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Ejemplo de uso:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<MenuToolTip 
  items={["Opción 1", "Opción 2", "Opción 3"]}
  placement="bottom"
  animation="shift-away"
>
  <button>Abrir menú</button>
</MenuToolTip>`}
                            </code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Props disponibles:</p>
                        <ul className="props-list">
                            <li><span className="props-name">children</span>: Elemento activador del tooltip (React.ReactNode).</li>
                            <li><span className="props-name">items</span>: Elementos a mostrar en el menú (string[] | React.ReactNode[]).</li>
                            <li><span className="props-name">className</span>: Clase CSS para el contenedor (opcional).</li>
                            <li><span className="props-name">classNameTooltip</span>: Clase CSS específica para el tooltip (opcional).</li>
                            <li><span className="props-name">placement</span>: Posición del tooltip (por defecto: "bottom").</li>
                            <li><span className="props-name">animation</span>: Tipo de animación (por defecto: "shift-away").</li>
                            <li><span className="props-name">interactive</span>: Tooltip interactivo (boolean, por defecto: true).</li>
                        </ul>
                    </div>
                </div>

                {/* UltimateTooTip */}
                <div className="component-card">
                    <h3 className="component-title">UltimateTooTip</h3>
                    <p className="component-description">
                        Tooltip <strong>versátil y personalizable</strong>, ideal para mostrar texto o contenido enriquecido.
                    </p>

                    <div className="component-preview">
                        <UltimateTooTip
                            title={<button className="demo-tooltip-trigger">Hover aquí</button>}
                            content="Este es el contenido del tooltip"
                            placement="top"
                        />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Ejemplo de uso:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<UltimateTooTip 
  title={<button>Hover aquí</button>}
  content="Contenido del tooltip"
  placement="top"
  animation="shift-away"
  interactive={true}
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Props disponibles:</p>
                        <ul className="props-list">
                            <li><span className="props-name">title</span>: Elemento activador del tooltip (React.ReactNode).</li>
                            <li><span className="props-name">content</span>: Contenido dentro del tooltip (React.ReactNode).</li>
                            <li><span className="props-name">className</span>: Clase CSS del contenedor (opcional).</li>
                            <li><span className="props-name">placement</span>: Posición del tooltip (por defecto: "bottom").</li>
                            <li><span className="props-name">animation</span>: Tipo de animación (por defecto: "shift-away").</li>
                            <li><span className="props-name">interactive</span>: Tooltip interactivo (boolean, por defecto: true).</li>
                            <li><span className="props-name">arrow</span>: Muestra flecha indicadora (boolean, por defecto: true).</li>
                            <li><span className="props-name">trigger</span>: Evento activador ("mouseenter" | "click" | "focus", por defecto: "mouseenter").</li>
                        </ul>
                    </div>
                </div>

                {/* Dependencias */}
                <div className="component-card">
                    <h3 className="component-title">📦 Dependencias</h3>
                    <p className="component-description">
                        Ambos componentes utilizan la librería <code className="inline-code">@tippyjs/react</code>.
                    </p>

                    <p className="usage-title">Instalación:</p>
                    <div className="code-block">
                        <code className="code-text">npm install @tippyjs/react</code>
                    </div>

                    <p className="usage-title">Imports necesarios:</p>
                    <div className="code-block">
                        <code className="code-text">
{`import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';`}
                        </code>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Documentation
