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
        'lib/assets/**',
        'lib/icons.ts',
        'lib/**/*.stories.*',
        'lib/**/*/index.*',
        'lib/**/*.test.*',
        'lib/**/*.types.*',
        'lib/**/*.variants.*',
        'lib/index.ts',
        'lib/styles.ts',
        'lib/vite-env.d.ts',
      ],
      thresholds: {
        statements: 63,
        branches: 56,
        functions: 60,
        lines: 64,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'lib'),
      '@tests': path.resolve(__dirname, 'tests'),
    },
  },
});
