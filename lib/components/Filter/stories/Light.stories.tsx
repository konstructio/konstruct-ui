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
    const [selectedCategory, setSelectedCategory] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRangeWithTime | undefined>();

    const onApplyDateRange = (range?: DateRangeWithTime) => setDateRange(range);

    const onApplyDate = (date?: Date) => setDate(date);

    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };

    const onApplyText = (selectedOptions: Option[]) => {
      setSelectedCategory(selectedOptions);
    };

    const categoryOptions = useMemo<Option[]>(
      () => [
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'networking', label: 'Networking' },
        { id: 'security', label: 'Security' },
        { id: 'monitoring', label: 'Monitoring' },
      ],
      [],
    );

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

          <FilterComponent.TextMultiSelect
            label="Category"
            options={categoryOptions}
            onApply={onApplyText}
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
            disabled={
              !dateRange &&
              !date &&
              selectedStatus.length === 0 &&
              selectedCategory.length === 0
            }
          />
        </FilterComponent>
      </div>
    );
  },
};

/**
 * The "Created" filter from the Product Design System (Figma node 206-366):
 * three rolling presets plus a custom range, applied as soon as a preset is
 * picked, with the design's Clear / Apply wording.
 */
export const CreatedDateRange: Story = {
  parameters: {
    theme: 'light',
  },
  render: function CreatedDateRangeStory() {
    const DAY_MS = 24 * 60 * 60 * 1000;
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>();

    const rolling = (days: number) => (now: Date) => ({
      from: new Date(now.getTime() - days * DAY_MS),
      to: now,
    });

    return (
      <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.DateRangeFilterDropdown
            label="Created"
            labelTimePeriod="Created"
            labelApply="Apply"
            labelReset="Clear"
            applyOnPresetSelect
            showTime={false}
            maxDate={new Date()}
            presets={[
              {
                value: 'last-24-hours',
                label: 'Last 24 hours',
                resolve: rolling(1),
              },
              {
                value: 'last-7-days',
                label: 'Last 7 days',
                resolve: rolling(7),
              },
              {
                value: 'last-30-days',
                label: 'Last 30 days',
                resolve: rolling(30),
              },
              { value: 'custom', label: 'Custom range', resolve: () => ({}) },
            ]}
            onApply={setApplied}
          />
        </FilterComponent>

        <pre className="text-xs text-zinc-500 dark:text-zinc-400">
          {applied
            ? JSON.stringify(
                {
                  from: applied.from?.toISOString(),
                  to: applied.to?.toISOString(),
                },
                null,
                2,
              )
            : 'no filter applied'}
        </pre>
      </div>
    );
  },
};

export default meta;
