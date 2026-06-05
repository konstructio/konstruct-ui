import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A horizontal progress indicator with optional left and right content. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    percent: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Progress percentage (0-100)',
    },
    status: {
      control: { type: 'inline-radio' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Status color of the bar fill',
    },
    leftContent: {
      control: { type: 'text' },
      description: 'Content displayed on the left side',
    },
    rightContent: {
      control: { type: 'text' },
      description: 'Content displayed on the right side',
    },
    fillClassName: {
      control: { type: 'text' },
      description: 'Custom CSS class for the bar fill',
    },
    trackClassName: {
      control: { type: 'text' },
      description: 'Custom CSS class for the track background',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    percent: 60,
    status: 'default',
    leftContent: '60%',
    rightContent: '300/500 GB',
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Playground: Story = {};
