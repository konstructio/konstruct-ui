import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A container card with optional hover and active states. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    canHover: {
      control: { type: 'boolean' },
      description: 'Enable hover effect',
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Show active/selected state',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    children: {
      control: { type: 'text' },
      description: 'Card content',
    },
  },
  args: {
    children: 'Card content goes here',
    canHover: false,
    isActive: false,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {};
