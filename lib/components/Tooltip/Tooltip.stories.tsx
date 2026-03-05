import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/Button/Button';

import { Tooltip as TooltipComponent } from './Tooltip';

type Story = StoryObj<typeof TooltipComponent>;

const meta: Meta<typeof TooltipComponent> = {
  title: 'In Review/Tooltip',
  component: TooltipComponent,
};

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center h-50">
      <TooltipComponent content="This is a tooltip">
        <Button>Hover me</Button>
      </TooltipComponent>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="Top tooltip" side="top">
        <Button>Top</Button>
      </TooltipComponent>

      <TooltipComponent content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </TooltipComponent>

      <TooltipComponent content="Left tooltip" side="left">
        <Button>Left</Button>
      </TooltipComponent>

      <TooltipComponent content="Right tooltip" side="right">
        <Button>Right</Button>
      </TooltipComponent>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent
        content="Danger tooltip"
        bgClassName="bg-red-500"
        arrowClassName="fill-red-500"
        textClassName="text-white"
      >
        <Button variant="danger">Red</Button>
      </TooltipComponent>

      <TooltipComponent
        content="Success tooltip"
        bgClassName="bg-green-600"
        arrowClassName="fill-green-600"
        textClassName="text-white"
      >
        <Button>Green</Button>
      </TooltipComponent>

      <TooltipComponent
        content="Info tooltip"
        bgClassName="bg-blue-500"
        arrowClassName="fill-blue-500"
        textClassName="text-white"
      >
        <Button variant="secondary">Blue</Button>
      </TooltipComponent>
    </div>
  ),
};

export const WithReactNodeContent: Story = {
  render: () => (
    <div className="flex items-center justify-center h-50">
      <TooltipComponent
        content={
          <span className="font-semibold">
            Rich <em>content</em> tooltip
          </span>
        }
      >
        <Button>ReactNode content</Button>
      </TooltipComponent>
    </div>
  ),
};

export default meta;
