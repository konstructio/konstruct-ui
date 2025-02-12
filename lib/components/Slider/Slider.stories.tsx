import type { Meta, StoryObj } from '@storybook/react';

import { Slider as SliderComponent } from './Slider';

type Story = StoryObj<typeof SliderComponent>;

const meta: Meta<typeof SliderComponent> = {
  title: 'In Review/Slider',
  component: SliderComponent,
};

export const Slider: Story = {
  args: {
    showValue: true,
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <SliderComponent
        theme="kubefirst"
        label="Slider with Kubefirst theme"
        defaultValue={[50]}
        {...args}
      />

      <div className="mt-10" />

      <SliderComponent
        theme="colony"
        label="Slider with Colony theme"
        defaultValue={[35]}
        {...args}
      />
    </div>
  ),
};

export default meta;
