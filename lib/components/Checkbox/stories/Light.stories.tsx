import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox as CheckboxComponent } from '../Checkbox';

type Story = StoryObj<typeof CheckboxComponent>;

const meta: Meta<typeof CheckboxComponent> = {
  title: 'In Review/Checkbox',
  component: CheckboxComponent,
};

export const Light: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <>
      <div className="max-w-87.5 flex flex-col gap-2">
        <CheckboxComponent {...args} label="This is a checkbox" />

        <CheckboxComponent
          {...args}
          label="This is a disabled checked"
          disabled
        />

        <CheckboxComponent
          {...args}
          label="This is a disabled unchecked"
          disabled
          defaultChecked={false}
        />
      </div>
    </>
  ),
};

export default meta;
