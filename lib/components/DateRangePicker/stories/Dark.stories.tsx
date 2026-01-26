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
      theme="dark"
      label="With Time"
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
      theme="dark"
      label="Without Time"
      showTime={false}
      onRangeChange={(range) => console.log('Range changed:', range)}
    />
  ),
};

export default meta;
