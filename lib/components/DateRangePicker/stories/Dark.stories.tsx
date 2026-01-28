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

export default meta;
