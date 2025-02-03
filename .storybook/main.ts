import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
  stories: ['../docs/**/*.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
        svgr({
          include: '**/*.svg',
          svgrOptions: {
            exportType: 'default',
            svgo: false,
          },
        }),
      ],
    });
  },
} satisfies StorybookConfig;

export default config;
