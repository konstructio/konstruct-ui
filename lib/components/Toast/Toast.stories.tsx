import type { Meta, StoryObj } from '@storybook/react';

import { Toast as ToastComponent } from './Toast';

type Story = StoryObj<typeof ToastComponent>;

const meta: Meta<typeof ToastComponent> = {
  component: ToastComponent,
};

export const Toast: Story = {
  render: () => (
    <div className="w-[350px] flex flex-col gap-3">
      <ToastComponent />
    </div>
  ),
};

export default meta;
