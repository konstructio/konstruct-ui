import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A feedback alert component supporting success, info, warning, and danger types. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['success', 'info', 'warning', 'danger'],
      description: 'Visual type of the alert',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text shown in the alert',
    },
    description: {
      control: { type: 'text' },
      description: 'Optional description text',
    },
    isVisible: {
      control: { type: 'boolean' },
      description: 'Whether the alert is visible',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show close button to dismiss the alert',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    type: 'success',
    title: 'Operation completed!',
    description: 'Your changes have been saved successfully.',
    isVisible: true,
    showCloseButton: false,
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};
