import type { Meta, StoryObj } from '@storybook/react';

import { Range as RangeComponent } from './Range';

type Story = StoryObj<typeof RangeComponent>;

const meta: Meta<typeof RangeComponent> = {
  component: RangeComponent,
};

export const Range: Story = {
  render: () => (
    <div className="max-w-[350px]">
      <RangeComponent />
    </div>
  ),
};

export default meta;
