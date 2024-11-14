import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { ThemeProvider } from '../../contexts';

import { Toast as ToastComponent } from './Toast';

type Story = StoryObj<typeof ToastComponent>;

const meta: Meta<typeof ToastComponent> = {
  component: ToastComponent,
};

export const Toast: Story = {
  args: {
    duration: 1500,
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <ThemeProvider theme="kubefirst">
        <ToastComponent
          {...args}
          title={<h6>This is a title</h6>}
          description={<p>This is a description</p>}
          titleClassName="text-kubefirst-purple-dark"
          descriptionClassName="text-kubefirst-purple-light"
          className="bg-purple-50"
        >
          <Button>Show Toast Kubefirst Theme</Button>
        </ToastComponent>
      </ThemeProvider>

      <ThemeProvider theme="konstruct">
        <ToastComponent
          {...args}
          title={<h6>This is a title</h6>}
          description={<p>This is a description</p>}
          titleClassName="text-orange-600"
          descriptionClassName="text-orange-400"
          className="bg-orange-50"
        >
          <Button>Show Toast Konstruct Theme</Button>
        </ToastComponent>
      </ThemeProvider>

      <ThemeProvider theme="colony">
        <ToastComponent
          {...args}
          title={<h6>This is a title</h6>}
          description={<p>This is a description</p>}
          titleClassName="text-red-600"
          descriptionClassName="text-red-400"
          className="bg-red-50"
        >
          <Button>Show Toast Colony Theme</Button>
        </ToastComponent>
      </ThemeProvider>
    </div>
  ),
};

export default meta;
