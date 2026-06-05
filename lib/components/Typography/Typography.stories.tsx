import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible text component with semantic variants and theming. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'subtitle3',
        'labelLarge',
        'labelMedium',
        'labelSmall',
        'buttonSmall',
        'body1',
        'body2',
        'body3',
        'tooltip',
      ],
      description: 'Visual variant of the text',
    },
    component: {
      control: { type: 'select' },
      options: [undefined, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'],
      description: 'Override the rendered HTML element',
    },
    children: {
      control: { type: 'text' },
      description: 'Text content to display',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    variant: 'body1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {};
