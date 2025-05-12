import type { Meta, StoryObj } from '@storybook/react';

import { Filter as FilterComponent } from './Filter';

type Story = StoryObj<typeof FilterComponent>;

const meta: Meta<typeof FilterComponent> = {
  title: 'In Review/Filter',
  component: FilterComponent,
};

export const Filter: Story = {
  render: () => (
    <div className="max-w-[350px] flex flex-col gap-2">
      <FilterComponent />
    </div>
  ),
};

export default meta;
