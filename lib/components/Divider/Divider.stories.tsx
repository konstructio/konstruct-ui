import type { Meta, StoryObj } from '@storybook/react';

import { Divider as DividerComponent } from './Divider';

type Story = StoryObj<typeof DividerComponent>;

const meta: Meta<typeof DividerComponent> = {
  title: 'In Review/Divider',
  component: DividerComponent,
};

export const Divider: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4">
      <div className="w-[350px] space-y-4">
        <DividerComponent />
      </div>
      <div className="w-[600px] space-y-4">
        <DividerComponent className="bg-zinc-300" />
      </div>
      <div className="w-full space-y-4">
        <DividerComponent className="bg-zinc-400" />
      </div>
    </div>
  ),
};

export default meta;
