import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea as TextAreaComponent } from './TextArea';

type Story = StoryObj<typeof TextAreaComponent>;

const meta: Meta<typeof TextAreaComponent> = {
  title: 'In Review/TextArea',
  component: TextAreaComponent,
};

export const TextArea: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <div className="w-87.5 flex flex-col gap-3">
      <TextAreaComponent
        {...args}
        label="This is a textarea with Kubefirst theme"
      />
      <TextAreaComponent
        {...args}
        label="This is a required textarea"
        isRequired
        helperText="This is a helper text."
      />
      <TextAreaComponent
        {...args}
        label="This is a textarea with an error"
        isRequired
        error="This is an error."
      />
    </div>
  ),
};

export default meta;
