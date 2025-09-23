"use client"

import type React from "react"
import SimpleTitle from "@/components/sections/simple-title"
import "./styles.css"

type SimpleTitleDocumentationProps = {}

const SimpleTitleDocumentation: React.FC<SimpleTitleDocumentationProps> = () => {
    return (
        <div className="simple-title-docs-container">
            <header className="simple-title-docs-header">
                <h1 className="simple-title-docs-title">Documentación - SimpleTitle</h1>
                <p className="simple-title-docs-description">
                    Documentación completa del componente SimpleTitle para crear títulos de sección elegantes y responsivos 
                    con navegación por anclas integrada.
                </p>
            </header>

            <section className="simple-title-docs-section">
                <h2 className="section-title">Componente SimpleTitle</h2>

                <div className="component-card">
                    <h3 className="component-title">SimpleTitle</h3>
                    <p className="component-description">
                        Componente especializado para crear títulos de sección con diseño centrado, efectos visuales 
                        y funcionalidad de navegación por anclas. Incluye una línea decorativa y es completamente responsivo.
                    </p>

                    <div className="component-preview">
                        <SimpleTitle titulo="Ejemplo de Título Principal" />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Uso básico del componente:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<SimpleTitle titulo="Mi Título de Sección" />`}
                            </code>
                        </div>
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Uso con ID para navegación por anclas:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<SimpleTitle 
    titulo="Sección con Navegación"
    id="seccion-navegacion"
    className="titulo-personalizado"
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Descripción:</p>
                        <p>
                            El componente <code className="inline-code">SimpleTitle</code> crea títulos de sección 
                            elegantes con un diseño centrado que incluye texto en mayúsculas, una línea decorativa 
                            debajo del título, y soporte completo para navegación por anclas mediante IDs.
                        </p>

                        <div className="features-section">
                            <p className="features-title">Características principales:</p>
                            <ul className="features-list">
                                <li>Diseño centrado con fondo de color sólido (#f2f - magenta)</li>
                                <li>Texto automáticamente convertido a mayúsculas</li>
                                <li>Línea decorativa blanca debajo del título</li>
                                <li>Navegación por anclas con elemento invisible posicionado arriba</li>
                                <li>Completamente responsivo con diferentes alturas según el dispositivo</li>
                                <li>Tipografía optimizada con espaciado de letras y peso de fuente</li>
                                <li>Clases CSS personalizables</li>
                            </ul>
                        </div>

                        <p className="props-title">Props disponibles:</p>
                        <div className="props-table">
                            <div className="props-row props-header">
                                <span>Prop</span>
                                <span>Tipo</span>
                                <span>Requerido</span>
                                <span>Valor por Defecto</span>
                                <span>Descripción</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">titulo</span>
                                <span className="props-type">string</span>
                                <span className="props-required required">Sí</span>
                                <span className="props-default">-</span>
                                <span>El texto del título que se mostrará</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">id</span>
                                <span className="props-type">string</span>
                                <span className="props-required optional">No</span>
                                <span className="props-default">" " (espacio)</span>
                                <span>ID para navegación por anclas. Crea un elemento invisible 90px arriba del título</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">className</span>
                                <span className="props-type">string</span>
                                <span className="props-required optional">No</span>
                                <span className="props-default">" " (espacio)</span>
                                <span>Clase CSS adicional para personalizar el estilo del contenedor</span>
                            </div>
                        </div>

                        <div className="technical-section">
                            <p className="technical-title">Detalles técnicos:</p>
                            <ul className="technical-list">
                                <li><strong>Altura del componente:</strong> 150px (desktop), 100px (tablet), 80px (móvil)</li>
                                <li><strong>Posicionamiento de ancla:</strong> -90px desde la parte superior del título</li>
                                <li><strong>Tamaño de fuente:</strong> 22px (desktop), 20px (tablet), 18px (móvil)</li>
                                <li><strong>Línea decorativa:</strong> 2px de altura, 50px de ancho, color blanco</li>
                                <li><strong>Color de fondo:</strong> #f2f (magenta/rosa)</li>
                                <li><strong>Z-index del ancla:</strong> -10000000 (no interfiere con otros elementos)</li>
                            </ul>
                        </div>

                        <div className="responsive-section">
                            <p className="responsive-title">Comportamiento responsivo:</p>
                            <ul className="responsive-list">
                                <li><strong>Pantallas 768px (Desktop):</strong> Altura 150px, texto 22px</li>
                                <li><strong>Pantallas ≤ 768px (Tablet):</strong> Altura 100px, texto 20px</li>
                                <li><strong>Pantallas ≤ 500px (Móvil):</strong> Altura 80px, texto 18px</li>
                                <li><strong>El elemento de ancla</strong> se mantiene siempre 90px arriba del título</li>
                                <li><strong>La línea decorativa</strong> se mantiene proporcional en todos los tamaños</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Ejemplo con ID para Navegación</h3>
                    <p className="component-description">
                        Demostración del componente con ID para navegación por anclas. El elemento invisible 
                        se posiciona 90px arriba del título para compensar headers fijos.
                    </p>

                    <div className="component-preview">
                        <SimpleTitle 
                            titulo="Título con Navegación por Anclas" 
                            id="titulo-navegacion"
                        />
                    </div>

                    <div className="anchor-demo">
                        <p><strong>Prueba la navegación:</strong></p>
                        <a href="#titulo-navegacion" className="anchor-link">
                            🔗 Ir al título con navegación
                        </a>
                        <p className="anchor-note">
                            <em>Nota: Al hacer clic en el enlace, la página se desplazará al título, 
                            posicionándose 90px arriba para dejar espacio para headers fijos.</em>
                        </p>
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Ejemplo con Clase Personalizada</h3>
                    <p className="component-description">
                        Demostración de cómo personalizar el componente usando la prop className.
                    </p>

                    <div className="component-preview">
                        <SimpleTitle 
                            titulo="Título Personalizado" 
                            className="titulo-custom-demo"
                        />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">CSS personalizado aplicado:</p>
                        <div className="code-block">
                            <code className="code-text">
{`.titulo-custom-demo {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.titulo-custom-demo label {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 26px !important;
}

.titulo-custom-demo label::after {
    background: linear-gradient(90deg, #fff, transparent);
    width: 80px;
}`}
                            </code>
                        </div>
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Casos de Uso Comunes</h3>
                    <p className="component-description">
                        Ejemplos de diferentes contextos donde el componente SimpleTitle es útil.
                    </p>

                    <div className="use-cases">
                        <div className="use-case">
                            <h4>1. Headers de Sección</h4>
                            <div className="use-case-preview">
                                <SimpleTitle titulo="Nuestros Servicios" />
                            </div>
                            <p>Ideal para separar secciones principales en páginas web.</p>
                        </div>

                        <div className="use-case">
                            <h4>2. Títulos de Artículos</h4>
                            <div className="use-case-preview">
                                <SimpleTitle titulo="Artículo Principal" id="articulo" />
                            </div>
                            <p>Perfecto para destacar títulos de contenido con navegación.</p>
                        </div>

                        <div className="use-case">
                            <h4>3. Divisores de Contenido</h4>
                            <div className="use-case-preview">
                                <SimpleTitle titulo="Antes y Después" />
                            </div>
                            <p>Útil para crear separaciones visuales entre diferentes tipos de contenido.</p>
                        </div>
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Integración con Otros Componentes</h3>
                    <p className="component-description">
                        El SimpleTitle se integra perfectamente con los componentes TwoColumns y ThreeColumns 
                        a través de su prop <code className="inline-code">title</code>.
                    </p>

                    <div className="integration-example">
                        <div className="code-block">
                            <code className="code-text">
{`// El SimpleTitle se usa automáticamente dentro de TwoColumns/ThreeColumns
<TwoColumns
    title="Mi Sección"  // Esto renderiza un SimpleTitle internamente
    titleId="mi-seccion"
    titleClassName="titulo-especial"
    left={<div>Contenido izquierdo</div>}
    right={<div>Contenido derecho</div>}
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="integration-note">
                        <p><strong>💡 Consejo:</strong> Cuando uses TwoColumns o ThreeColumns con la prop <code className="inline-code">title</code>, 
                        internamente se renderiza un SimpleTitle con las props <code className="inline-code">titleId</code> y 
                        <code className="inline-code">titleClassName</code> que puedes personalizar.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SimpleTitleDocumentation