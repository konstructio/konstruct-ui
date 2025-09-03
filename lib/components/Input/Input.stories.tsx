import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input as InputComponent } from './Input';
import { Typography } from '../Typography/Typography';

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
    <>
      <div className="w-[350px]">
        <Typography variant="h6" className="my-5">
          Input Component
        </Typography>

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

      <Typography variant="h6" className="my-5">
        Input Component Dark Mode
      </Typography>

      <div className="w-[400px] bg-slate-950 p-4">
        <div className="w-[350px]">
          <InputComponent
            {...args}
            label="This is a label"
            isRequired
            theme="civo-dark"
            helperText="This is a helper text."
          />

          <div className="my-3" />
          <InputComponent theme="kubefirst-dark" {...args} />
          <div className="my-3" />
          <InputComponent {...args} theme="civo-dark" />
          <div className="my-3" />
          <InputComponent {...args} theme="kubefirst-dark" type="password" />
          <div className="my-3" />
          <InputComponent {...args} theme="civo-dark" type="password" />
          <div className="my-3" />
          <InputComponent {...args} theme="kubefirst-dark" error="" />
          <div className="my-3" />
          <InputComponent
            {...args}
            theme="civo-dark"
            helperText="This is a helper text."
            error="This is an error."
          />
          <div className="my-3" />
          <InputComponent
            {...args}
            theme="kubefirst-dark"
            placeholder="Search image name"
            isSearch
          />
          <div className="my-3" />
          <InputComponent
            {...args}
            placeholder="Search image name"
            isSearch
            theme="civo-dark"
            helperText="This is a helper text."
          />
          <div className="my-3" />
          <InputComponent {...args} disabled theme="kubefirst-dark" />
        </div>
      </div>
    </>
  ),
};

export default meta;
