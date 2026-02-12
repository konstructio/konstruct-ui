import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cpu, Zap } from 'react-feather';

import { Typography } from '@/components/Typography/Typography';

import { ButtonGroup as ButtonGroupComponent } from '../ButtonGroup';

type Story = StoryObj<typeof ButtonGroupComponent>;

const meta: Meta<typeof ButtonGroupComponent> = {
  title: 'In Review/ButtonGroup/Dark',
  component: ButtonGroupComponent,
};

export const Default: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <div className="flex flex-col gap-8 w-200">
      <section className="flex flex-col gap-3">
        <Typography component="h6">Simple Toggle</Typography>
        <ButtonGroupComponent
          name="processor"
          options={[
            { value: 'cpu', label: 'CPU' },
            { value: 'gpu', label: 'GPU' },
          ]}
          defaultValue="cpu"
        />
      </section>

      <section className="flex flex-col gap-3">
        <Typography component="h6">With Icons</Typography>
        <ButtonGroupComponent
          name="processor-icons"
          options={[
            { value: 'cpu', label: 'CPU', icon: <Cpu className="w-4 h-4" /> },
            { value: 'gpu', label: 'GPU', icon: <Zap className="w-4 h-4" /> },
          ]}
          defaultValue="cpu"
        />
      </section>

      <section className="flex flex-col gap-3">
        <Typography component="h6">With Descriptions</Typography>
        <ButtonGroupComponent
          name="instance-type"
          label="Instance Type"
          isRequired
          options={[
            {
              value: 'standard',
              label: 'Standard',
              secondaryLabel: '$0.10/hr',
              description: 'Guaranteed availability for your workloads.',
            },
            {
              value: 'spot',
              label: 'Spot',
              secondaryLabel: '$0.03/hr',
              description: 'Lower cost, may be interrupted with 48h notice.',
            },
          ]}
          defaultValue="standard"
        />
      </section>
    </div>
  ),
};

export default meta;
