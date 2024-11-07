import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';

import { Tooltip as TooltipComponent } from './Tooltip';

type Story = StoryObj<typeof TooltipComponent>;

const meta: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
};

export const Tooltip: Story = {
  render: () => (
    <div className="w-[350px] flex flex-col gap-3">
      <TooltipComponent>
        <Button>Hover me</Button>
      </TooltipComponent>
    </div>
  ),
};

export default meta;
