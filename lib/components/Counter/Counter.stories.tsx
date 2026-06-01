import type { Meta, StoryObj } from '@storybook/react-vite';

import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A numeric input with increment and decrement buttons. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the counter',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    value: {
      control: { type: 'number' },
      description: 'Current numeric value',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum allowed value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum allowed value',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Show required indicator',
    },
    canIncrement: {
      control: { type: 'boolean' },
      description: 'Allow increment button to be clicked',
    },
    canDecrement: {
      control: { type: 'boolean' },
      description: 'Allow decrement button to be clicked',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Quantity',
    name: 'quantity',
    value: 1,
    min: 0,
    max: 10,
    isRequired: false,
    canIncrement: true,
    canDecrement: true,
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Playground: Story = {};
