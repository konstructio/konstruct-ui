import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Switch as SwitchComponent } from './Switch';

type Story = StoryObj<typeof SwitchComponent>;

const meta: Meta<typeof SwitchComponent> = {
  title: 'In Review/Switch',
  component: SwitchComponent,
};

export const Switch: Story = {
  args: {
    value: true,
    helperText: 'Some helper text here',
  },
  render: function SwitchStory(args) {
    const [value, setValue] = useState({
      switch1: args.value,
      switch2: args.value,
      switch3: args.value,
      switch4: args.value,
    });

    const handleChange = (switchName: string, value: boolean) => {
      setValue((values) => ({ ...values, [switchName]: value }));
    };

    return (
      <div className="flex flex-col gap-5">
        <div className="max-w-[350px] flex flex-col gap-5 p-8">
          <SwitchComponent
            label="Civo theme"
            {...args}
            value={value.switch1}
            onChange={(event) => handleChange('switch1', event)}
          />

          <SwitchComponent
            label="Kubefirst theme"
            {...args}
            value={value.switch2}
            onChange={(event) => handleChange('switch2', event)}
            theme="kubefirst"
          />
        </div>

        <div
          className="max-w-[350px] flex flex-col gap-5 bg-[#10172A] p-8 rounded-sm"
          data-theme="dark"
        >
          <SwitchComponent
            label="Civo theme"
            {...args}
            value={value.switch3}
            onChange={(event) => handleChange('switch3', event)}
          />

          <SwitchComponent
            label="Kubefirst theme"
            {...args}
            value={value.switch4}
            onChange={(event) => handleChange('switch4', event)}
            theme="kubefirst"
          />
        </div>
      </div>
    );
  },
};

export default meta;
