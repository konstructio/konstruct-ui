import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input as InputComponent } from '../Input';

type Story = StoryObj<typeof InputComponent>;

const meta: Meta<typeof InputComponent> = {
  title: 'In Review/Input/Light',
  component: InputComponent,
};

export const Light = {
  args: {
    autoComplete: 'off',
  },
  render: (args) => (
    <div className="w-100 flex flex-col gap-4 p-4">
      <InputComponent
        {...args}
        label="This is a label"
        isRequired
        helperText="This is a helper text."
      />
      <InputComponent
        {...args}
        label="This is a label"
        labelAction={
          <button type="button" className="text-xs text-blue-500">
            Action
          </button>
        }
        helperText="This is a helper text."
      />
      <InputComponent {...args} />
      <InputComponent {...args} type="password" />
      <InputComponent
        {...args}
        helperText="This is a helper text."
        error="This is an error."
      />
      <InputComponent
        {...args}
        placeholder="Search..."
        isSearch
        helperText="This is a helper text."
      />
      <InputComponent
        {...args}
        placeholder="This is disabled field."
        disabled
      />
    </div>
  ),
} satisfies Story;

export default meta;
