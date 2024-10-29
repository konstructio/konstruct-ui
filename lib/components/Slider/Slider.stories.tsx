import type { Meta, StoryObj } from '@storybook/react';

import { Slider as SliderComponent } from './Slider';

type Story = StoryObj<typeof SliderComponent>;

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
};

export const Slider: Story = {
  render: () => (
    <div className="max-w-[350px]">
      <SliderComponent />
    </div>
  ),
};

export default meta;
