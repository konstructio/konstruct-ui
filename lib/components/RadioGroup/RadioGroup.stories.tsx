import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup as RadioGroupComponent } from './RadioGroup';

type Story = StoryObj<typeof RadioGroupComponent>;

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'Design System/RadioGroup',
  component: RadioGroupComponent,
};

export const RadioGroup: Story = {
  args: {
    asChild: true,
    name: 'radio-group',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <RadioGroupComponent
        {...args}
        options={args.options.map(({ value, ...delegated }) => ({
          ...delegated,
          value,
        }))}
      />
    </div>
  ),
};

export default meta;
