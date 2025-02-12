import type { Meta, StoryObj } from '@storybook/react';
import { Info } from 'react-feather';

import { RadioGroup as RadioGroupComponent } from './RadioGroup';

type Story = StoryObj<typeof RadioGroupComponent>;

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'In Review/RadioGroup',
  component: RadioGroupComponent,
};

export const RadioGroup = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      {
        label: (
          <span className="flex items-center gap-1.5">
            Option 3 <Info className="w-[15px] h-[15px] text-slate-400" />
          </span>
        ),
        value: 'option3',
      },
    ],
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3 text-slate-700">
      <h6>Row</h6>

      <RadioGroupComponent
        {...args}
        direction="row"
        name="radio-group-row"
        defaultChecked="option1"
        options={args.options.map(({ value, ...delegated }) => ({
          ...delegated,
          value,
        }))}
      />

      <h6 className="mt-5">Column</h6>

      <RadioGroupComponent
        {...args}
        name="radio-group-col"
        defaultChecked="option1"
        options={args.options.map(({ value, ...delegated }) => ({
          ...delegated,
          value,
        }))}
      />
    </div>
  ),
} satisfies Story;

export default meta;
