import type { Meta, StoryObj } from '@storybook/react';

import { TextArea as TextAreaComponent } from './TextArea';

type Story = StoryObj<typeof TextAreaComponent>;

const meta: Meta<typeof TextAreaComponent> = {
  component: TextAreaComponent,
};

export const TextArea: Story = {
  args: {
    label: 'This is a textarea',
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent {...args} />
    </div>
  ),
};

export default meta;
