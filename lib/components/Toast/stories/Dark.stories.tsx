import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/Button/Button';

import { useToast } from '../hooks';
import { Toast as ToastComponent } from '../Toast';
import { ToastType } from '../Toast.types';
import { ToastProvider } from '../ToastProvider';

type Story = StoryObj<typeof ToastComponent>;

const meta: Meta<typeof ToastComponent> = {
  title: 'In Review/Toast/Dark',
  component: ToastComponent,
};

const TYPES: ToastType[] = ['success', 'error', 'warning', 'info'];

const Publishers = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      {TYPES.map((type) => (
        <Button
          key={type}
          variant="secondary"
          onClick={() => {
            addToast({
              title: `This is ${type === 'error' ? 'an' : 'a'} ${type} toast!`,
              description:
                type === 'error' ? 'Try again in a few seconds.' : undefined,
              type,
            });
          }}
        >
          Publish {type}
        </Button>
      ))}
    </div>
  );
};

export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
  render: (args) => (
    <ToastProvider>
      <Publishers />
      <ToastComponent {...args} />
    </ToastProvider>
  ),
};

export default meta;
