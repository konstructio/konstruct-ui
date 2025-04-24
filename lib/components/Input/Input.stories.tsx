import type { Meta, StoryObj } from '@storybook/react';

import { Input as InputComponent } from './Input';

type Story = StoryObj<typeof InputComponent>;

const meta: Meta<typeof InputComponent> = {
  title: 'In Review/Input',
  component: InputComponent,
};

export const Input: Story = {
  args: {
    autoComplete: 'off',
  },
  render: (args) => (
    <div className="w-[350px]">
      <InputComponent
        {...args}
        label="This is a label"
        isRequired
        theme="civo"
        helperText="This is a helper text."
      />
      <div className="my-3" />
      <InputComponent {...args} />
      <div className="my-3" />
      <InputComponent {...args} theme="civo" />
      <div className="my-3" />
      <InputComponent {...args} type="password" />
      <div className="my-3" />
      <InputComponent {...args} theme="civo" type="password" />
      <div className="my-3" />
      <InputComponent {...args} error="" />
      <div className="my-3" />
      <InputComponent
        {...args}
        theme="civo"
        helperText="This is a helper text."
        error="This is an error."
      />
      <div className="my-3" />
      <InputComponent {...args} placeholder="Search image name" isSearch />
      <div className="my-3" />
      <InputComponent
        {...args}
        placeholder="Search image name"
        isSearch
        theme="civo"
        helperText="This is a helper text."
      />
      <div className="my-3" />
      <InputComponent {...args} disabled />
    </div>
  ),
};

export default meta;
