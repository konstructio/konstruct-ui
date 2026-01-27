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
      onRangeChange={(range) => console.log('Range changed:', range)}
      defaultRange={{
        from: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 5,
        ),
        to: new Date(),
      }}
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

export default meta;
