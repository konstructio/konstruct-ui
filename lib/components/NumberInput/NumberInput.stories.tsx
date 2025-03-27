import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput as NumberInputComponent } from './NumberInput';
import { useState } from 'react';
import { Typography } from '../Typography/Typography';

type Story = StoryObj<typeof NumberInputComponent>;

const meta: Meta<typeof NumberInputComponent> = {
  title: 'In Review/NumberInput',
  component: NumberInputComponent,
};

export const NumberInput: Story = {
  render: (args) => {
    const [count, setCount] = useState(10);

    return (
      <div className="w-[350px] flex flex-col gap-4">
        <NumberInputComponent
          {...args}
          theme="kubefirst"
          className="text-zinc-700"
          label={
            <Typography variant="labelLarge" className="text-zinc-500">
              Kubefirst <span className="text-red-600">*</span>
            </Typography>
          }
          value={count}
          onChange={({ target: { value } }) => setCount(value)}
        />
      </div>
    );
  },
};

export default meta;
