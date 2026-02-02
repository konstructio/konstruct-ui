import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
  stories: ['../docs/**/*.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
        svgr({
          include: '**/*.svg',
          svgrOptions: {
            exportType: 'default',
          },
        }),
      ],
    }),
} satisfies StorybookConfig;

export default config;
