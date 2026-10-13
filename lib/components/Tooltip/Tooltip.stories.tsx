import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';

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

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`disabled` keeps the children mounted exactly as they are and never opens the tooltip, so it can be toggled while the user types in a field without remounting it.',
      },
    },
  },
  render: () => (
    <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="You will not see me" disabled>
        <Button>Disabled tooltip</Button>
      </TooltipComponent>
      <TooltipComponent content="But you will see me">
        <Button>Enabled tooltip</Button>
      </TooltipComponent>
    </div>
  ),
};

export const OverlayOnField: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`asOverlay` renders an invisible trigger over the children instead of wrapping them, for elements that cannot be wrapped or are disabled (native pointer events do not fire on disabled controls). `overlayClassName` positions the trigger; here it covers only the right edge of the input so typing still works, and the tooltip is enabled only when the name is taken.',
      },
    },
  },
  render: function OverlayOnFieldStory() {
    const [name, setName] = useState('');
    const isTaken = name.trim().toLowerCase() === 'taken';

    return (
      <div className="flex flex-col gap-4 w-80">
        <TooltipComponent
          asOverlay
          side="right"
          content={`The name "${name}" is already in use`}
          disabled={!isTaken}
          overlayClassName="right-0 top-7 h-10 w-10"
        >
          <Input
            label="Name"
            value={name}
            error={isTaken ? 'This name is already in use' : undefined}
            helperText='Type "taken" to see the tooltip'
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </TooltipComponent>

        <TooltipComponent
          asOverlay
          side="right"
          content="This field is locked while the resource is running"
        >
          <Input label="Locked field" value="prod-cluster" disabled readOnly />
        </TooltipComponent>
      </div>
    );
  },
};

export default meta;
