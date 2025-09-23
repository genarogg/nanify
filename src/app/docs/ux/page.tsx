"use client"

import type React from "react"
import { A } from "@/components/nano"
import { Icon } from "@/components/ux"
import {
  ArrowRight,
  Palette,
  MousePointer,
  FileText,
  List,
  Layers,
  Upload,
  Loader,
  MousePointerClick,
} from "lucide-react" // Added MousePointerClick
import "./styles.css"

// Tipo para la información de cada ruta
interface RouteInfo {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

// Componente reutilizable para las cards
interface RouteCardProps {
  route: RouteInfo
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  return (
    <div className="route-card">
      <div className="route-icon">
        <Icon icon={route.icon} />
      </div>
      <div className="route-content">
        <h3 className="route-title">{route.title}</h3>
        <p className="route-description">{route.description}</p>
        <A href={route.href} className="route-link">
          Ver componente <Icon icon={<ArrowRight size={16} />} />
        </A>
      </div>
    </div>
  )
}

// Sección reutilizable
interface SectionProps {
  title: string
  routes: RouteInfo[]
}

const Section: React.FC<SectionProps> = ({ title, routes }) => {
  return (
    <section className="documentation-section">
      <h2 className="section-title">{title}</h2>
      <div className="routes-grid">
        {routes.map((route, index) => (
          <RouteCard key={index} route={route} />
        ))}
      </div>
    </section>
  )
}

type RouteProps = {}

const Routes: React.FC<RouteProps> = () => {
  // Configuración de todas las secciones y rutas
  const sections = [
    {
      title: "Componentes de Formulario",
      routes: [
        {
          icon: <FileText size={32} />,
          title: "Input",
          description: "Campos de entrada con validación, iconos y diferentes estados visuales.",
          href: "/ux/input",
        },
        {
          icon: <List size={32} />,
          title: "Select",
          description: "Componente de selección múltiple y simple con etiquetas y búsqueda.",
          href: "/ux/select",
        },
        {
          icon: <FileText size={32} />,
          title: "Textarea",
          description: "Área de texto multilínea con contador de caracteres y validación.",
          href: "/ux/textarea",
        },
        {
          icon: <List size={32} />,
          title: "Input List",
          description: "Lista dinámica de elementos con funcionalidad de agregar y eliminar.",
          href: "/ux/input-list",
        },
        {
          icon: <Upload size={32} />,
          title: "Input File",
          description: "Carga de archivos con arrastrar y soltar, validación y vista previa.",
          href: "/ux/input-file",
        },
      ],
    },
    {
      title: "Componentes de Interacción", // New section for interaction components
      routes: [
        {
          icon: <MousePointerClick size={32} />, // Icon for buttons
          title: "Botones",
          description: "Colección de botones interactivos con diversos estilos y animaciones.",
          href: "/ux/btns",
        },
        {
          icon: <Layers size={32} />,
          title: "Tabs",
          description: "Sistema de pestañas con animaciones fluidas y contenido dinámico.",
          href: "/ux/tabs",
        },
        {
          icon: <MousePointer size={32} />,
          title: "Modal",
          description: "Ventanas modales personalizables con diferentes tamaños y estilos.",
          href: "/ux/modal",
        },
      ],
    },
    {
      title: "Componentes de Visualización",
      routes: [
        {
          icon: <Palette size={32} />,
          title: "Badge",
          description: "Etiquetas para mostrar estados, categorías y información destacada.",
          href: "/ux/badge",
        },
      ],
    },
    {
      title: "Componentes de Estado",
      routes: [
        {
          icon: <Loader size={32} />,
          title: "Spinner",
          description: "Indicador de carga animado con diferentes tamaños y colores.",
          href: "/ux/spinner",
        },
      ],
    },
    {
      title: "Componentes de Utilidad",
      routes: [
        {
          icon: <Palette size={32} />,
          title: "Icon",
          description: "Wrapper para iconos con diferentes tamaños, colores y animaciones.",
          href: "/ux/icon",
        },
      ],
    },
  ]

  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1 className="documentation-title">Componentes UX de la Aplicación</h1>
        <p className="documentation-description">
          Explora todos los componentes de experiencia de usuario disponibles en la biblioteca UX.
        </p>
      </header>

      {sections.map((section, index) => (
        <Section key={index} title={section.title} routes={section.routes} />
      ))}
    </div>
  )
}

export default Routes
