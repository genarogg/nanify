import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const ruta = (ruta: any) => {
  return path.resolve(process.cwd(), ruta)
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {

      // Globales
      "@": ruta('./src/'),
      '@components': ruta('./src/components'),
      '@nano': ruta('./src/components/nano/index.tsx'),
      '@fn': ruta('./src/functions/index.ts'),
      '@env': ruta('./env.ts'),
    }
  }
})
