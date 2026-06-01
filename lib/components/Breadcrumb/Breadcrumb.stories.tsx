import type { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A breadcrumb navigation component for showing hierarchical page locations. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    steps: {
      control: { type: 'object' },
      description: 'Array of breadcrumb steps',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    steps: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Current Page', isActive: true },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {};
