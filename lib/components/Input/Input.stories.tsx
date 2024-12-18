import type { Meta, StoryObj } from '@storybook/react';

import { Input as InputComponent } from './Input';

type Story = StoryObj<typeof InputComponent>;

const meta: Meta<typeof InputComponent> = {
  title: 'Design System/Input',
  component: InputComponent,
};

export const Input: Story = {
  args: {
    label: 'Normal Input',
    placeholder: 'Type information...',
  },
  render: (args) => (
    <div className="w-[350px]">
      <InputComponent {...args} />
    </div>
  ),
};

export default meta;
