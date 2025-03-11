import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown as DropdownComponent } from './Dropdown';
import { useState } from 'react';
import { Option } from './Dropdown.types';

type Story = StoryObj<typeof DropdownComponent>;

const meta: Meta<typeof DropdownComponent> = {
  title: 'In Review/Dropdown',
  component: DropdownComponent,
};

export const Dropdown: Story = {
  args: {
    options: [
      {
        label: 'Talos',
        value: 'talos',
        leftIcon: <img src="./talos.svg" alt="Talos Logo" />,
      },
      {
        label: 'K3S',
        value: 'k3s',
        leftIcon: <img src="./k3s.svg" alt="K3S Logo" />,
      },
    ],
    placeholder: 'Select an option...',
    required: false,
    labelClassName: '',
    theme: 'kubefirst',
    defaultValue: '',
    value: {
      label: 'Talos',
      value: 'talos',
      leftIcon: <img src="./talos.svg" alt="Talos Logo" />,
    },
    onChange: (option) => {
      console.log(option);
    },
  },
  render: (args) => {
    const [value, setValue] = useState<Option>();

    console.log(value);
    return (
      <>
        <div className="max-w-[350px]">
          <DropdownComponent
            label="Dropdown with Kubefirst theme"
            {...args}
            onChange={(option) => {
              setValue(option as unknown as Option);
            }}
            value={value}
          />
        </div>
      </>
    );
  },
};

export default meta;
