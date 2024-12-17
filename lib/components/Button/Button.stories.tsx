import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'react-feather/';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
};

export const Primary: Story = {
  render: () => (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <Button variant="primary" theme="kubefirst">
          Primary Kubefirst
        </Button>

        <Button variant="primary" theme="colony">
          Primary Colony
        </Button>

        <Button variant="primary" theme="civo">
          Primary Civo
        </Button>

        <Button variant="primary" theme="civo" disabled>
          Primary Disabled
        </Button>
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <Button variant="secondary" theme="kubefirst">
          Secondary Kubefirst
        </Button>

        <Button variant="secondary" theme="colony">
          Secondary Colony
        </Button>

        <Button variant="secondary" theme="civo">
          Secondary Civo
        </Button>

        <Button variant="secondary" theme="civo" disabled>
          Secondary Disabled
        </Button>
      </div>
    </div>
  ),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
  render: (args) => (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <Button {...args} />

        <Button {...args} disabled>
          Danger Disabled
        </Button>
      </div>
    </div>
  ),
};

export const TextButton: Story = {
  render: () => (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <Button variant="text" theme="kubefirst">
          Text Kubefirst Default Version
        </Button>

        <Button variant="text" theme="colony">
          Text Colony Default Version
        </Button>

        <Button variant="text" theme="civo">
          Text Civo Default Version
        </Button>

        <Button variant="text" theme="kubefirst" version="alternate">
          Text Kubefirst Alternative Version
        </Button>

        <Button variant="text" theme="colony" version="alternate">
          Text Colony Alternative Version
        </Button>

        <Button variant="text" theme="civo" version="alternate">
          Text Civo Alternative Version
        </Button>

        <Button variant="text" theme="civo" disabled>
          Text Disabled
        </Button>
      </div>
    </div>
  ),
};

export const IconButton: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => {
    return (
      <div className="w-full max-w-[350px]">
        <div className="flex flex-col items-center gap-3">
          <Button {...args} theme="kubefirst">
            <Check className="w-5 h-5" /> Verified
          </Button>

          <Button {...args} theme="colony">
            <Check className="w-5 h-5" /> Verified
          </Button>

          <Button {...args} theme="civo">
            <Check className="w-5 h-5" /> Verified
          </Button>

          <Button {...args} theme="civo" disabled>
            <Check className="w-5 h-5" /> Verified Disabled
          </Button>
        </div>
      </div>
    );
  },
};

export default meta;
