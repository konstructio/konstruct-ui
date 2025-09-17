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
      <div className="w-[350px] flex flex-col gap-4">
        <Typography variant="h6" className="my-5" theme="kubefirst">
          Input Component
        </Typography>

        <InputComponent {...args} />

        <InputComponent
          {...args}
          label="This is a label"
          isRequired
          helperText="This is a helper text."
          theme="kubefirst"
        />

        <InputComponent {...args} type="password" theme="kubefirst" />
        <InputComponent {...args} type="password" />
        <InputComponent {...args} error="" theme="kubefirst" />
        <InputComponent
          {...args}
          helperText="This is a helper text."
          error="This is an error."
        />
        <InputComponent
          {...args}
          placeholder="Search image name"
          isSearch
          theme="kubefirst"
        />
        <InputComponent
          {...args}
          placeholder="Search image name"
          isSearch
          helperText="This is a helper text."
        />
        <InputComponent {...args} disabled theme="kubefirst" />
      </div>

      <Typography variant="h6" className="my-5">
        Input Component Dark Mode
      </Typography>

      <div className="w-[400px] bg-slate-950 p-4 rounded-sm">
        <div className="w-[350px] flex flex-col gap-4">
          <InputComponent
            {...args}
            label="This is a label"
            isRequired
            theme="dark"
            helperText="This is a helper text."
          />

          <InputComponent theme="kubefirst-dark" {...args} />
          <InputComponent {...args} theme="dark" />
          <InputComponent {...args} theme="kubefirst-dark" type="password" />
          <InputComponent {...args} theme="dark" type="password" />
          <InputComponent {...args} theme="kubefirst-dark" error="" />
          <InputComponent
            {...args}
            theme="dark"
            helperText="This is a helper text."
            error="This is an error."
          />
          <InputComponent
            {...args}
            theme="kubefirst-dark"
            placeholder="Search image name"
            isSearch
          />
          <InputComponent
            {...args}
            placeholder="Search image name"
            isSearch
            theme="dark"
            helperText="This is a helper text."
          />
          <InputComponent {...args} disabled theme="kubefirst-dark" />
        </div>
      </div>
    </>
  ),
};

export default meta;
