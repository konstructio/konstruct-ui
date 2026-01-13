import type { Meta, StoryObj } from '@storybook/react-vite';

import { Radio as RadioComponent } from '../Radio';

type Story = StoryObj<typeof RadioComponent>;

const meta = {
  title: 'In Review/Radio/Light',
  component: RadioComponent,
} satisfies Meta<typeof RadioComponent>;

export const Light = {
  args: {
    value: 'radio-button',
    checked: true,
  },
  render: (args) => (
    <div className="w-87.5 flex flex-col gap-3">
      <RadioComponent {...args} label="Radio Button selected" />

      <RadioComponent
        {...args}
        label="Radio Button unselected"
        checked={false}
      />

      <RadioComponent
        {...args}
        label="Disabled and unselected"
        disabled={true}
        checked={false}
      />

      <RadioComponent
        {...args}
        label="Disabled and selected"
        disabled={true}
        checked={true}
      />
    </div>
  ),
} satisfies Story;

export default meta;
