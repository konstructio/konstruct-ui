import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup as RadioGroupComponent } from './RadioGroup';
import { useState } from 'react';

type Story = StoryObj<typeof RadioGroupComponent>;

const meta: Meta<typeof RadioGroupComponent> = {
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
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    const handleSelected = (value: string) => {
      setSelected(value);
    };

    console.log(selected);

    return (
      <div className="w-[350px] flex flex-col gap-3">
        <RadioGroupComponent
          {...args}
          options={args.options.map(({ value, ...delegated }) => ({
            ...delegated,
            value,
            checked: selected === value,
            onValueChange: handleSelected,
          }))}
        />
      </div>
    );
  },
};

export default meta;
