"use client"

import type React from "react"
import { A, Img } from "@nano"
import { Icon } from "@ui"
import { ArrowLeft, ImageIcon, Code, Eye } from "lucide-react"
import { bluorData } from "./data"
import "./styles.css"

type ImgDocProps = {}

const ImgDoc: React.FC<ImgDocProps> = () => {
  const demoImage = "/img/wallpaper/demo-1.jpg"

  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <A href="/" className="back-link">
          <Icon icon={<ArrowLeft size={20} />} />
          Volver al inicio
        </A>
        <h1 className="documentation-title">Componente Img</h1>
        <p className="documentation-description">
          Componente de imagen optimizado con soporte para lazy loading, blur placeholder y contenido superpuesto.
        </p>
      </header>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<Eye size={24} />} />
          Vista Previa
        </h2>

        <div className="preview-container">
          <div className="preview-item">
            <h3>Imagen con contenido superpuesto</h3>
            <Img src={demoImage} blurDataURL={bluorData} width={800} height={400}>
              <div className="overlay-content">
                <h2>Contenido Superpuesto</h2>
                <p>Este texto se muestra sobre la imagen</p>
              </div>
            </Img>
          </div>

          <div className="preview-item">
            <h3>Imagen simple</h3>
            <Img src={demoImage} width={800} height={400} blurDataURL={bluorData} />
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">
          <Icon icon={<Code size={24} />} />
          Uso del Componente
        </h2>

        <div className="code-examples">
          <div className="code-example">
            <h3>Importación</h3>
            <pre className="code-block">
              <code>{`import { Img } from "@nano"`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Imagen con contenido superpuesto</h3>
            <pre className="code-block">
              <code>{`<Img
  src="/img/wallpaper/demo-1.jpg"
  blurDataURL={bluorData}
  width={1900}
  height={1060}
>
  <h1 style={{ color: "#fff" }}>HolaMundo</h1>
</Img>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>Imagen simple</h3>
            <pre className="code-block">
              <code>{`<Img
  src="/img/wallpaper/demo-1.jpg"
  width={1900}
  height={1060}
  blurDataURL={bluorData}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Propiedades</h2>

        <div className="properties-table">
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo</th>
                <th>Requerida</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>src</code>
                </td>
                <td>string</td>
                <td>✅</td>
                <td>URL de la imagen a mostrar</td>
              </tr>
              <tr>
                <td>
                  <code>width</code>
                </td>
                <td>number</td>
                <td>✅</td>
                <td>Ancho de la imagen en píxeles</td>
              </tr>
              <tr>
                <td>
                  <code>height</code>
                </td>
                <td>number</td>
                <td>✅</td>
                <td>Alto de la imagen en píxeles</td>
              </tr>
              <tr>
                <td>
                  <code>blurDataURL</code>
                </td>
                <td>string</td>
                <td>❌</td>
                <td>Data URL base64 para el placeholder blur</td>
              </tr>
              <tr>
                <td>
                  <code>children</code>
                </td>
                <td>ReactNode</td>
                <td>❌</td>
                <td>Contenido a superponer sobre la imagen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Características</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Icon icon={<ImageIcon size={32} />} />
            </div>
            <h3>Lazy Loading</h3>
            <p>Carga optimizada de imágenes para mejorar el rendimiento</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Icon icon={<Eye size={32} />} />
            </div>
            <h3>Blur Placeholder</h3>
            <p>Muestra un placeholder borroso mientras carga la imagen</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Icon icon={<Code size={32} />} />
            </div>
            <h3>Contenido Superpuesto</h3>
            <p>Permite agregar contenido sobre la imagen</p>
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <h2 className="section-title">Notas de Implementación</h2>

        <div className="implementation-notes">
          <div className="note-item">
            <h4>BlurDataURL</h4>
            <p>
              El <code>blurDataURL</code> debe ser una imagen en formato base64 de muy baja resolución que se muestra
              mientras carga la imagen principal. Esto mejora la experiencia del usuario proporcionando una vista previa
              inmediata.
            </p>
          </div>

          <div className="note-item">
            <h4>Contenido Superpuesto</h4>
            <p>
              Cualquier contenido JSX pasado como children se renderizará sobre la imagen. Es útil para títulos, botones
              o cualquier elemento que necesite estar posicionado sobre la imagen.
            </p>
          </div>

          <div className="note-item">
            <h4>Dimensiones</h4>
            <p>
              Las propiedades <code>width</code> y <code>height</code> son necesarias para el correcto funcionamiento
              del lazy loading y para evitar el layout shift.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImgDoc
