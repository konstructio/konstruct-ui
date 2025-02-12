import type { Preview } from '@storybook/react';

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

export default preview;
