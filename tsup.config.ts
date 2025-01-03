import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/components'],
    format: ['cjs', 'esm'],
    dts: true,
    ignore: ['**/*.md'],
});