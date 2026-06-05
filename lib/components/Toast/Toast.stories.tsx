import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A toast notification with auto-dismiss and configurable variants. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast color variant',
    },
    title: {
      control: { type: 'text' },
      description: 'Toast title',
    },
    description: {
      control: { type: 'text' },
      description: 'Toast description',
    },
    duration: {
      control: { type: 'number' },
      description: 'Auto-dismiss duration in ms',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show close button',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your changes have been saved.',
    duration: 5000,
    showCloseButton: true,
  },
  render: (args) => {
    const Demo = () => {
      const [open, setOpen] = useState(false);

      return (
        <Toast {...args} open={open} setOpen={setOpen}>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Show toast
          </Button>
        </Toast>
      );
    };

    return <Demo />;
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Playground: Story = {};
