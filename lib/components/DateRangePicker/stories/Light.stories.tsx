import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateRangePicker } from '../DateRangePicker';

type Story = StoryObj<typeof DateRangePicker>;

const meta: Meta<typeof DateRangePicker> = {
  title: 'In Review/DateRangePicker/Light',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
};

export const Default: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        label="Select Date Range"
        isRequired
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const WithDefaultRange: Story = {
  render: () => {
    // Create dates matching the Figma design (Feb 6 to Mar 3)
    const startDate = new Date(2025, 1, 6); // Feb 6, 2025
    const endDate = new Date(2025, 2, 3); // Mar 3, 2025

    return (
      <div className="p-4">
        <DateRangePicker
          defaultRange={{
            from: startDate,
            to: endDate,
          }}
          defaultPreset="custom"
          onRangeChange={(range) => console.log('Range changed:', range)}
        />
      </div>
    );
  },
};

export const WithPresetToday: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        defaultPreset="today"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const WithPresetLast7Days: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        defaultPreset="last-7-days"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const WithPresetCurrentMonth: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        defaultPreset="current-month"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const TimeFormat24: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        label="24-Hour Format"
        timeFormat="24"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const TimeFormat12: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        label="12-Hour Format"
        timeFormat="12"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        label="Disabled DateRangePicker"
        disabled
        defaultPreset="today"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export default meta;
