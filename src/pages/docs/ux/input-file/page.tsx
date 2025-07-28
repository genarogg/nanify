"use client"

import { useState } from "react"
import { InputFile } from "@/components/ux"
import "./styles.css"

export default function InputFilePage() {
  const [files1, setFiles1] = useState<File[]>([])
  const [files2, setFiles2] = useState<File[]>([])
  const [files3, setFiles3] = useState<File[]>([])

  return (
    <div className="component-documentation">
      <header className="component-header">
        <h1>Input File</h1>
        <p>Componente de carga de archivos con soporte para arrastrar y soltar, múltiples archivos y validación.</p>
      </header>

      <section className="component-section">
        <h2>Carga Simple</h2>
        <div className="example-container">
          <InputFile
            files={files1}
            onFilesChange={setFiles1}
            accept="image/*"
            placeholder="Arrastra una imagen aquí o haz clic para seleccionar"
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  files={files1}
  onFilesChange={setFiles1}
  accept="image/*"
  placeholder="Arrastra una imagen aquí o haz clic para seleccionar"
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Múltiples Archivos</h2>
        <div className="example-container">
          <InputFile
            files={files2}
            onFilesChange={setFiles2}
            multiple={true}
            accept=".pdf,.doc,.docx"
            placeholder="Selecciona múltiples documentos"
            maxFiles={5}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  files={files2}
  onFilesChange={setFiles2}
  multiple={true}
  accept=".pdf,.doc,.docx"
  placeholder="Selecciona múltiples documentos"
  maxFiles={5}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Con Límite de Tamaño</h2>
        <div className="example-container">
          <InputFile
            files={files3}
            onFilesChange={setFiles3}
            maxSize={2 * 1024 * 1024} // 2MB
            placeholder="Archivos hasta 2MB"
            showPreview={true}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  files={files3}
  onFilesChange={setFiles3}
  maxSize={2 * 1024 * 1024} // 2MB
  placeholder="Archivos hasta 2MB"
  showPreview={true}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Estado de los Archivos</h2>
        <div className="example-container">
          <div style={{ marginBottom: "1rem" }}>
            <h4>Archivos seleccionados:</h4>
            {files1.length > 0 ? (
              <ul>
                {files1.map((file, index) => (
                  <li key={index}>
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay archivos seleccionados</p>
            )}
          </div>
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
                <td>files</td>
                <td>File[]</td>
                <td>[]</td>
                <td>Array de archivos seleccionados</td>
              </tr>
              <tr>
                <td>onFilesChange</td>
                <td>function</td>
                <td>-</td>
                <td>Función que se ejecuta al cambiar los archivos</td>
              </tr>
              <tr>
                <td>accept</td>
                <td>string</td>
                <td>-</td>
                <td>Tipos de archivo aceptados</td>
              </tr>
              <tr>
                <td>multiple</td>
                <td>boolean</td>
                <td>false</td>
                <td>Permitir múltiples archivos</td>
              </tr>
              <tr>
                <td>maxFiles</td>
                <td>number</td>
                <td>-</td>
                <td>Número máximo de archivos</td>
              </tr>
              <tr>
                <td>maxSize</td>
                <td>number</td>
                <td>-</td>
                <td>Tamaño máximo por archivo en bytes</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>-</td>
                <td>Texto de placeholder</td>
              </tr>
              <tr>
                <td>showPreview</td>
                <td>boolean</td>
                <td>false</td>
                <td>Mostrar vista previa de imágenes</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Deshabilitar el componente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
