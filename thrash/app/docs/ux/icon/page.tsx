"use client"
import { Icon } from "@/components/ux"
import {
  Heart,
  Star,
  Home,
  User,
  Settings,
  Search,
  Mail,
  Phone,
  Calendar,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import "./styles.css"

export default function IconPage() {
  return (
    <div className="component-documentation">
      <header className="component-header">
        <h1>Icon</h1>
        <p>Componente wrapper para iconos con diferentes tamaños, colores y estilos.</p>
      </header>

      <section className="component-section">
        <h2>Iconos Básicos</h2>
        <div className="example-container">
          <div className="icon-grid">
            <Icon icon={<Heart />} />
            <Icon icon={<Star />} />
            <Icon icon={<Home />} />
            <Icon icon={<User />} />
            <Icon icon={<Settings />} />
            <Icon icon={<Search />} />
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Icon icon={<Heart />} />
<Icon icon={<Star />} />
<Icon icon={<Home />} />
<Icon icon={<User />} />
<Icon icon={<Settings />} />
<Icon icon={<Search />} />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Diferentes Tamaños</h2>
        <div className="example-container">
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div>
              <p>Pequeño (16px)</p>
              <Icon icon={<Heart />} size={16} />
            </div>
            <div>
              <p>Mediano (24px)</p>
              <Icon icon={<Heart />} size={24} />
            </div>
            <div>
              <p>Grande (32px)</p>
              <Icon icon={<Heart />} size={32} />
            </div>
            <div>
              <p>Extra Grande (48px)</p>
              <Icon icon={<Heart />} size={48} />
            </div>
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Icon icon={<Heart />} size={16} />
<Icon icon={<Heart />} size={24} />
<Icon icon={<Heart />} size={32} />
<Icon icon={<Heart />} size={48} />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Diferentes Colores</h2>
        <div className="example-container">
          <div className="icon-grid">
            <Icon icon={<Heart />}  />
            <Icon icon={<Star />}  />
            <Icon icon={<Home />} color="#3498db" />
            <Icon icon={<User />} color="#2ecc71" />
            <Icon icon={<Settings />} color="#9b59b6" />
            <Icon icon={<Search />} color="#34495e" />
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Icon icon={<Heart />}  />
<Icon icon={<Star />} color="#f39c12" />
<Icon icon={<Home />} color="#3498db" />
<Icon icon={<User />} color="#2ecc71" />
<Icon icon={<Settings />} color="#9b59b6" />
<Icon icon={<Search />} color="#34495e" />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Iconos de Acción</h2>
        <div className="example-container">
          <div className="icon-grid">
            <Icon icon={<Plus />} />
            <Icon icon={<Minus />} />
            <Icon icon={<Edit />} />
            <Icon icon={<Trash2 />} />
            <Icon icon={<Download />} />
            <Icon icon={<Upload />} />
            <Icon icon={<Check />} />
            <Icon icon={<X />} />
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Icon icon={<Plus />} />
<Icon icon={<Minus />} />
<Icon icon={<Edit />} />
<Icon icon={<Trash2 />} />
<Icon icon={<Download />} />
<Icon icon={<Upload />} />
<Icon icon={<Check />} />
<Icon icon={<X />} />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Iconos de Navegación</h2>
        <div className="example-container">
          <div className="icon-grid">
            <Icon icon={<ArrowLeft />} />
            <Icon icon={<ArrowRight />} />
            <Icon icon={<Mail />} />
            <Icon icon={<Phone />} />
            <Icon icon={<Calendar />} />
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Icon icon={<ArrowLeft />} />
<Icon icon={<ArrowRight />} />
<Icon icon={<Mail />} />
<Icon icon={<Phone />} />
<Icon icon={<Calendar />} />`}</pre>
        </div>
      </section>

      <section className="component-section">
        <h2>Con Clases Personalizadas</h2>
        <div className="example-container">
          <div className="icon-grid">
            <Icon icon={<Heart />} className="icon-hover" />
            <Icon icon={<Star />} className="icon-rotate" />
            <Icon icon={<Settings />} className="icon-pulse" />
          </div>
        </div>
        <div className="code-block">
          <pre>{`<Icon icon={<Heart />} className="icon-hover" />
<Icon icon={<Star />} className="icon-rotate" />
<Icon icon={<Settings />} className="icon-pulse" />`}</pre>
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
                <td>icon</td>
                <td>ReactElement</td>
                <td>-</td>
                <td>Elemento de icono (ej: de Lucide React)</td>
              </tr>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>24</td>
                <td>Tamaño del icono en píxeles</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>'currentColor'</td>
                <td>Color del icono</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>-</td>
                <td>Clases CSS adicionales</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>function</td>
                <td>-</td>
                <td>Función que se ejecuta al hacer clic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
