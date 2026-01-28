import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Stepper as StepperComponent } from '../Stepper';
import type { Step } from '../Stepper.types';

type Story = StoryObj<typeof StepperComponent>;

const meta: Meta<typeof StepperComponent> = {
  title: 'In Review/Stepper/Dark',
  component: StepperComponent,
  parameters: {
    layout: 'padded',
    theme: 'dark',
  },
};

export default meta;

const inlineSteps: Step[] = [
  { id: 1, label: 'Initial configuration', status: 'active' },
  { id: 2, label: 'CivoStack details', status: 'pending' },
  { id: 3, label: 'Control plane', status: 'error' },
  { id: 4, label: 'Initial configuration', status: 'completed' },
];

const stackedSteps: Step[] = [
  { id: 1, label: 'Select platform', status: 'completed' },
  { id: 2, label: 'Set up cluster', status: 'active' },
  { id: 3, label: 'Preparing', status: 'pending' },
];

const horizontalSteps: Step[] = [
  { id: 1, label: 'Current step', status: 'active' },
  { id: 2, label: 'Default step', status: 'pending' },
  { id: 3, label: 'Error', status: 'error' },
  { id: 4, label: 'Completed', status: 'completed' },
];

const clickableSteps: Step[] = [
  {
    id: 1,
    label: 'Select platform',
    status: 'completed',
    onClick: () => action('step-click')('Step 1 clicked (custom callback)'),
  },
  { id: 2, label: 'Set up cluster', status: 'active' },
  { id: 3, label: 'Preparing', status: 'pending' },
  { id: 4, label: 'Review', status: 'pending', disabled: true },
];

export const Default: Story = {
  name: 'Dark - Inline (sm)',
  parameters: { theme: 'dark' },
  render: () => (
    <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="sm" />
    </div>
  ),
};

export const InlineMd: Story = {
  name: 'Dark - Inline (md)',
  parameters: { theme: 'dark' },
  render: () => (
    <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="md" />
    </div>
  ),
};

export const InlineLg: Story = {
  name: 'Dark - Inline (lg)',
  parameters: { theme: 'dark' },
  render: () => (
    <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="lg" />
    </div>
  ),
};

export const Stacked: Story = {
  name: 'Dark - Stacked (lg)',
  parameters: { theme: 'dark' },
  render: () => (
    <div className="max-w-fit">
      <StepperComponent steps={stackedSteps} variant="stacked" size="lg" />
    </div>
  ),
};

export const Horizontal: Story = {
  name: 'Dark - Horizontal (md)',
  parameters: { theme: 'dark' },
  render: () => (
    <div className="max-w-fit">
      <StepperComponent
        steps={horizontalSteps}
        variant="horizontal"
        size="md"
      />
    </div>
  ),
};

export const Clickable: Story = {
  name: 'Dark - Clickable',
  parameters: { theme: 'dark' },
  render: () => (
    <StepperComponent
      steps={clickableSteps}
      size="md"
      clickable
      onStepClick={(step, index) =>
        action('onStepClick')(`Step ${index + 1}: ${step.label}`)
      }
    />
  ),
};
