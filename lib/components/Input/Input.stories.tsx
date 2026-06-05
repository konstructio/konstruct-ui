import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A text input with label, helper text, error state and search variant. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'error'],
      description: 'Visual variant of the input',
    },
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display below the input',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Show required indicator',
    },
    isSearch: {
      control: { type: 'boolean' },
      description: 'Show search icon inside the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
    onBlur: { action: 'blurred', table: { disable: true } },
  },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    isRequired: false,
    isSearch: false,
    disabled: false,
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {};
