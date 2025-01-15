import type { Meta, StoryObj } from '@storybook/react';

import { Command as CommandComponent } from './Command';

type Story = StoryObj<typeof CommandComponent>;

const meta: Meta<typeof CommandComponent> = {
  title: 'Design System/Command',
  component: CommandComponent,
};

export const Command: Story = {
  render: () => (
    <>
      <div className="max-w-[350px] flex flex-col gap-2">
        <CommandComponent />
      </div>
    </>
  ),
};

export default meta;
