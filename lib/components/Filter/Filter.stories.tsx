import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';

import { Filter as FilterComponent } from './Filter';
import { Option } from './Filter.types';

type Story = StoryObj<typeof FilterComponent>;

const meta: Meta<typeof FilterComponent> = {
  title: 'In Review/Filter',
  component: FilterComponent,
};

export const Filter: Story = {
  render: (args) => {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();

    const onApplyDate = (date?: Date) => setDate(date);

    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };

    const options = useMemo<Option[]>(
      () => [
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
      [],
    );

    return (
      <div className="max-w-[350px] flex flex-col gap-2">
        <FilterComponent {...args}>
          <FilterComponent.BadgeMultiSelect
            label="Status"
            options={options}
            onApply={onApplyBadge}
          />
          <FilterComponent.DateFilterDropdown
            label="Created"
            onApply={onApplyDate}
          />
          <FilterComponent.ResetButton
            disabled={!date && selectedStatus.length === 0}
          />
        </FilterComponent>
      </div>
    );
  },
};

export default meta;
