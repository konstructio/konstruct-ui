import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput as NumberInputComponent } from './NumberInput';

type Story = StoryObj<typeof NumberInputComponent>;

const meta: Meta<typeof NumberInputComponent> = {
  title: 'Design System/NumberInput',
  component: NumberInputComponent,
};

export const NumberInput: Story = {
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-4">
      <NumberInputComponent theme="colony" label="Colony" {...args} />
      <NumberInputComponent theme="kubefirst" label="Kubefirst" {...args} />
    </div>
  ),
};

export default meta;
