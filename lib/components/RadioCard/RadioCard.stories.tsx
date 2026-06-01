import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioCard } from './RadioCard';

const meta: Meta<typeof RadioCard> = {
  title: 'Components/RadioCard',
  component: RadioCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A card-style radio option that combines Card styling with Radio functionality. Use the **Controls** panel below to interact with the props.',
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
    value: 'pro',
    label: 'Pro Plan',
    description: '$29 / month',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof RadioCard>;

export const Playground: Story = {};
