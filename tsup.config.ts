import { defineConfig } from 'tsup';
import { resolve } from 'node:path';

export default defineConfig({
  entryPoints: [
    resolve(__dirname, 'lib/index.ts'),
    resolve(__dirname, 'lib/styles.ts'),
  ],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
});
