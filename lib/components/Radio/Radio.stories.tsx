import type { Meta, StoryObj } from '@storybook/react-vite';

import { Radio as RadioComponent } from './Radio';

type Story = StoryObj<typeof RadioComponent>;

const meta = {
  title: 'In Review/Radio',
  component: RadioComponent,
} satisfies Meta<typeof RadioComponent>;

export const Radio = {
  args: {
    value: 'radio-button',
    checked: true,
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <RadioComponent
        {...args}
        label="Radio Button Kubefirst"
        theme="kubefirst"
      />
      <RadioComponent {...args} label="Radio Button Civo" />

      <RadioComponent
        {...args}
        label="Radio Button Kubefirst"
        checked={false}
      />

      <RadioComponent
        {...args}
        label="Radio Button Kubefirst"
        disabled={true}
        checked={false}
      />

      <RadioComponent
        {...args}
        label="Radio Button Kubefirst"
        disabled={true}
      />
    </div>
  ),
} satisfies Story;

export default meta;
