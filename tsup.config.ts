import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.tsx'], 
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  legacyOutput: true,
  outDir: 'dist',
  external: ['react', 'react-dom', '**/*.scss'],
});