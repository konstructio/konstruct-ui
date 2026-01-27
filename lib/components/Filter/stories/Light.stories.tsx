import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';

import { DateRangeWithTime } from '@/components/DateRangePicker/DateRangePicker.types';

import { Filter as FilterComponent } from '../Filter';
import { Option } from '../Filter.types';

type Story = StoryObj<typeof FilterComponent>;

const meta: Meta<typeof FilterComponent> = {
  title: 'In Review/Filter/Light',
  component: FilterComponent,
};

export const Light: Story = {
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRangeWithTime | undefined>();

    const onApplyDateRange = (range?: DateRangeWithTime) => setDateRange(range);

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
      <div className="flex flex-col gap-2">
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

          <FilterComponent.DateRangeFilterDropdown
            label="Date Range"
            onApply={onApplyDateRange}
          />

          <FilterComponent.ResetButton
            disabled={!dateRange && !date && selectedStatus.length === 0}
          />
        </FilterComponent>
      </div>
    );
  },
};

export default meta;
