import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple horizontal separator line. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
  args: {},
  render: (args) => {
    return (
      <div className="w-80 flex flex-col gap-2">
        <p className="text-sm">Section above</p>
        <Divider {...args} />
        <p className="text-sm">Section below</p>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Playground: Story = {};
