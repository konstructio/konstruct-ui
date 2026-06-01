import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An accessible checkbox with an optional label. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the checkbox',
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Initial checked state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};
