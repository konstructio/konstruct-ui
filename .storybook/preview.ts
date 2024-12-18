import type { Preview } from '@storybook/react';

import '../lib/index.css';

const preview: Preview = {
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
        ],
      },
    },
  },
};

export default preview;
