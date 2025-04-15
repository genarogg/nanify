"use client"

import React from 'react'
import { A } from "@nano"
import "./styles.css"

interface DocumentationProps { }

const Documentation: React.FC<DocumentationProps> = () => {
    return (
        <div className="documentation-container">
            <header className="documentation-header">
                <h1 className="documentation-title">Documentación</h1>
                <p className="documentation-description">Nano page</p>
            </header>

            <section className="documentation-section">
                <h2 className="section-title">Components</h2>

                {/* Icon Component */}
                <div className="component-card">
                    <h3 className="component-title">Icon</h3>
                    <p className="component-description">Icon component</p>

                    <div className="description-section">
                        <ul className="props-list">
                            <li>El componente <code className="inline-code">Icon</code> se utiliza para renderizar un ícono con clases CSS opcionales.</li>
                            <li>Props:</li>
                            <ul className="props-list nested-list">
                                <li><span className="props-name">icon</span>: El ícono a renderizar (opcional).</li>
                                <li><span className="props-name">className</span>: Clase CSS para el ícono (opcional).</li>
                            </ul>
                        </ul>

                        <div className="usage-section">
                            <p className="usage-title">Uso del componente:</p>
                            <div className="code-block">
                                <code className="code-text">{'<Icon icon={<icono />}/>'}</code>
                            </div>
                            <div className="code-block">
                                <code className="code-text">{'<Icon className={"css"}/>'}</code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* A Component */}
                <div className="component-card">
                    <h3 className="component-title">A</h3>
                    <p className="component-description">A component</p>

                    <div className="description-section">
                        <ul className="props-list">
                            <li>El componente <code className="inline-code">A</code> es un enlace que puede manejar diferentes tipos de navegación.</li>
                            <li>Props:</li>
                            <ul className="props-list nested-list">
                                <li><span className="props-name">href</span>: La URL a la que se enlaza.</li>
                                <li><span className="props-name">type</span>: El tipo de enlace (opcional). Puede ser "mailto", "a" o por defecto.</li>
                                <li><span className="props-name">children</span>: Los elementos hijos que se renderizan dentro del enlace (opcional).</li>
                                <li><span className="props-name">className</span>: Clase CSS para el enlace (opcional).</li>
                            </ul>
                        </ul>

                        <div className="usage-section">
                            <p className="usage-title">Uso del componente:</p>
                            <div className="code-block">
                                <code className="code-text">{'<A href="ruta">name</A>'}</code>
                            </div>
                            <div className="code-block">
                                <code className="code-text">{'<A href="ruta" type="a">name</A>'}</code>
                            </div>
                            <div className="code-block">
                                <code className="code-text">{'<A href="email" type="mailto">name</A>'}</code>
                            </div>

                        </div>
                    </div>
                </div>

                {/* notify Function */}
                <div className="component-card">
                    <h3 className="component-title">notify</h3>
                    <p className="component-description">notify function</p>

                    <div className="description-section">
                        <ul className="props-list">
                            <li>La función <code className="inline-code">notify</code> se utiliza para mostrar notificaciones de tipo toast.</li>
                            <li>Props:</li>
                            <ul className="props-list nested-list">
                                <li><span className="props-name">type</span>: El tipo de notificación. Puede ser "success", "error" o "warning".</li>
                                <li><span className="props-name">message</span>: El mensaje de la notificación.</li>
                                <li><span className="props-name">config</span>: Configuración opcional para personalizar la notificación.</li>
                            </ul>
                            <li>Advertencia: Asegúrate de incluir <code className="inline-code">ToastContainer</code> en tu layout para que las notificaciones se muestren correctamente.</li>
                            <li className="docs-link">
                                Documentación oficial:
                                <A type='a'
                                    href="https://fkhadra.github.io/react-toastify/introduction"
                                    className="external-link"
                                >
                                    react-toastify
                                </A>
                            </li>
                        </ul>

                        <div className="usage-section">
                            <p className="usage-title">Uso del componente:</p>
                            <div className="code-block">
                                <code className="code-text">{'notify({type: "success", message: "message"})'}</code>
                            </div>
                            <p><span className="props-name">type:</span> 'success' | 'error' | 'warning';</p>
                            <p><span className="props-name">message:</span> cualquiera</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Documentation
