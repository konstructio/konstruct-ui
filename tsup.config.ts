import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    '!lib/**/*.test.(tsx|ts)',
    '!lib/**/*.stories.(tsx|ts)',
    './lib/**/*.(tsx|ts)',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  bundle: false,
  splitting: true,
});
