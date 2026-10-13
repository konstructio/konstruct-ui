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
          label="Civo theme (black)"
          {...args}
          value={value.switch3}
          onChange={(event) => handleChange('switch3', event)}
          variant="black"
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

export const StateLabelsAndLoading = {
  parameters: {
    docs: {
      description: {
        story:
          '`labels` renders a different label for each state, and `isLoading` disables the switch and shows a spinner while the change is pending. Settings composed both around the switch before.',
      },
    },
  },
  render: function StateLabelsAndLoadingStory() {
    const [enabled, setEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (next: boolean) => {
      setIsLoading(true);
      setTimeout(() => {
        setEnabled(next);
        setIsLoading(false);
      }, 1200);
    };

    return (
      <div className="flex flex-col gap-5">
        <SwitchComponent
          labels={{ on: 'Webhook enabled', off: 'Webhook disabled' }}
          value={enabled}
          isLoading={isLoading}
          onChange={handleChange}
        />

        <SwitchComponent label="Saving…" value isLoading />
      </div>
    );
  },
} satisfies Story;

export default meta;
