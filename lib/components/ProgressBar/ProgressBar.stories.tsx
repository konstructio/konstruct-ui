import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar as ProgressBarComponent } from './ProgressBar';

type Story = StoryObj<typeof ProgressBarComponent>;

const meta: Meta<typeof ProgressBarComponent> = {
  component: ProgressBarComponent,
};

export const ProgressBar: Story = {
  render: () => (
    <div className="max-w-[350px] flex flex-col gap-2">
      <ProgressBarComponent />
    </div>
  ),
};

export default meta;
