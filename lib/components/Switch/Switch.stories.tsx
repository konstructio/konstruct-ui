import type { Meta, StoryObj } from '@storybook/react';

import { Switch as SwitchComponent } from './Switch';
import { useState } from 'react';

type Story = StoryObj<typeof SwitchComponent>;

const meta: Meta<typeof SwitchComponent> = {
  title: 'In Review/Switch',
  component: SwitchComponent,
};

export const Switch: Story = {
  args: {
    value: true,
  },
  render: (args) => {
    const [value, setValue] = useState(true);

    const handleChange = (e: boolean) => {
      setValue(e);
    };

    return (
      <div className="max-w-[350px]">
        <SwitchComponent
          label="Kubefirst theme"
          {...args}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  },
};

export default meta;
