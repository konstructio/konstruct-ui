import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A tabs container with List, Trigger, and Content sub-components built on Radix UI. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'Default active tab',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState(args.defaultValue ?? 'tab1');

      return (
        <Tabs {...args} value={value} onValueChange={setValue}>
          <Tabs.List orientation="horizontal">
            <Tabs.Trigger tab="tab1" label="Overview" isActive={value === 'tab1'} />
            <Tabs.Trigger tab="tab2" label="Activity" isActive={value === 'tab2'} />
            <Tabs.Trigger tab="tab3" label="Settings" isActive={value === 'tab3'} />
          </Tabs.List>
          <Tabs.Content value="tab1">Overview content</Tabs.Content>
          <Tabs.Content value="tab2">Activity content</Tabs.Content>
          <Tabs.Content value="tab3">Settings content</Tabs.Content>
        </Tabs>
      );
    };

    return <Demo />;
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {};
