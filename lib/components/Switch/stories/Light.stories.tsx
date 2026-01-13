import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Switch as SwitchComponent } from '../Switch';

type Story = StoryObj<typeof SwitchComponent>;

const meta: Meta<typeof SwitchComponent> = {
  title: 'In Review/Switch/Light',
  component: SwitchComponent,
};

export const Light = {
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
        <SwitchComponent
          label="Civo theme"
          {...args}
          value={value.switch1}
          onChange={(event) => handleChange('switch1', event)}
        />

        <SwitchComponent
          label="Civo theme"
          {...args}
          value={true}
          onChange={(event) => handleChange('switch1', event)}
          disabled
        />

        <SwitchComponent
          label="Civo theme"
          {...args}
          value={false}
          onChange={(event) => handleChange('switch1', event)}
          disabled
        />

        <SwitchComponent
          label="Kubefirst theme"
          {...args}
          value={value.switch2}
          onChange={(event) => handleChange('switch2', event)}
          theme="kubefirst"
        />
      </div>
    );
  },
} satisfies Story;

export default meta;
