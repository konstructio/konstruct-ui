import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A customizable button component with multiple variants, sizes, shapes and appearances. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'link'],
      description: 'Visual style of the button',
      table: { defaultValue: { summary: 'primary' } },
    },
    version: {
      control: { type: 'inline-radio' },
      options: ['default', 'alternate'],
      description: 'Variant version (e.g. `danger` + `alternate` renders an outlined danger button)',
      table: { defaultValue: { summary: 'default' } },
    },
    shape: {
      control: { type: 'inline-radio' },
      options: [undefined, 'circle'],
      description: 'Button shape',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['medium', 'large'],
      description: 'Button size (only meaningful when `shape="circle"`)',
      table: { defaultValue: { summary: 'medium' } },
    },
    appearance: {
      control: { type: 'inline-radio' },
      options: [undefined, 'compact'],
      description: 'Density of the button',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render the child element with button styles instead of a `<button>`',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
    onClick: { action: 'clicked', table: { disable: true } },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};
