import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { Toast as ToastComponent } from './Toast';

type Story = StoryObj<typeof ToastComponent>;

const meta: Meta<typeof ToastComponent> = {
  title: 'In Review/Toast',
  component: ToastComponent,
};

export const Success: Story = {
  args: {
    duration: 5000,
    variant: 'success',
    title: <span>This is an success toast!</span>,
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-87.5 flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Success Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    duration: 5000,
    variant: 'error',
    title: <span>This is an error toast!</span>,
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-87.5 flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Error Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>
    );
  },
};

export const Warning: Story = {
  args: {
    duration: 5000,
    variant: 'warning',
    title: <span>This is a warning toast!</span>,
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-87.5 flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Warning Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>
    );
  },
};

export default meta;
