"use client"

import type React from "react"
import ThreeColumns from "@/components/sections/column/ThreeColumns"
import "./styles.css"

type ThreeColumnsDocumentationProps = {}

const ThreeColumnsDocumentation: React.FC<ThreeColumnsDocumentationProps> = () => {
    return (
        <div className="three-columns-docs-container">
            <header className="three-columns-docs-header">
                <h1 className="three-columns-docs-title">Documentación - ThreeColumns</h1>
                <p className="three-columns-docs-description">
                    Documentación completa del componente ThreeColumns para crear layouts de tres columnas responsivos y adaptativos.
                </p>
            </header>

            <section className="three-columns-docs-section">
                <h2 className="section-title">Componente ThreeColumns</h2>

                <div className="component-card">
                    <h3 className="component-title">ThreeColumns Layout</h3>
                    <p className="component-description">
                        Componente avanzado para crear layouts de tres columnas con comportamiento responsivo inteligente 
                        que se adapta automáticamente a diferentes tamaños de pantalla.
                    </p>

                    <div className="component-preview">
                        <ThreeColumns
                            title="Ejemplo de Tres Columnas"
                            left={
                                <div>
                                    <h4>Columna Izquierda</h4>
                                    <p>Contenido principal de la izquierda. Siempre visible en todos los tamaños de pantalla.</p>
                                </div>
                            }
                            centerLeft={
                                <div>
                                    <h4>Centro Izquierda</h4>
                                    <p>Segunda columna que se mantiene visible en la mayoría de los breakpoints.</p>
                                </div>
                            }
                            centerRight={
                                <div>
                                    <h4>Centro Derecha</h4>
                                    <p>Tercera columna que también se mantiene visible en pantallas medianas y grandes.</p>
                                </div>
                            }
                            right={
                                <div>
                                    <h4>Columna Derecha</h4>
                                    <p>Columna adicional que se oculta automáticamente en dispositivos móviles y aparece en tablets.</p>
                                </div>
                            }
                        />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Uso básico del componente:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<ThreeColumns
    title="Mi Layout de Tres Columnas"
    left={<div>Contenido izquierdo</div>}
    centerLeft={<div>Centro izquierdo</div>}
    centerRight={<div>Centro derecho</div>}
    right={<div>Contenido derecho</div>}
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Ejemplo con columnas opcionales:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<ThreeColumns
    title="Layout Flexible"
    left={<div>Siempre presente</div>}
    centerLeft={<div>Principal</div>}
    centerRight={<div>Secondary</div>}
    // right es opcional - se puede omitir
    className="mi-layout-personalizado"
    leftClassName="columna-principal"
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Descripción:</p>
                        <p>
                            El componente <code className="inline-code">ThreeColumns</code> crea un layout complejo de tres columnas
                            con comportamiento responsivo inteligente. Utiliza CSS Grid y media queries para adaptarse automáticamente
                            a diferentes dispositivos y tamaños de pantalla.
                        </p>

                        <div className="features-section">
                            <p className="features-title">Características principales:</p>
                            <ul className="features-list">
                                <li>Layout de tres columnas que se adapta automáticamente a diferentes pantallas</li>
                                <li>Columna derecha que se oculta/muestra según el breakpoint para optimizar el espacio</li>
                                <li>Transiciones suaves entre diferentes layouts responsivos</li>
                                <li>Título opcional centrado que se extiende a través de todas las columnas</li>
                                <li>Clases CSS personalizables para cada columna y elemento</li>
                                <li>Contenido completamente flexible usando React.ReactNode</li>
                                <li>Columnas opcionales - no todas son requeridas</li>
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
                                <span className="props-required">No</span>
                                <span>Contenido para la columna izquierda</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">centerLeft</span>
                                <span className="props-type">React.ReactNode</span>
                                <span className="props-required">No</span>
                                <span>Contenido para la columna centro-izquierda</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">centerRight</span>
                                <span className="props-type">React.ReactNode</span>
                                <span className="props-required">No</span>
                                <span>Contenido para la columna centro-derecha</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">right</span>
                                <span className="props-type">React.ReactNode</span>
                                <span className="props-required">No</span>
                                <span>Contenido para la columna derecha (se oculta en móviles)</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">title</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Título opcional que se extiende sobre todas las columnas</span>
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
                                <span className="props-name">centerLeftClassName</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Clase CSS adicional para la columna centro-izquierda</span>
                            </div>
                            <div className="props-row">
                                <span className="props-name">centerRightClassName</span>
                                <span className="props-type">string</span>
                                <span className="props-required">No</span>
                                <span>Clase CSS adicional para la columna centro-derecha</span>
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
                        </div>

                        <div className="responsive-section">
                            <p className="responsive-title">Comportamiento responsivo avanzado:</p>
                            <ul className="responsive-list">
                                <li><strong>Pantallas  1200px:</strong> Muestra 3 columnas (left, centerLeft, centerRight). La columna right está oculta.</li>
                                <li><strong>Pantallas 769px - 1199px:</strong> Muestra 2 columnas y la columna right se vuelve visible</li>
                                <li><strong>Pantallas  768px:</strong> Se convierte en una sola columna (stack vertical), right se oculta nuevamente</li>
                                <li><strong>Grid adaptativo:</strong> El grid cambia automáticamente su estructura según el breakpoint</li>
                                <li><strong>Título responsivo:</strong> Se adapta para ocupar el span correcto según el número de columnas visibles</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Ejemplo de Layout Parcial</h3>
                    <p className="component-description">
                        Demostración de cómo el componente funciona con solo algunas columnas pobladas.
                    </p>

                    <div className="component-preview">
                        <ThreeColumns
                            title="Layout con Columnas Selectivas"
                            left={
                                <div>
                                    <h4>Navegación</h4>
                                    <ul style={{listStyle: 'none', padding: 0}}>
                                        <li style={{padding: '0.5rem 0'}}>🏠 Inicio</li>
                                        <li style={{padding: '0.5rem 0'}}>📄 Documentos</li>
                                        <li style={{padding: '0.5rem 0'}}>⚙️ Configuración</li>
                                    </ul>
                                </div>
                            }
                            centerLeft={
                                <div>
                                    <h4>Contenido Principal</h4>
                                    <p>Este es el área principal de contenido que siempre será visible y se expande según sea necesario.</p>
                                    <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem'}}>
                                        <strong>Información importante:</strong> Esta sección contiene el contenido más relevante.
                                    </div>
                                </div>
                            }
                            right={
                                <div>
                                    <h4>Sidebar Adicional</h4>
                                    <p>Esta columna aparece y desaparece según el tamaño de pantalla disponible.</p>
                                    <div style={{background: '#fef3c7', padding: '0.75rem', borderRadius: '0.375rem', fontSize: '0.9rem'}}>
                                        <strong>Tip:</strong> Redimensiona la ventana para ver cómo se oculta/muestra esta columna.
                                    </div>
                                </div>
                            }
                            leftClassName="sidebar-nav"
                            centerLeftClassName="main-content"
                            rightClassName="extra-sidebar"
                        />
                    </div>
                </div>

                <div className="component-card">
                    <h3 className="component-title">Ejemplo Dashboard</h3>
                    <p className="component-description">
                        Ejemplo práctico de uso en un dashboard con métricas y widgets.
                    </p>

                    <div className="component-preview">
                        <ThreeColumns
                            title="Dashboard Analytics"
                            left={
                                <div>
                                    <h4>Métricas Rápidas</h4>
                                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                        <div style={{background: '#dcfce7', padding: '1rem', borderRadius: '0.5rem'}}>
                                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#166534'}}>1,234</div>
                                            <div style={{fontSize: '0.9rem', color: '#166534'}}>Usuarios Activos</div>
                                        </div>
                                        <div style={{background: '#dbeafe', padding: '1rem', borderRadius: '0.5rem'}}>
                                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af'}}>€45,678</div>
                                            <div style={{fontSize: '0.9rem', color: '#1e40af'}}>Ingresos</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            centerLeft={
                                <div>
                                    <h4>Gráfico Principal</h4>
                                    <div style={{background: '#f8fafc', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center'}}>
                                        <div style={{fontSize: '3rem'}}>📊</div>
                                        <p>Aquí iría el gráfico principal de analytics</p>
                                    </div>
                                </div>
                            }
                            centerRight={
                                <div>
                                    <h4>Actividad Reciente</h4>
                                    <div style={{fontSize: '0.9rem'}}>
                                        <div style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>
                                            <strong>Usuario123</strong> completó una acción
                                        </div>
                                        <div style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>
                                            <strong>AdminUser</strong> actualizó configuración
                                        </div>
                                        <div style={{padding: '0.5rem 0'}}>
                                            <strong>GuestUser</strong> se registró
                                        </div>
                                    </div>
                                </div>
                            }
                            right={
                                <div>
                                    <h4>Notificaciones</h4>
                                    <div style={{fontSize: '0.85rem'}}>
                                        <div style={{background: '#fef2f2', padding: '0.75rem', borderRadius: '0.375rem', marginBottom: '0.5rem'}}>
                                            <strong>⚠️ Alerta:</strong> Servidor con alta carga
                                        </div>
                                        <div style={{background: '#f0fdf4', padding: '0.75rem', borderRadius: '0.375rem'}}>
                                            <strong>✅ Éxito:</strong> Backup completado
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThreeColumnsDocumentation