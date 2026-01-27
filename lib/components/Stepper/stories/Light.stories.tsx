import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stepper as StepperComponent } from '../Stepper';
import type { Step } from '../Stepper.types';

type Story = StoryObj<typeof StepperComponent>;

const meta: Meta<typeof StepperComponent> = {
  title: 'In Review/Stepper/Light',
  component: StepperComponent,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const basicSteps: Step[] = [
  { id: 1, label: 'Select platform', status: 'completed' },
  { id: 2, label: 'Set up cluster', status: 'active' },
  { id: 3, label: 'Preparing', status: 'pending' },
];

const stepsWithError: Step[] = [
  { id: 1, label: 'Initial configuration', status: 'completed' },
  { id: 2, label: 'CivoStack details', status: 'pending' },
  { id: 3, label: 'Control plane', status: 'error' },
  { id: 4, label: 'Initial configuration', status: 'pending' },
];

const allStatesSteps: Step[] = [
  { id: 1, label: 'Current step', status: 'active' },
  { id: 2, label: 'Default step', status: 'pending' },
  { id: 3, label: 'Completed', status: 'completed' },
  { id: 4, label: 'Error', status: 'error' },
];

export const VerticalBasic: Story = {
  name: 'Vertical - Basic',
  render: () => (
    <div className="max-w-xs">
      <StepperComponent steps={basicSteps} orientation="vertical" />
    </div>
  ),
};

export const VerticalWithError: Story = {
  name: 'Vertical - With Error State',
  render: () => (
    <div className="max-w-xs">
      <StepperComponent steps={stepsWithError} orientation="vertical" />
    </div>
  ),
};

export const VerticalNoConnector: Story = {
  name: 'Vertical - Without Connectors',
  render: () => (
    <div className="max-w-xs">
      <StepperComponent
        steps={basicSteps}
        orientation="vertical"
        showConnector={false}
      />
    </div>
  ),
};

export const HorizontalBasic: Story = {
  name: 'Horizontal - Basic',
  render: () => (
    <div className="max-w-2xl">
      <StepperComponent steps={basicSteps} orientation="horizontal" />
    </div>
  ),
};

export const HorizontalAllStates: Story = {
  name: 'Horizontal - All States',
  render: () => (
    <div className="max-w-2xl">
      <StepperComponent steps={allStatesSteps} orientation="horizontal" />
    </div>
  ),
};

export const AllStatesVertical: Story = {
  name: 'All States - Vertical',
  render: () => (
    <div className="flex gap-12">
      <div className="flex flex-col gap-6">
        <h4 className="text-sm font-medium text-slate-500">
          Individual States
        </h4>
        <StepperComponent
          steps={[{ id: 1, label: 'Active step', status: 'active' }]}
          showConnector={false}
        />
        <StepperComponent
          steps={[{ id: 2, label: 'Pending step', status: 'pending' }]}
          showConnector={false}
        />
        <StepperComponent
          steps={[{ id: 3, label: 'Completed step', status: 'completed' }]}
          showConnector={false}
        />
        <StepperComponent
          steps={[{ id: 4, label: 'Error step', status: 'error' }]}
          showConnector={false}
        />
      </div>

      <div className="flex flex-col gap-6">
        <h4 className="text-sm font-medium text-slate-500">With Connectors</h4>
        <StepperComponent
          steps={[
            { id: 1, label: 'Active step', status: 'active' },
            { id: 2, label: 'Next step', status: 'pending' },
          ]}
        />
        <StepperComponent
          steps={[
            { id: 1, label: 'Completed step', status: 'completed' },
            { id: 2, label: 'Next step', status: 'pending' },
          ]}
        />
        <StepperComponent
          steps={[
            { id: 1, label: 'Error step', status: 'error' },
            { id: 2, label: 'Next step', status: 'pending' },
          ]}
        />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Size Variants',
  render: () => (
    <div className="flex gap-12">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium text-slate-500 mb-2">Small</h4>
        <StepperComponent steps={basicSteps} size="small" />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium text-slate-500 mb-2">Default</h4>
        <StepperComponent steps={basicSteps} size="default" />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium text-slate-500 mb-2">Large</h4>
        <StepperComponent steps={basicSteps} size="large" />
      </div>
    </div>
  ),
};

export const WithDescriptions: Story = {
  name: 'With Descriptions',
  render: () => {
    const stepsWithDescription: Step[] = [
      {
        id: 1,
        label: 'Select platform',
        description: 'Choose your cloud provider',
        status: 'completed',
      },
      {
        id: 2,
        label: 'Set up cluster',
        description: 'Configure your cluster settings',
        status: 'active',
      },
      {
        id: 3,
        label: 'Preparing',
        description: 'Finalizing your setup',
        status: 'pending',
      },
    ];

    return (
      <div className="max-w-sm">
        <StepperComponent steps={stepsWithDescription} />
      </div>
    );
  },
};

export const WithCurrentStepProp: Story = {
  name: 'Auto-calculated Status',
  render: () => {
    const steps: Step[] = [
      { id: 1, label: 'Account setup' },
      { id: 2, label: 'Personal info' },
      { id: 3, label: 'Review' },
      { id: 4, label: 'Complete' },
    ];

    return (
      <div className="flex gap-12">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-slate-500 mb-2">
            currentStep = 0
          </h4>
          <StepperComponent steps={steps} currentStep={0} />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-slate-500 mb-2">
            currentStep = 1
          </h4>
          <StepperComponent steps={steps} currentStep={1} />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-slate-500 mb-2">
            currentStep = 2
          </h4>
          <StepperComponent steps={steps} currentStep={2} />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-slate-500 mb-2">
            currentStep = 3
          </h4>
          <StepperComponent steps={steps} currentStep={3} />
        </div>
      </div>
    );
  },
};

export const Clickable: Story = {
  name: 'Clickable Steps',
  render: () => (
    <div className="max-w-xs">
      <p className="text-sm text-slate-500 mb-4">
        Click any step to trigger the onStepClick callback
      </p>
      <StepperComponent
        steps={basicSteps}
        clickable
        onStepClick={(step, index) => {
          alert(`Clicked step ${index + 1}: ${step.label}`);
        }}
      />
    </div>
  ),
};

export const HorizontalSizes: Story = {
  name: 'Horizontal - Size Variants',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-sm font-medium text-slate-500 mb-4">Small</h4>
        <div className="max-w-xl">
          <StepperComponent
            steps={basicSteps}
            orientation="horizontal"
            size="small"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-slate-500 mb-4">Default</h4>
        <div className="max-w-xl">
          <StepperComponent
            steps={basicSteps}
            orientation="horizontal"
            size="default"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-slate-500 mb-4">Large</h4>
        <div className="max-w-xl">
          <StepperComponent
            steps={basicSteps}
            orientation="horizontal"
            size="large"
          />
        </div>
      </div>
    </div>
  ),
};

export const CustomClassNames: Story = {
  name: 'Custom Class Names',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-sm font-medium text-slate-500 mb-4">
          Custom styling with classNames prop
        </h4>
        <StepperComponent
          steps={basicSteps}
          classNames={{
            root: 'p-4 bg-slate-50 rounded-lg',
            indicator: 'shadow-md',
            label: 'font-bold',
            connector: 'opacity-50',
          }}
        />
      </div>
    </div>
  ),
};
