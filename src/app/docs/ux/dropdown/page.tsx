"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ux"

function DropdownDemo() {
  const handleEdit = () => {
    alert("Editar seleccionado")
  }

  const handleDelete = () => {
    alert("Eliminar seleccionado")
  }

  const handleShare = () => {
    alert("Compartir seleccionado")
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Ejemplo Básico</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>Opciones</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleEdit}>✏️ Editar</DropdownMenuItem>
            <DropdownMenuItem onClick={handleShare}>📤 Compartir</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>🗑️ Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Con Trigger Personalizado</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Menú Personalizado
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => console.log("Perfil")}>👤 Mi Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Configuración")}>⚙️ Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log("Cerrar sesión")}>🚪 Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Múltiples Dropdowns</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <DropdownMenu>
            <DropdownMenuTrigger>Archivo</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => console.log("Nuevo")}>📄 Nuevo</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Abrir")}>📂 Abrir</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Guardar")}>💾 Guardar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>Editar</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => console.log("Deshacer")}>↶ Deshacer</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Rehacer")}>↷ Rehacer</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log("Copiar")}>📋 Copiar</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Pegar")}>📄 Pegar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Trigger de Icono con Contenido Grande</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="dropdown-trigger icon-only"
              style={{
                background: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                width: "40px",
                height: "40px",
                padding: "8px",
              }}
            >
              ⚙️
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="large">
            <div className="dropdown-large-content">
              <h3>Panel de Control</h3>
              <p>Gestiona tu cuenta y configuraciones desde aquí.</p>

              <div className="stats">
                <div className="stat">
                  <span className="stat-number">1,234</span>
                  <div className="stat-label">Visitas</div>
                </div>
                <div className="stat">
                  <span className="stat-number">56</span>
                  <div className="stat-label">Proyectos</div>
                </div>
                <div className="stat">
                  <span className="stat-number">89%</span>
                  <div className="stat-label">Completado</div>
                </div>
              </div>

              <div className="actions">
                <button className="btn btn-primary" onClick={() => console.log("Ver dashboard")}>
                  Ver Dashboard
                </button>
                <button className="btn btn-secondary" onClick={() => console.log("Configurar")}>
                  Configurar
                </button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default DropdownDemo