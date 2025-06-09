import alias from '@rollup/plugin-alias';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    dts({
      include: ['lib'],
      exclude: ['**/*.stories.(ts|js|tsx|jsx)', '**/*.test.(ts|js|tsx|jsx)'],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      treeshake: {
        moduleSideEffects: false,
        preset: 'smallest',
      },
      plugins: [
        alias({
          entries: [{ find: '@', replacement: resolve(__dirname, 'lib') }],
        }),
      ],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: [
              'lib/**/*.d.ts',
              'lib/**/*.stories.*',
              'lib/**/*.test.*',
              'lib/**/*.types.*',
            ],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: '[name][extname]',
        entryFileNames: '[name].js',
        compact: true,
        preserveModules: false,
      },
    },
  },
});
