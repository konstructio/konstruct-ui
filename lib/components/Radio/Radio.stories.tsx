import type { Meta, StoryObj } from '@storybook/react';

import { Radio as RadioComponent } from './Radio';

type Story = StoryObj<typeof RadioComponent>;

const meta: Meta<typeof RadioComponent> = {
  title: 'Design System/Radio',
  component: RadioComponent,
};

export const Radio: Story = {
  args: {
    value: 'radio-button',
    checked: true,
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <RadioComponent {...args} label="Radio Button Kubefirst" />
      <RadioComponent {...args} theme="colony" label="Radio Button Colony" />
    </div>
  ),
};

export default meta;
