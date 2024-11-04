import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar as ProgressBarComponent } from './ProgressBar';

type Story = StoryObj<typeof ProgressBarComponent>;

const meta: Meta<typeof ProgressBarComponent> = {
  component: ProgressBarComponent,
};

export const ProgressBar: Story = {
  args: {
    percent: 80,
  },
  render: (args) => (
    <div className="max-w-[350px] flex flex-col gap-2">
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export default meta;
