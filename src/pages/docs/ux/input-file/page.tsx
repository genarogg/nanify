"use client"

import { useState } from "react"
import { InputFile } from "@/components/ux"
import { FileText, Image, File } from "lucide-react"
import "./styles.css"

export default function InputFilePage() {
  const [file1, setFile1] = useState<File | null>(null)
  const [file2, setFile2] = useState<File | null>(null)
  const [file3, setFile3] = useState<File | null>(null)
  const [file4, setFile4] = useState<File | null>(null)

  return (
    <div className="component-documentation">
      <header className="component-header">
        <h1>Input File</h1>
        <p>Componente de carga de archivos con soporte para arrastrar y soltar, vista previa de imágenes y validación.</p>
      </header>

      <section className="component-section">
        <h2>Carga Simple de Imagen</h2>
        <div className="example-container">
          <InputFile
            name="image-upload"
            value={file1}
            onChange={setFile1}
            accept="image/*"
            placeholder="Arrastra una imagen aquí o haz clic para seleccionar"
            label="Seleccionar imagen"
            icon={<Image size={16} />}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  name="image-upload"
  value={file1}
  onChange={setFile1}
  accept="image/*"
  placeholder="Arrastra una imagen aquí o haz clic para seleccionar"
  label="Seleccionar imagen"
  icon={<Image size={16} />}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Documentos PDF</h2>
        <div className="example-container">
          <InputFile
            name="document-upload"
            value={file2}
            onChange={setFile2}
            accept=".pdf,.doc,.docx"
            placeholder="Selecciona un documento"
            label="Documento requerido"
            required={true}
            maxSize="Máximo 5MB"
            icon={<FileText size={16} />}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  name="document-upload"
  value={file2}
  onChange={setFile2}
  accept=".pdf,.doc,.docx"
  placeholder="Selecciona un documento"
  label="Documento requerido"
  required={true}
  maxSize="Máximo 5MB"
  icon={<FileText size={16} />}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Cualquier Tipo de Archivo</h2>
        <div className="example-container">
          <InputFile
            name="any-file"
            value={file3}
            onChange={setFile3}
            placeholder="Cualquier tipo de archivo"
            label="Archivo general"
            maxSize="Máximo 10MB"
            icon={<File size={16} />}
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  name="any-file"
  value={file3}
  onChange={setFile3}
  placeholder="Cualquier tipo de archivo"
  label="Archivo general"
  maxSize="Máximo 10MB"
  icon={<File size={16} />}
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Campo Deshabilitado</h2>
        <div className="example-container">
          <InputFile
            name="disabled-upload"
            value={file4}
            onChange={setFile4}
            disabled={true}
            placeholder="Este campo está deshabilitado"
            label="Campo deshabilitado"
          />
        </div>
        <div className="code-block">
          <pre>{`<InputFile
  name="disabled-upload"
  value={file4}
  onChange={setFile4}
  disabled={true}
  placeholder="Este campo está deshabilitado"
  label="Campo deshabilitado"
/>`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Estado de los Archivos</h2>
        <div className="example-container">
          <div style={{ marginBottom: "1rem" }}>
            <h4>Archivos seleccionados:</h4>
            <div style={{ display: "grid", gap: "8px", marginTop: "12px" }}>
              <div>
                <strong>Imagen:</strong> {file1 ? `${file1.name} (${(file1.size / 1024).toFixed(2)} KB)` : "No seleccionada"}
              </div>
              <div>
                <strong>Documento:</strong> {file2 ? `${file2.name} (${(file2.size / 1024).toFixed(2)} KB)` : "No seleccionado"}
              </div>
              <div>
                <strong>Archivo general:</strong> {file3 ? `${file3.name} (${(file3.size / 1024).toFixed(2)} KB)` : "No seleccionado"}
              </div>
            </div>
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
                <td>name</td>
                <td>string</td>
                <td>-</td>
                <td>Nombre del campo de entrada (requerido)</td>
              </tr>
              <tr>
                <td>value</td>
                <td>File | null</td>
                <td>null</td>
                <td>Archivo seleccionado</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>(file: File | null) = void</td>
                <td>-</td>
                <td>Función que se ejecuta al cambiar el archivo</td>
              </tr>
              <tr>
                <td>accept</td>
                <td>string</td>
                <td>".pdf,.jpg,.jpeg,.png,.gif,.webp"</td>
                <td>Tipos de archivo aceptados</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>"Haz clic para seleccionar un archivo"</td>
                <td>Texto de placeholder</td>
              </tr>
              <tr>
                <td>required</td>
                <td>boolean</td>
                <td>false</td>
                <td>Campo requerido</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Deshabilitar el componente</td>
              </tr>
              <tr>
                <td>maxSize</td>
                <td>string</td>
                <td>"Máximo 10MB"</td>
                <td>Texto indicativo del tamaño máximo</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>-</td>
                <td>Etiqueta del campo</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>React.ReactNode</td>
                <td>&lt;FileText size={16} /&gt;</td>
                <td>Icono para la etiqueta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}