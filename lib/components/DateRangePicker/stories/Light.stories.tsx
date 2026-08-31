import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateRangePicker } from '../DateRangePicker';

type Story = StoryObj<typeof DateRangePicker>;

const meta: Meta<typeof DateRangePicker> = {
  title: 'In Review/DateRangePicker/Light',
  component: DateRangePicker,
};

export const WithTime: Story = {
  render: () => (
    <div className="p-4">
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
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const WithoutTime: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        showTime={false}
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const Corousel: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        navigationMode="together"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const RollingPresets: Story = {
  parameters: {
    theme: 'light',
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

export default meta;
