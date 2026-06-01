import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button/Button';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A tooltip that appears on hover or focus over a trigger element. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Tooltip text or content',
    },
    side: {
      control: { type: 'inline-radio' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to trigger',
    },
    sideOffset: {
      control: { type: 'number' },
      description: 'Distance from trigger in px',
    },
    delayDuration: {
      control: { type: 'number' },
      description: 'Delay before showing tooltip in ms',
    },
    bgClassName: {
      control: { type: 'text' },
      description: 'Background color class for tooltip',
    },
    textClassName: {
      control: { type: 'text' },
      description: 'Text color class',
    },
  },
  args: {
    content: 'Click to perform action',
    side: 'top',
    sideOffset: 4,
    delayDuration: 200,
  },
  render: (args) => {
    return (
      <div className="p-12 flex items-center justify-center">
        <Tooltip {...args}>
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {};
