"use client"

import { useState } from "react"
import { InputList } from "@/components/ux"
import "./styles.css"

interface InputListItem {
  text: string
  active: boolean
}

export default function InputListPage() {
  const [items1, setItems1] = useState<InputListItem[]>([
    { text: "Item 1", active: true },
    { text: "Item 2", active: true }
  ])
  const [items2, setItems2] = useState<InputListItem[]>([])
  const [items3, setItems3] = useState<InputListItem[]>([
    { text: "React", active: true },
    { text: "Vue", active: false },
    { text: "Angular", active: true }
  ])
  const [items4, setItems4] = useState<InputListItem[]>([])

  return (
    <div className="component-documentation">
      <header className="component-header">
        <h1>Input List</h1>
        <p>Componente para crear y gestionar listas dinámicas de elementos con funcionalidad de agregar, eliminar y editar.</p>
      </header>

      <section className="component-section">
        <h2>Lista Básica</h2>
        <div className="example-container">
          <InputList
            title="Lista de tareas"
            items={items1}
            onChange={setItems1}
            placeholder="Agregar nuevo elemento..."
          />
        </div>
        <div className="code-block">
          <pre>{`<InputList
  title="Lista de tareas"
  items={items1}
  onChange={setItems1}
  placeholder="Agregar nuevo elemento..."
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Lista Vacía</h2>
        <div className="example-container">
          <InputList
            title="Lista vacía"
            items={items2}
            onChange={setItems2}
            placeholder="Agregar primer elemento..."
            emptyMessage="No hay elementos en la lista"
          />
        </div>
        <div className="code-block">
          <pre>{`<InputList
  title="Lista vacía"
  items={items2}
  onChange={setItems2}
  placeholder="Agregar primer elemento..."
  emptyMessage="No hay elementos en la lista"
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Lista con Límite</h2>
        <div className="example-container">
          <InputList
            title="Frameworks favoritos (máximo 5)"
            items={items3}
            onChange={setItems3}
            placeholder="Agregar framework..."
            maxItems={5}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputList
  title="Frameworks favoritos (máximo 5)"
  items={items3}
  onChange={setItems3}
  placeholder="Agregar framework..."
  maxItems={5}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Lista con Opciones Avanzadas</h2>
        <div className="example-container">
          <InputList
            title="Lista avanzada"
            items={items4}
            onChange={setItems4}
            placeholder="Agregar elemento..."
            allowEdit={true}
            showActiveToggle={true}
            maxItems={10}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputList
  title="Lista avanzada"
  items={items4}
  onChange={setItems4}
  placeholder="Agregar elemento..."
  allowEdit={true}
  showActiveToggle={true}
  maxItems={10}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Lista Deshabilitada</h2>
        <div className="example-container">
          <InputList
            title="Lista deshabilitada"
            items={[
              { text: "Item no editable", active: true },
              { text: "Otro item", active: false }
            ]}
            onChange={() => {}}
            placeholder="No se puede agregar..."
            disabled={true}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputList
  title="Lista deshabilitada"
  items={[
    { text: "Item no editable", active: true },
    { text: "Otro item", active: false }
  ]}
  onChange={() => {}}
  placeholder="No se puede agregar..."
  disabled={true}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Propiedades</h2>
        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo</th>
                <th>Por defecto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>-</td>
                <td>Título de la lista (requerido)</td>
              </tr>
              <tr>
                <td>items</td>
                <td>InputListItem[]</td>
                <td>[]</td>
                <td>Array de elementos de la lista con estructura {`{text: string, active: boolean}`}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>function</td>
                <td>-</td>
                <td>Función que se ejecuta al cambiar los elementos (requerido)</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>"Agregar nuevo elemento..."</td>
                <td>Texto de placeholder del input</td>
              </tr>
              <tr>
                <td>maxItems</td>
                <td>number</td>
                <td>-</td>
                <td>Número máximo de elementos</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Deshabilita la interacción con el componente</td>
              </tr>
              <tr>
                <td>emptyMessage</td>
                <td>string</td>
                <td>"No hay elementos agregados."</td>
                <td>Mensaje cuando la lista está vacía</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>""</td>
                <td>Clase CSS adicional para el contenedor</td>
              </tr>
              <tr>
                <td>allowEdit</td>
                <td>boolean</td>
                <td>true</td>
                <td>Permite editar elementos existentes</td>
              </tr>
              <tr>
                <td>showActiveToggle</td>
                <td>boolean</td>
                <td>true</td>
                <td>Muestra checkbox para activar/desactivar elementos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="component-section">
        <h2>Interfaz InputListItem</h2>
        <div className="code-block">
          <pre>{`interface InputListItem {
  text: string      // Texto del elemento
  active: boolean   // Estado activo del elemento
}`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Características</h2>
        <div className="example-container">
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>Agregar elementos:</strong> Escribe en el input y presiona Enter o haz clic en el botón +</li>
            <li><strong>Editar elementos:</strong> Haz clic en el texto del elemento para editarlo (si allowEdit es true)</li>
            <li><strong>Eliminar elementos:</strong> Haz clic en el botón X junto al elemento</li>
            <li><strong>Activar/Desactivar:</strong> Usa el checkbox para cambiar el estado activo (si showActiveToggle es true)</li>
            <li><strong>Límite de elementos:</strong> Se puede establecer un número máximo de elementos</li>
            <li><strong>Validación:</strong> Previene elementos duplicados automáticamente</li>
          </ul>
        </div>
      </section>
    </div>
  )
}