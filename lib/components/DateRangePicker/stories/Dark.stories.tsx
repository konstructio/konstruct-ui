import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateRangePicker } from '../DateRangePicker';

type Story = StoryObj<typeof DateRangePicker>;

const meta: Meta<typeof DateRangePicker> = {
  title: 'In Review/DateRangePicker/Dark',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-metal-900 p-8 rounded-lg" data-theme="dark">
        <Story />
      </div>
    ),
  ],
};

export const Default: Story = {
  render: () => (
    <DateRangePicker
      theme="dark"
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <DateRangePicker
      theme="dark"
      label="Select Date Range"
      isRequired
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const WithDefaultRange: Story = {
  render: () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    return (
      <DateRangePicker
        theme="dark"
        label="Date Range"
        defaultRange={{
          from: today,
          to: nextWeek,
        }}
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    );
  },
};

export const WithPreset: Story = {
  render: () => (
    <DateRangePicker
      theme="dark"
      label="Analytics Period"
      defaultPreset="last-7-days"
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const TimeFormat24: Story = {
  render: () => (
    <DateRangePicker
      theme="dark"
      label="24-Hour Format"
      timeFormat="24"
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const TimeFormat12: Story = {
  render: () => (
    <DateRangePicker
      theme="dark"
      label="12-Hour Format"
      timeFormat="12"
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <DateRangePicker
      theme="dark"
      label="Disabled DateRangePicker"
      disabled
      defaultPreset="today"
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export default meta;
