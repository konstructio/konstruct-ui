import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A single-thumb slider for selecting a single numeric value. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the slider',
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
      description: 'Initial value as single-element array',
    },
    showValue: {
      control: { type: 'boolean' },
      description: 'Display the current value',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the slider track and thumb',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    defaultValue: [50],
    showValue: true,
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Playground: Story = {};
