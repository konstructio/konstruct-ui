import type { Meta, StoryObj } from '@storybook/react-vite';

import { Range as RangeComponent } from './Range';

type Story = StoryObj<typeof RangeComponent>;

const meta: Meta<typeof RangeComponent> = {
  title: 'In Review/Range',
  component: RangeComponent,
};

export const Range: Story = {
  args: {
    min: 0,
    max: 100,
    showValue: true,
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <RangeComponent
        theme="kubefirst"
        label="Range with Kubefirst theme"
        defaultValue={[10, 77]}
        {...args}
      />

      <div className="mt-10" />

      <RangeComponent
        theme="colony"
        label="Range with Colony theme"
        defaultValue={[0, 50]}
        {...args}
      />
    </div>
  ),
};

export default meta;
