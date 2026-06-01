import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A segmented control with an animated selection pill. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Form field name (required for form submission)',
    },
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the button group',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text below the button group',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of button options',
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Initially selected value',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the entire group',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    labelAlign: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the label text',
    },
    descriptionAlign: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the description text',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onValueChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    name: 'processor',
    label: 'Processor',
    defaultValue: 'cpu',
    disabled: false,
    isRequired: false,
    options: [
      { value: 'cpu', label: 'CPU' },
      { value: 'gpu', label: 'GPU' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Playground: Story = {};
