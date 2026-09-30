import alias from '@rollup/plugin-alias';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';

const CLIENT_DIRECTIVE = /^\s*(['"])use client\1/;
const SOURCE_MODULE = /\.[cm]?[jt]sx?$/;

// Rolldown keeps a module-level 'use client' only on entry chunks. A component
// shared by several entries (the root barrel and its own entry) is split into a
// common chunk that the barrel imports directly, so the directive never reaches
// consumers that render it from a React Server Component. Re-stamp it on every
// chunk whose lib modules all declared it; mixed chunks stay untouched so plain
// utilities never turn into client references.
const preserveClientDirective = (): Plugin => {
  const clientModules = new Set<string>();

  return {
    name: 'preserve-client-directive',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('/lib/') && CLIENT_DIRECTIVE.test(code)) {
        clientModules.add(id);
      }

      return null;
    },
    renderChunk(code, chunk) {
      const libModules = chunk.moduleIds.filter(
        (id) => id.includes('/lib/') && SOURCE_MODULE.test(id),
      );
      const isClientChunk =
        libModules.length > 0 &&
        libModules.every((id) => clientModules.has(id));

      if (!isClientChunk || CLIENT_DIRECTIVE.test(code)) {
        return null;
      }

      return { code: `'use client';\n${code}`, map: null };
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preserveClientDirective(),
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    }),
    tailwindcss(),
    libInjectCss(),
    dts({
      // Keep declarations under dist/lib/ (the layout copy.sh and the package
      // "types" entry expect) instead of letting the plugin infer the root.
      entryRoot: '.',
      include: ['lib'],
      exclude: ['**/*.stories.(ts|js|tsx|jsx)', '**/*.test.(ts|js|tsx|jsx)'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      checks: {
        eval: false,
      },
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        '@tanstack/react-query',
      ],
      treeshake: {
        moduleSideEffects: false,
      },
      plugins: [
        alias({
          entries: [
            { find: '@', replacement: resolve(import.meta.dirname, 'lib') },
          ],
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
              'lib/**/mocks/**',
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
        preserveModules: false,
      },
    },
  },
});
