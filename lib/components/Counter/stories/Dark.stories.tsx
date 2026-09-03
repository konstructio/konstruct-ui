import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Counter as CounterComponent } from '../Counter';

type Story = StoryObj<typeof CounterComponent>;

const meta: Meta<typeof CounterComponent> = {
  title: 'In Review/Counter/Dark',
  component: CounterComponent,
};

export const Dark = {
  parameters: {
    theme: 'dark',
  },
  render: function NumberInputStory(args) {
    const [count, setCount] = useState<number>(10);

    return (
      <div className="flex flex-col gap-6">
        <CounterComponent
          {...args}
          label="Number of nodes"
          isRequired
          value={count}
          onChange={({ target: { value } }) => setCount(value)}
        />

        <CounterComponent
          {...args}
          label="Number of nodes"
          isRequired
          value={count}
          onChange={({ target: { value } }) => setCount(value)}
          canDecrement={false}
        />
        <CounterComponent
          {...args}
          label="Number of nodes"
          isRequired
          value={count}
          onChange={({ target: { value } }) => setCount(value)}
          canIncrement={false}
        />
      </div>
    );
  },
} satisfies Story;

export const WithUnitAndMessages = {
  parameters: {
    docs: {
      description: {
        story:
          '`step` moves the value by a fixed amount, `unit` renders a suffix inside the field, `labelAction` fills the right end of the label row, and `error` / `helperText` describe the control the same way `Input` does. `fullWidth` stretches the field to its container.',
      },
    },
  },
  render: function WithUnitAndMessagesStory() {
    const [size, setSize] = useState<number>(1000);
    const isQuotaReached = size >= 2000;

    return (
      <div className="flex flex-col gap-6 max-w-100">
        <CounterComponent
          label="Size"
          isRequired
          value={size}
          step={500}
          min={500}
          max={2000}
          unit="GB"
          fullWidth
          labelAction={
            <span className="text-sm font-medium text-aurora-500">
              ${((size / 500) * 5).toFixed(2)}/mo
            </span>
          }
          decrementLabel="Remove 500 GB"
          incrementLabel="Add 500 GB"
          error={
            isQuotaReached
              ? 'You reached the quota for this account'
              : undefined
          }
          helperText="Increments of 500 GB"
          onChange={({ target: { value } }) => setSize(value)}
        />

        <CounterComponent
          label="Disabled"
          value={3}
          unit="nodes"
          disabled
          helperText="This pool cannot be resized while updating"
        />
      </div>
    );
  },
} satisfies Story;

export default meta;
