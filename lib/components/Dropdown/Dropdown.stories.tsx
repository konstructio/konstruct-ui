import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown as DropdownComponent } from './Dropdown';

type Story = StoryObj<typeof DropdownComponent>;

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
};

export const Dropdown: Story = {
  args: {
    options: [
      {
        label: 'Talos',
        value: 'talos',
        leftIcon: <img src="/talos.svg" alt="Talos Logo" />,
      },
      {
        label: 'K3S',
        value: 'k3s',
        leftIcon: <img src="/k3s.svg" alt="K3S Logo" />,
      },
    ],
    placeholder: 'Select an option...',
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <DropdownComponent
        label="Dropdown with Kubefirst theme"
        theme="kubefirst"
        name="components-dropdown"
        {...args}
      />
    </div>
  ),
};

export default meta;
