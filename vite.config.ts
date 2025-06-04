import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@fn': path.resolve(__dirname, './src/functions/index.ts'),
      '@env': path.resolve(__dirname, './env.ts'),
      '@public': path.resolve(__dirname, './public'),
      '@nano': path.resolve(__dirname, './src/components/nano/index.tsx'),
      '@btn': path.resolve(__dirname, './src/components/btns'),
      '@slider': path.resolve(__dirname, './src/components/slider'),
      '@view': path.resolve(__dirname, './src/pages'),
      '@tooltip': path.resolve(__dirname, './src/components/tooltip'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    }
  }
})
