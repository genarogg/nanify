import GridWrapper from "@/components/wrapper/grid-wrapper"
import "./styles.css"

export default function Home() {
  return (
    <main className="main">
      <div className="w-full h-screen bg-gray-900 p-4">
        <h1 className="text-white text-2xl mb-4">Demo GridWrapper</h1>

        <div className="space-y-6">
          {/* Ejemplo 1: Grilla básica */}
          <GridWrapper>
            <div className="p-8">
              <h2 className="text-white text-xl mb-4">Grilla Básica</h2>
              <p className="text-gray-300">
                Esta es una grilla con configuración por defecto.
              </p>
            </div>
          </GridWrapper>

          {/* Ejemplo 2: Grilla personalizada */}
          <GridWrapper
            gridColor="rgba(59, 130, 246, 0.4)"
            gridSize={20}
            backgroundColor="#1e1b4b"
        
          >
            <div className="p-8">
              <h2 className="text-white text-xl mb-4">Grilla Personalizada</h2>
              <p className="text-gray-300">
                Grilla azul con cuadrícula más pequeña (20px).
              </p>
              <div className="mt-4 p-4 bg-blue-500 bg-opacity-20 rounded">
                <p className="text-blue-200">Contenido sobre la grilla</p>
              </div>
            </div>
          </GridWrapper>

          {/* Ejemplo 3: Grilla con contenido interactivo */}
          <GridWrapper
            gridColor="rgba(34, 197, 94, 0.3)"
            gridSize={60}
            backgroundColor="#0f172a"
         
          >
            <div className="p-8 flex items-center justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
                Botón sobre grilla verde
              </button>
            </div>
          </GridWrapper>
        </div>
      </div>
    </main>
  )
}