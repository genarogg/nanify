"use client"

import type React from "react"
import TwoColumns from "@/components/sections/column/TwoColumns"

import "./styles.css"

type TwoColumnsDocumentationProps = {}

const TwoColumnsDocumentation: React.FC<TwoColumnsDocumentationProps> = () => {
    return (
        <div className="two-columns-docs-container">
            <header className="two-columns-docs-header">
                <h1 className="two-columns-docs-title">Documentación - TwoColumns</h1>
                <p className="two-columns-docs-description">
                    Documentación completa del componente TwoColumns para crear layouts de dos columnas responsivos.
                </p>
            </header>

            <section className="two-columns-docs-section">
                <h2 className="section-title">Componente TwoColumns</h2>

                <div className="component-card">
                    <h3 className="component-title">TwoColumns Layout</h3>
                    <p className="component-description">
                        Componente flexible para crear layouts de dos columnas con diseño responsivo y opciones de reordenamiento.
                    </p>

                    <div className="component-preview">
                        <TwoColumns
                            title="Ejemplo de Dos Columnas"
                            left={
                                <div>
                                    <h4>Columna Izquierda</h4>
                                    <p>Este es el contenido de la columna izquierda. Puede contener cualquier componente React.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <h4>Columna Derecha</h4>
                                    <p>Este es el contenido de la columna derecha. También es completamente personalizable.</p>
                                </div>
                            }
                        />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Uso básico del componente:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<TwoColumns
    title="Mi Título"
    left={<div>Contenido izquierdo</div>}
    right={<div>Contenido derecho</div>}
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Ejemplo con reordenamiento en móvil:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<TwoColumns
    title="Layout con Reordenamiento"
    left={<div>Primera columna en desktop</div>}
    right={<div>Segunda columna en desktop</div>}
    reorder={true}
    className="mi-clase-personalizada"
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Descripción:</p>
                        <p>
                            El componente <code className="inline-code">TwoColumns</code> crea un layout de dos columnas
                            utilizando CSS Grid. Es completamente responsivo y se adapta automáticamente a diferentes
                            tamaños de pantalla.
                        </p>

                        <div className="features-section">
                            <p className="features-title">Características principales:</p>
                            <ul className="features-list">
                                <li>Layout responsivo que se convierte en una sola columna en dispositivos móviles</li>
                                <li>Opción de reordenamiento de columnas en pantallas grandes</li>
                                <li>Título opcional centrado que ocupa el ancho completo</li>
                                <li>Clases CSS personalizables para cada elemento</li>
                                <li>Contenido completamente flexible usando React.ReactNode</li>
                            </ul>
                        </div>

                        <p className="props-title">Props disponibles:</p>
                        <div className="props-table">
                            <div className="props-row props-header">
                                <span>Prop</span>
                                <span>Tipo</span>
                                <span>Requerido</span>
                                <span>Descripción</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">left</span>
                                <span className="props-type">React.ReactNode</span>
                                <span className="props-required">Sí</span>
                                <span>Contenido para la columna izquierda</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">right</span>
                                <span className="props-type">React.ReactNode</span>
                                <span className="props-required">Sí</span>
                                <span>Contenido para la columna derecha</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">title</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Título opcional que aparece centrado arriba</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">className</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Clase CSS adicional para el contenedor principal</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">leftClassName</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Clase CSS adicional para la columna izquierda</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">rightClassName</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Clase CSS adicional para la columna derecha</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">id</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>ID HTML para el contenedor principal</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">titleId</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>ID HTML para el elemento de título</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">titleClassName</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Clase CSS adicional para el título</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">reorder</span>
                                <span className="props-type">boolean</span>
                                <span className="props-required">No</span>
                                <span>Si es true, reordena las columnas en pantallas  768px (por defecto: false)</span>
                            </div>
                        </div>

                        <div className="responsive-section">
                            <p className="responsive-title">Comportamiento responsivo:</p>
                            <ul className="responsive-list">
                                <li><strong>Pantallas  768px:</strong> Muestra dos columnas lado a lado</li>
                                <li><strong>Pantallas  768px:</strong> Se convierte en una sola columna (stack vertical)</li>
                                <li><strong>Con reorder=true:</strong> En pantallas grandes, la columna izquierda aparece a la derecha y viceversa</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Ejemplo con Reordenamiento</h3>
                    <p className="component-description">
                        Demostración del comportamiento de reordenamiento en pantallas grandes.
                    </p>

                    <div className="component-preview">
                        <TwoColumns
                            title="Layout Reordenado (Desktop)"
                            reorder={true}
                            left={
                                <div>
                                    <h4>Primera en móvil, segunda en desktop</h4>
                                    <p>Esta columna aparece primera en móvil pero segunda en desktop debido a la prop reorder=true.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <h4>Segunda en móvil, primera en desktop</h4>
                                    <p>Esta columna aparece segunda en móvil pero primera en desktop.</p>
                                </div>
                            }
                            leftClassName="ejemplo-left"
                            rightClassName="ejemplo-right"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TwoColumnsDocumentation