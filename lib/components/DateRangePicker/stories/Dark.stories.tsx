import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateRangePicker } from '../DateRangePicker';

type Story = StoryObj<typeof DateRangePicker>;

const meta: Meta<typeof DateRangePicker> = {
  title: 'In Review/DateRangePicker/Dark',
  component: DateRangePicker,
};

export const WithTime: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <DateRangePicker
      defaultRange={{
        from: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
        to: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
      }}
      defaultTime={{
        startTime: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
          9,
          10,
        ),
        endTime: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
          17,
          30,
        ),
      }}
      minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
      showOutsideDays
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const WithoutTime: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <DateRangePicker
      showTime={false}
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const Corousel: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <DateRangePicker
      navigationMode="together"
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const RollingPresets: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => {
    const DAY_MS = 24 * 60 * 60 * 1000;

    return (
      <DateRangePicker
        showTime={false}
        defaultPreset="last-7-days"
        presets={[
          {
            value: 'last-24-hours',
            label: 'Last 24 hours',
            resolve: (now) => ({
              from: new Date(now.getTime() - DAY_MS),
              to: now,
            }),
          },
          {
            value: 'last-7-days',
            label: 'Last 7 days',
            resolve: (now) => ({
              from: new Date(now.getTime() - 7 * DAY_MS),
              to: now,
            }),
          },
          {
            value: 'last-30-days',
            label: 'Last 30 days',
            resolve: (now) => ({
              from: new Date(now.getTime() - 30 * DAY_MS),
              to: now,
            }),
          },
          { value: 'custom', label: 'Custom range', resolve: () => ({}) },
        ]}
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    );
  },
};

/**
 * Progressive disclosure: the presets act as one-click shortcuts and the calendar
 * only appears on "Custom range" — the Product Design System's "Created" filter.
 */
export const RevealOnCustom: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => {
    const DAY_MS = 24 * 60 * 60 * 1000;
    const rolling = (days: number) => (now: Date) => ({
      from: new Date(now.getTime() - days * DAY_MS),
      to: now,
    });

    return (
      <DateRangePicker
        showTime={false}
        revealCalendarOnCustom
        defaultPreset="last-7-days"
        labelTimePeriod="Created"
        maxDate={new Date()}
        presets={[
          {
            value: 'last-24-hours',
            label: 'Last 24 hours',
            resolve: rolling(1),
          },
          { value: 'last-7-days', label: 'Last 7 days', resolve: rolling(7) },
          {
            value: 'last-30-days',
            label: 'Last 30 days',
            resolve: rolling(30),
          },
          { value: 'custom', label: 'Custom range', resolve: () => ({}) },
        ]}
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    );
  },
};

export default meta;
