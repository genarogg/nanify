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
      '@components': path.resolve(process.cwd(), './src/components'),
      '@fn': path.resolve(process.cwd(), './src/functions/index.ts'),
      '@env': path.resolve(process.cwd(), './env.ts'),
      '@public': path.resolve(process.cwd(), './public'),
      '@nano': path.resolve(process.cwd(), './src/components/nano/index.tsx'),
      '@btn': path.resolve(process.cwd(), './src/components/btns'),
      '@slider': path.resolve(process.cwd(), './src/components/slider'),
      '@view': path.resolve(process.cwd(), './src/pages'),
      '@tooltip': path.resolve(process.cwd(), './src/components/tooltip'),
      '@sections': path.resolve(process.cwd(), './src/components/sections'),
      '@ui': path.resolve(process.cwd(), './src/components/ui'),
      '@context': path.resolve(process.cwd(), './src/context'),
      '@hook': path.resolve(process.cwd(), './src/hook'),
      "@": path.resolve(process.cwd(), './src/')
    }
  }
})
