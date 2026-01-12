import type { Preview } from '@storybook/react-vite';
import { FC, useEffect } from 'react';
import { useStoryContext } from 'storybook/internal/preview-api';

import '../lib/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Documentation',
          ['Introduction', 'Changelog'],
          'Design System',
          'In Review',
        ],
      },
    },
  },
} satisfies Preview;

export const decorators = [
  (Story: FC) => {
    const { parameters, id } = useStoryContext();
    const isDark = parameters.theme === 'dark';

    useEffect(() => {
      if (isDark) {
        document.body.setAttribute('data-theme', 'dark');
        document.body.classList.add('bg-metal-900');

        return () => {
          document.body.removeAttribute('data-theme');
          document.body.classList.remove('bg-metal-900');
        };
      }
    }, [id]);

    return <Story />;
  },
];

export default preview;
