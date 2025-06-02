"use client"

import type React from "react"
import Gravatar from "@components/gravatar"
import "./styles.css"

type DocumentationProps = {}

const Documentation: React.FC<DocumentationProps> = () => {
    return (
        <div className="documentation-container">
            <header className="documentation-header">
                <h1 className="documentation-title">Documentación</h1>
                <p className="documentation-description">
                    Esta página documenta varios componentes y funciones utilizados en el proyecto.
                </p>
            </header>

            <section className="documentation-section">
                <h2 className="section-title">Components</h2>

                <div className="component-card">
                    <h3 className="component-title">Gravatar</h3>
                    <p className="component-description">Componente Gravatar</p>

                    <div className="component-preview">
                        <Gravatar email="genarrogg@gmail.com" alt="genaro gonzalez" />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Uso del componente:</p>
                        <div className="code-block">
                            <code className="code-text">{'<Gravatar email="genarrogg@gmail.com" alt="genaro gonzalez"/>'}</code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Descripción:</p>
                        <p>
                            El componente <code className="inline-code">Gravatar</code> se utiliza para mostrar una imagen de Gravatar
                            basada en el correo electrónico proporcionado.
                        </p>

                        <p className="props-title">Props:</p>
                        <ul className="props-list">
                            <li>
                                <span className="props-name">email</span>: El correo electrónico del usuario para generar el hash de
                                Gravatar.
                            </li>
                            <li>
                                <span className="props-name">alt</span>: Texto alternativo para la imagen.
                            </li>
                            <li>
                                <span className="props-name">size</span>: Tamaño de la imagen (opcional, por defecto es 80).
                            </li>
                            <li>
                                <span className="props-name">className</span>: Clase CSS para la imagen (opcional).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Documentation
