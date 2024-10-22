import type { Meta, StoryObj } from '@storybook/react';

import { TextArea as TextAreaComponent } from './TextArea';

type Story = StoryObj<typeof TextAreaComponent>;

const meta: Meta<typeof TextAreaComponent> = {
  component: TextAreaComponent,
};

export const TextArea: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent
        {...args}
        label="This is a textarea with Kubefirst theme"
      />
      <TextAreaComponent
        {...args}
        theme="colony"
        label="This is a textarea with Colony theme"
      />
      <TextAreaComponent
        {...args}
        theme="konstruct"
        label="This is a textarea with Konstruct theme"
      />
    </div>
  ),
};

export default meta;
