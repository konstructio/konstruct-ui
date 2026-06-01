import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A multi-line text input with optional label and rows. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the textarea',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text rows',
    },
    initialValue: {
      control: { type: 'text' },
      description: 'Initial/default value',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    rows: 4,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Playground: Story = {};
