import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as CheckboxComponent } from './Checkbox';

type Story = StoryObj<typeof CheckboxComponent>;

const meta: Meta<typeof Checkbox> = {
  component: CheckboxComponent,
};

export const Checkbox: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="m-w-[350px] flex flex-col gap-2">
      <CheckboxComponent
        label="This is a checkbox with kubefirst colors"
        {...args}
      />
      <CheckboxComponent
        theme="kontruct"
        label="This is a checkbox with konstruct colors"
        {...args}
      />
      <CheckboxComponent
        theme="colony"
        label="This is a checkbox with colony colors"
        {...args}
      />
    </div>
  ),
};

export default meta;