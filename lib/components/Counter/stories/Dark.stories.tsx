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

export default meta;
