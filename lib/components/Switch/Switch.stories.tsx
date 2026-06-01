import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch for boolean values with an optional label. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the switch',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the label',
    },
    alignment: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction',
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Initial checked state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Enable notifications',
    alignment: 'horizontal',
    defaultChecked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};
