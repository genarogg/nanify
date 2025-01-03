import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/lib'],
    format: ['cjs', 'esm'],
    dts: true,
});