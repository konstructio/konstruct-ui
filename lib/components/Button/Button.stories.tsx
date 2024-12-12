import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'react-feather/';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
};

export const Primary: Story = {
  render: () => (
    <div className="max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <Button variant="primary" theme="kubefirst">
          Primary Kubefirst
        </Button>

        <Button variant="primary" theme="colony">
          Primary Colony
        </Button>

        <Button variant="primary" theme="konstruct">
          Primary Konstruct
        </Button>

        <Button variant="primary" theme="civo">
          Primary Civo
        </Button>
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const TextButton: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const IconButton: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => {
    return (
      <Button {...args}>
        <Check className="w-5 h-5" /> Verified
      </Button>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  render: (args) => (
    <div className="flex gap-8">
      <div className="flex flex-col items-center gap-3">
        <p>Normal button</p>
        <Button variant="primary" {...args} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p>Secondary button</p>
        <Button variant="secondary" {...args} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p>Text button</p>
        <Button variant="text" {...args} />
      </div>
    </div>
  ),
};

export default meta;
