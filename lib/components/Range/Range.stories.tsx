import type { Meta, StoryObj } from '@storybook/react-vite';

import { Range } from './Range';

const meta: Meta<typeof Range> = {
  title: 'Components/Range',
  component: Range,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dual-thumb slider for selecting a value range. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the range slider',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name for the hidden input',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    defaultValue: {
      control: { type: 'object' },
      description: 'Initial range values [min, max]',
    },
    showValue: {
      control: { type: 'boolean' },
      description: 'Display the current range values',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the slider track and thumbs',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    label: 'Price range',
    min: 0,
    max: 1000,
    defaultValue: [100, 500],
    showValue: true,
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Range>;

export const Playground: Story = {};
