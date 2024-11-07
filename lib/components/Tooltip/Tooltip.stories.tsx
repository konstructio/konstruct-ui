import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';

import { Tooltip as TooltipComponent } from './Tooltip';

type Story = StoryObj<typeof TooltipComponent>;

const meta: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
};

export const Tooltip: Story = {
  render: () => {
    const FancyHover = () => <span className="text-white">Hello!</span>;

    return (
      <div className="w-[350px] flex flex-col gap-3">
        <TooltipComponent content={<FancyHover />}>
          <Button>Hover me!</Button>
        </TooltipComponent>

        <div className="mt-5" />

        <TooltipComponent content={<FancyHover />}>
          <span className="p-2">Just is a text</span>
        </TooltipComponent>
      </div>
    );
  },
};

export default meta;
