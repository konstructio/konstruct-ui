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
        label: 'Option 1',
        value: 'option-1',
      },
    ],
    placeholder: 'Select an option...',
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <DropdownComponent
        label="Dropdown with Kubefirst theme"
        theme="kubefirst"
        {...args}
      />
    </div>
  ),
};

export default meta;
