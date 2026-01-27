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

export const IndependentNavigation: Story = {
  render: () => (
    <div className="p-4">
      <DateRangePicker
        navigationMode="independent"
        onRangeChange={(range) => console.log('Range changed:', range)}
      />
    </div>
  ),
};

export default meta;
