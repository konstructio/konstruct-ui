import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A group of radio button options. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Form field name (shared by all radios)',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the group',
    },
    direction: {
      control: { type: 'inline-radio' },
      options: ['row', 'col'],
      description: 'Layout direction',
    },
    defaultChecked: {
      control: { type: 'text' },
      description: 'Initially selected value',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of radio options',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onValueChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    name: 'plan',
    label: 'Choose a plan',
    direction: 'col',
    defaultChecked: 'basic',
    options: [
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {};
