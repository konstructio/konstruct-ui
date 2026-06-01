import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A multi-step progress indicator with inline, stacked or horizontal layouts. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    steps: {
      control: { type: 'object' },
      description: 'Array of steps to display',
    },
    currentStep: {
      control: { type: 'number' },
      description: 'Index of the current active step (0-based)',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['inline', 'stacked', 'horizontal'],
      description: 'Layout variant',
    },
    orientation: {
      control: { type: 'inline-radio' },
      options: ['vertical', 'horizontal'],
      description: 'Stepper orientation',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the step indicators',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether steps are clickable',
    },
    showConnector: {
      control: { type: 'boolean' },
      description: 'Show connector lines between steps',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onStepClick: { action: 'stepClicked', table: { disable: true } },
  },
  args: {
    currentStep: 1,
    variant: 'inline',
    orientation: 'vertical',
    size: 'sm',
    clickable: false,
    showConnector: true,
    steps: [
      { id: '1', label: 'Account', description: 'Create an account' },
      { id: '2', label: 'Profile', description: 'Add your details' },
      { id: '3', label: 'Confirm', description: 'Review and submit' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Playground: Story = {};
