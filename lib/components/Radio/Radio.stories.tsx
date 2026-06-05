import type { Meta, StoryObj } from '@storybook/react-vite';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A single radio button with optional label and description. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    value: {
      control: { type: 'text' },
      description: 'Value submitted when selected',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    description: {
      control: { type: 'text' },
      description: 'Description text below the label',
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Initial checked state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio is disabled',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    name: 'plan',
    value: 'basic',
    label: 'Basic Plan',
    description: '$9 / month',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Playground: Story = {};
