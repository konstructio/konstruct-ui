import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';

import { DateRangeWithTime } from '@/components/DateRangePicker/DateRangePicker.types';

import { Filter as FilterComponent } from '../Filter';
import { Option } from '../Filter.types';

type Story = StoryObj<typeof FilterComponent>;

const meta: Meta<typeof FilterComponent> = {
  title: 'In Review/Filter/Dark',
  component: FilterComponent,
};

export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
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
              !date &&
              !dateRange &&
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
 * the built-in rolling presets plus a custom range, applied as soon as a preset
 * is picked, with the design's Clear / Apply wording.
 */
export const CreatedDateRange: Story = {
  parameters: {
    theme: 'dark',
  },
  render: function CreatedDateRangeStory() {
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>();

    return (
      <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown
            label="Created"
            labelTimePeriod="Created"
            revealCalendarOnCustom
            applyOnPresetSelect
            maxDate={new Date()}
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

/**
 * The same filter without `applyOnPresetSelect`, where every choice is confirmed
 * by hand. Picking a preset leaves a pending selection on the bare list — the
 * calendar stays shut, since the preset resolves to a window — so apply has to
 * be reachable there or the choice could never be committed.
 */
export const CreatedDateRangeExplicitApply: Story = {
  parameters: {
    theme: 'dark',
  },
  render: function CreatedDateRangeExplicitApplyStory() {
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>();

    return (
      <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown
            label="Created"
            labelTimePeriod="Created"
            revealCalendarOnCustom
            maxDate={new Date()}
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

/**
 * The trigger with a range already applied, as the Product Design System draws
 * it (Figma node 1564-10782): each end of the range in its own tag, joined by
 * "to". `defaultRange` counts as applied, so the tags show before anything is
 * picked.
 */
export const CreatedDateRangeSplitBadge: Story = {
  parameters: {
    theme: 'dark',
  },
  render: function CreatedDateRangeSplitBadgeStory() {
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>({
      from: new Date(2026, 6, 6),
      to: new Date(2026, 7, 4),
    });

    return (
      <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown
            label="Created"
            labelTimePeriod="Created"
            revealCalendarOnCustom
            applyOnPresetSelect
            appliedRangeDisplay="split"
            defaultRange={{
              from: new Date(2026, 6, 6),
              to: new Date(2026, 7, 4),
            }}
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

/**
 * Every shape the date range filter can take, side by side: the built-in
 * presets on a single-month calendar as the Product Design System draws it
 * (Figma node 2473-2654) with each applied end in its own badge, a presets-only filter with no custom range, one
 * confirmed by hand with its own rolling windows, and one whose two months move as a
 * pair and whose inputs read numerically.
 */
export const DateRangeVariations: Story = {
  parameters: {
    theme: 'dark',
  },
  render: function DateRangeVariationsStory() {
    const [applied, setApplied] = useState<
      Record<string, DateRangeWithTime | undefined>
    >({});

    const applyFor = (key: string) => {
      return (range?: DateRangeWithTime) => {
        setApplied((current) => ({ ...current, [key]: range }));
      };
    };

    const hasApplied = Object.values(applied).some(Boolean);

    return (
      <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown
            label="Created"
            labelTimePeriod="Created"
            revealCalendarOnCustom
            applyOnPresetSelect
            numberOfMonths={1}
            showOutsideDays
            appliedRangeDisplay="split"
            maxDate={new Date()}
            onApply={applyFor('created')}
          />

          <FilterComponent.CustomDateRangeFilterDropdown
            label="Updated"
            labelTimePeriod="Updated"
            revealCalendarOnCustom
            applyOnPresetSelect
            showCustomRange={false}
            onApply={applyFor('updated')}
          />

          <FilterComponent.CustomDateRangeFilterDropdown
            label="Expires"
            labelTimePeriod="Expires"
            revealCalendarOnCustom
            rollingPresets={[
              { label: 'Past hour', duration: '1h' },
              { label: 'Past day', duration: '1day' },
              { label: 'Past week', duration: '7days' },
              { label: 'Past quarter', duration: '3months' },
              { label: 'Past year', duration: '1year' },
            ]}
            labelCustomRange="Pick dates"
            onApply={applyFor('expires')}
          />

          <FilterComponent.CustomDateRangeFilterDropdown
            label="Deleted"
            labelTimePeriod="Deleted"
            revealCalendarOnCustom
            applyOnPresetSelect
            navigationMode="together"
            dateDisplayFormat="numeric"
            onApply={applyFor('deleted')}
          />

          <FilterComponent.ResetButton disabled={!hasApplied} />
        </FilterComponent>

        <pre className="text-xs text-zinc-500 dark:text-zinc-400">
          {hasApplied
            ? JSON.stringify(
                Object.fromEntries(
                  Object.entries(applied).map(([key, range]) => [
                    key,
                    range
                      ? {
                          from: range.from?.toISOString(),
                          to: range.to?.toISOString(),
                        }
                      : undefined,
                  ]),
                ),
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
