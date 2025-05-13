import type { Meta, StoryObj } from '@storybook/react';

import { Filter as FilterComponent } from './Filter';

type Story = StoryObj<typeof FilterComponent>;

const meta: Meta<typeof FilterComponent> = {
  title: 'In Review/Filter',
  component: FilterComponent,
};

export const Filter: Story = {
  args: {
    statusOptions: [
      {
        id: 'creating',
        label: 'Creating',
        variant: 'warning',
      },
      {
        id: 'deleting',
        label: 'Deleting',
        variant: 'danger',
      },
      {
        id: 'failed',
        label: 'Failed',
        variant: 'danger',
      },
      {
        id: 'pending',
        label: 'Pending',
        variant: 'info',
      },
      {
        id: 'ready',
        label: 'Ready',
        variant: 'success',
      },
      {
        id: 'retrying',
        label: 'Retrying',
        variant: 'warning',
      },
    ],
    onSelectStatus: (...status) => {
      console.log('onSelectStatus', status);
    },
  },
  render: (args) => (
    <div className="max-w-[350px] flex flex-col gap-2">
      <FilterComponent {...args} />
    </div>
  ),
};

export default meta;
