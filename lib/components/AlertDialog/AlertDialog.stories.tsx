import type { Meta, StoryObj } from '@storybook/react-vite';

import { AlertDialog } from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A confirmation dialog with a trigger button, title, description and configurable action buttons. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    buttonTriggerText: {
      control: { type: 'text' },
      description: 'Text for the trigger button',
    },
    buttonTriggerVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'link'],
      description: 'Variant for the trigger button',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text shown in the dialog',
    },
    description: {
      control: { type: 'text' },
      description: 'Description text shown in the dialog',
    },
    showCancelButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the cancel button',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onConfirm: { action: 'confirmed', table: { disable: true } },
    onClick: { action: 'clicked', table: { disable: true } },
  },
  args: {
    buttonTriggerText: 'Open dialog',
    buttonTriggerVariant: 'primary',
    title: 'Confirm action',
    description: 'Are you sure you want to proceed with this action?',
    showCancelButton: true,
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Playground: Story = {};
