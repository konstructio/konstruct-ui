import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button/Button';

import { Toast as ToastComponent } from './Toast';
import { useState } from 'react';
import { PiIcon } from 'lucide-react';

type Story = StoryObj<typeof ToastComponent>;

const meta: Meta<typeof ToastComponent> = {
  title: 'In Review/Toast',
  component: ToastComponent,
};

export const Toast: Story = {
  args: {
    duration: 1500,
    title: (
      <h6 className="text-white flex items-center gap-2">
        <PiIcon name="circle-check" />
        This is a title
      </h6>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-[350px] flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Toast</Button>
        <ToastComponent
          {...args}
          className="bg-emerald-700"
          open={open}
          setOpen={setOpen}
          closeButtonClassName="text-white"
        />
      </div>
    );
  },
};

export default meta;
