"use client"

import type React from "react"
import LokiLogin from "@/components/form/form-loki"
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

            {/* =================== SECCIÓN FORM LOKI =================== */}
            <section className="documentation-section">
                <h2 className="section-title">Components</h2>

                <div className="component-card">
                    <h3 className="component-title">FormLoki</h3>
                    <p className="component-description">
                        El componente <code className="inline-code">LokiLogin</code> es un contenedor de formularios de autenticación 
                        que integra **Login, Registro y Recuperación de Contraseña**, además de soporte para inicio de sesión social.
                    </p>

                    <div className="component-preview">
                        <LokiLogin />
                    </div>

                    <div className="usage-section">
                        <p className="usage-title">Uso del componente:</p>
                        <div className="code-block">
                            <code className="code-text">
{`<LokiLogin 
  register={true} 
  reset={true} 
  social={true} 
/>`}
                            </code>
                        </div>
                    </div>

                    <div className="description-section">
                        <p className="usage-title">Descripción:</p>
                        <p>
                            <code className="inline-code">LokiLogin</code> centraliza los diferentes formularios de autenticación en una sola tarjeta dinámica. 
                            Permite cambiar de estado entre <strong>Login</strong>, <strong>Registro</strong> y <strong>Reset Password</strong> 
                            de manera fluida, aplicando animaciones CSS controladas por la propiedad <code>formState</code>.
                        </p>

                        <p className="props-title">Props:</p>
                        <ul className="props-list">
                            <li>
                                <span className="props-name">register</span> (boolean):  
                                Habilita o deshabilita la vista de <strong>Registro</strong>.  
                                <em>Valor por defecto: true</em>.
                            </li>
                            <li>
                                <span className="props-name">reset</span> (boolean):  
                                Habilita o deshabilita la vista de <strong>Recuperación de Contraseña</strong>.  
                                <em>Valor por defecto: true</em>.
                            </li>
                            <li>
                                <span className="props-name">social</span> (boolean):  
                                Muestra botones de autenticación con proveedores sociales (Google, Facebook, etc.).  
                                <em>Valor por defecto: true</em>.
                            </li>
                        </ul>
                    </div>

                    <div className="extra-section">
                        <p className="usage-title">Dependencias:</p>
                        <ul className="props-list">
                            <li>
                                <code>react-google-recaptcha-v4</code>: Implementa seguridad anti-bots mediante reCAPTCHA.
                            </li>
                            <li>
                                <code>@env</code>: Manejo de variables de entorno, en particular <code>RECAPTCHA_KEY</code>.
                            </li>
                        </ul>
                    </div>

                    <div className="extra-section">
                        <p className="usage-title">Estructura interna:</p>
                        <ul className="props-list">
                            <li><strong>Login</strong>: Formulario principal de inicio de sesión.</li>
                            <li><strong>Register</strong>: Formulario de registro de usuario.</li>
                            <li><strong>ResetPassWord</strong>: Formulario de recuperación de contraseña.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Documentation
