import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A small status badge with multiple color variants and optional icons. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'danger', 'info', 'success', 'warning', 'violet', 'orange'],
      description: 'Visual color variant of the badge',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['default'],
      description: 'Badge size',
    },
    label: {
      control: { type: 'text' },
      description: 'Badge text content',
    },
    isSelectable: {
      control: { type: 'boolean' },
      description: 'Allow text selection',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading spinner',
    },
    onClick: { action: 'clicked', table: { disable: true } },
    onDismiss: { action: 'dismissed', table: { disable: true } },
  },
  args: {
    label: 'Badge',
    variant: 'default',
    size: 'default',
    isSelectable: true,
    loading: false,
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};
