"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Input } from "@/components/ux"
import { User, Mail, Lock, Phone, Calendar, DollarSign, Search, Globe } from "lucide-react"
import "./styles.css"

export default function InputPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    date: "",
    amount: "",
    search: "",
    website: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const inputRef = useRef<any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es requerida"
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      alert("Formulario enviado correctamente!")
    }
  }

  const focusFirstInput = () => {
    inputRef.current?.focus()
  }

  const clearFirstInput = () => {
    inputRef.current?.setValue("")
  }

  return (
    <div className="input-demo-container">
      <header className="input-demo-header">
        <h1>📝 Input Component</h1>
        <p>Componente de entrada de datos con validación, iconos y diferentes estados</p>
      </header>

      {/* Tipos de Input */}
      <section className="input-demo-section">
        <h2>🎯 Tipos de Input</h2>
        <div className="input-types-grid">
          <div className="input-example">

            <Input
              ref={inputRef}
              name="name"
              type="text"
              placeholder="Nombre completo"
              icon={<User size={18} />}
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>

          <div className="input-example">

            <Input
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              icon={<Mail size={18} />}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className="input-example">
            <Input
              name="password"
              type="password"
              placeholder="Contraseña"
              icon={<Lock size={18} />}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          <div className="input-example">
            <Input
              name="phone"
              type="tel"
              placeholder="Número de teléfono"
              icon={<Phone size={18} />}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-example">
            <Input
              name="date"
              type="date"
              placeholder="Seleccionar fecha"
              icon={<Calendar size={18} />}
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="input-example">
            <Input
              name="amount"
              type="number"
              placeholder="Cantidad"
              icon={<DollarSign size={18} />}
              value={formData.amount}
              onChange={handleChange}
              min={0}
              max={1000}
            />
          </div>
        </div>
      </section>

      {/* Estados del Input */}
      <section className="input-demo-section">
        <h2>🎨 Estados del Input</h2>
        <div className="input-states-grid">
          <div className="input-example">
            <Input name="normal" type="text" placeholder="Input normal" icon={<Search size={18} />} />
          </div>

          <div className="input-example">
            <Input
              name="error"
              type="text"
              placeholder="Input con error"
              icon={<Mail size={18} />}
              error="Este campo es requerido"
            />
          </div>

          <div className="input-example">
            abi
            <Input
              name="disabled"
              type="text"
              placeholder="Input deshabilitado"
              icon={<User size={18} />}
              disabled
              value="Valor deshabilitado"
            />
          </div>

          <div className="input-example">
            <Input
              name="required"
              type="text"
              placeholder="Campo requerido"
              icon={<Globe size={18} />}
              required
              label="Sitio web"
            />
          </div>
          <div className="input-example">

            <Input name="fixed" type="text" hasContentState={true} placeholder="placeholder fixed" icon={<Search size={18} />} />
          </div>
        </div>
      </section>

      {/* Configuraciones de Icono */}
      <section className="input-demo-section">
        <h2>🎭 Configuraciones de Icono</h2>
        <div className="icon-configs-grid">
          <div className="input-example">
            <Input
              name="fixed-icon"
              type="text"
              placeholder="Icono siempre visible"
              icon={<User size={18} />}
              iconFixed={true}
            />
          </div>

          <div className="input-example">
            o en Place
            <Input
              name="placeholder-icon"
              type="text"
              placeholder="Icono en placeholder"
              icon={<Search size={18} />}
              iconFixed={false}
            />
          </div>

          <div className="input-example">
            <Input name="no-icon" type="text" placeholder="Sin icono" />
          </div>
        </div>
      </section>

      {/* Formulario de Ejemplo */}
      <section className="input-demo-section">
        <h2>📋 Formulario de Ejemplo</h2>
        <form onSubmit={handleSubmit} className="example-form">
          <div className="form-row">
            <Input
              name="name"
              type="text"
              placeholder="Nombre completo"
              icon={<User size={18} />}
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
              label="Nombre"
            />
          </div>

          <div className="form-row">
            <Input
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              icon={<Mail size={18} />}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              label="Correo Electrónico"
            />
          </div>

          <div className="form-row">
            <Input
              name="password"
              type="password"
              placeholder="Contraseña"
              icon={<Lock size={18} />}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              label="Contraseña"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Enviar Formulario
            </button>
            <button type="button" onClick={focusFirstInput} className="focus-btn">
              Enfocar Primer Input
            </button>
            <button type="button" onClick={clearFirstInput} className="clear-btn">
              Limpiar Primer Input
            </button>
          </div>
        </form>
      </section>

      {/* Código de Ejemplo */}
      <section className="input-demo-section">
        <h2>💻 Ejemplos de Código</h2>

        <div className="code-examples">
          <div className="code-example">
            <h4>Input Básico</h4>
            <div className="code-block">
              <code>{`<Input
  name="username"
  type="text"
  placeholder="Nombre de usuario"
  icon={<User size={18} />}
  value={value}
  onChange={handleChange}
/>`}</code>
            </div>
          </div>

          <div className="code-example">
            <h4>Input con Validación</h4>
            <div className="code-block">
              <code>{`<Input
  name="email"
  type="email"
  placeholder="correo@ejemplo.com"
  icon={<Mail size={18} />}
  value={email}
  onChange={handleChange}
  error={errors.email}
  required
  label="Correo Electrónico"
/>`}</code>
            </div>
          </div>

          <div className="code-example">
            <h4>Usando Ref</h4>
            <div className="code-block">
              <code>{`const inputRef = useRef<InputRef>(null)

// Enfocar el input
inputRef.current?.focus()

// Obtener el valor
const value = inputRef.current?.getValue()

// Establecer un valor
inputRef.current?.setValue("nuevo valor")`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="input-demo-section">
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
                  <code>name</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Nombre del input (requerido)</td>
              </tr>
              <tr>
                <td>
                  <code>type</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Tipo de input (text, email, password, etc.)</td>
              </tr>
              <tr>
                <td>
                  <code>placeholder</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Texto de placeholder</td>
              </tr>
              <tr>
                <td>
                  <code>icon</code>
                </td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>Icono a mostrar</td>
              </tr>
              <tr>
                <td>
                  <code>iconFixed</code>
                </td>
                <td>boolean</td>
                <td>false</td>
                <td>Si el icono es fijo o se mueve con el placeholder</td>
              </tr>
              <tr>
                <td>
                  <code>value</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Valor controlado del input</td>
              </tr>
              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>function</td>
                <td>-</td>
                <td>Función llamada al cambiar el valor</td>
              </tr>
              <tr>
                <td>
                  <code>error</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Mensaje de error a mostrar</td>
              </tr>
              <tr>
                <td>
                  <code>label</code>
                </td>
                <td>string</td>
                <td>-</td>
                <td>Etiqueta del input</td>
              </tr>
              <tr>
                <td>
                  <code>required</code>
                </td>
                <td>boolean</td>
                <td>false</td>
                <td>Si el campo es requerido</td>
              </tr>
              <tr>
                <td>
                  <code>disabled</code>
                </td>
                <td>boolean</td>
                <td>false</td>
                <td>Si el input está deshabilitado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Métodos del Ref */}
      <section className="input-demo-section">
        <h2>🔧 Métodos del Ref</h2>

        <div className="ref-methods">
          <div className="method-card">
            <h4>focus()</h4>
            <p>Enfoca el input programáticamente</p>
            <div className="code-block">
              <code>inputRef.current?.focus()</code>
            </div>
          </div>

          <div className="method-card">
            <h4>blur()</h4>
            <p>Quita el foco del input</p>
            <div className="code-block">
              <code>inputRef.current?.blur()</code>
            </div>
          </div>

          <div className="method-card">
            <h4>getValue()</h4>
            <p>Obtiene el valor actual del input</p>
            <div className="code-block">
              <code>const value = inputRef.current?.getValue()</code>
            </div>
          </div>

          <div className="method-card">
            <h4>setValue(value)</h4>
            <p>Establece un valor en el input</p>
            <div className="code-block">
              <code>inputRef.current?.setValue("nuevo valor")</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
