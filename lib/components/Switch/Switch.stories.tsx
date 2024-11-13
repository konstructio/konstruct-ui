import type { Meta, StoryObj } from '@storybook/react';

import { Switch as SwitchComponent } from './Switch';

type Story = StoryObj<typeof SwitchComponent>;

const meta: Meta<typeof SwitchComponent> = {
  component: SwitchComponent,
};

export const Switch: Story = {
  render: (args) => (
    <div className="max-w-[350px]">
      <SwitchComponent {...args} />
    </div>
  ),
};

export default meta;
