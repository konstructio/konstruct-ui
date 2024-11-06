import type { Meta, StoryObj } from '@storybook/react';

import { Slider as SliderComponent } from './Slider';

type Story = StoryObj<typeof SliderComponent>;

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
};

export const Slider: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: [50],
    label: 'Slider',
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <SliderComponent {...args} />
    </div>
  ),
};

export default meta;
