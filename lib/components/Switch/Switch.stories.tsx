import type { Meta, StoryObj } from '@storybook/react';

import { Switch as SwitchComponent } from './Switch';

type Story = StoryObj<typeof SwitchComponent>;

const meta: Meta<typeof SwitchComponent> = {
  component: SwitchComponent,
};

export const Switch: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <SwitchComponent label="Kubefirst theme" {...args} />
      <div className="mt-5" />
      <SwitchComponent label="Colony theme" theme="colony" {...args} />
    </div>
  ),
};

export default meta;
