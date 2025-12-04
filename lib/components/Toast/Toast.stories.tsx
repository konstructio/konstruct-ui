import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
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
    description: 'Invite successfully revoked!',
    title: (
      <h6 className="text-white flex items-center gap-2 font-medium text-base">
        <CheckCircle className="w-6 h-6" />
        Invite successfully revoked!
      </h6>
    ),
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-[350px] flex flex-col gap-3">
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
    description: 'This is an error toast!',
    title: (
      <h6 className="text-white flex items-center gap-2 font-medium text-base">
        <AlertCircle className="w-6 h-6" />
        This is an error toast!
      </h6>
    ),
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-[350px] flex flex-col gap-3">
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
    description: 'This is a warning toast!',
    title: (
      <h6 className="text-white flex items-center gap-2 font-medium text-base">
        <AlertTriangle className="w-6 h-6" />
        This is a warning toast!
      </h6>
    ),
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-[350px] flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Warning Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>
    );
  },
};

export default meta;
