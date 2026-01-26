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
        label="With Time"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export const WithoutTime: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        label="Without Time"
        showTime={false}
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export default meta;
