import { defineConfig } from 'vitest/config';
import path from 'node:path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['tests/setup.ts'],
    coverage: {
      include: ['lib'],
      exclude: [
        'lib/plugins/**',
        'lib/**/*.stories.*',
        'lib/**/*/index.*',
        'lib/**/*.test.*',
        'lib/**/*.types.*',
        'lib/**/*.variants.*',
        'lib/index.ts',
        'lib/styles.ts',
        'lib/vite-env.d.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'lib'),
    },
  },
});
