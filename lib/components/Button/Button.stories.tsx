import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'react-feather';

import PagesStackIcon from '@/assets/icons/pages-stack.svg';
import HelpIcon from '@/assets/icons/help.svg';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
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

        <Button variant="primary" disabled>
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

        <Button variant="secondary" disabled>
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
  render: (args) => (
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
  ),
};

export const Circle: Story = {
  args: {
    variant: 'circle',
  },
  render: (args) => (
    <div className="w-full max-w-[200px]">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-600">Button medium size</p>

          <div className="flex gap-3">
            <Button {...args} size="medium">
              <PagesStackIcon />
            </Button>
            <Button {...args} size="medium" theme="colony">
              <PagesStackIcon />
            </Button>
            <Button {...args} size="medium" theme="civo">
              <PagesStackIcon />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-600">Button large size</p>

          <div className="flex gap-3">
            <Button {...args} size="large">
              <HelpIcon />
            </Button>
            <Button {...args} size="large" theme="colony">
              <HelpIcon />
            </Button>
            <Button {...args} size="large" theme="civo">
              <HelpIcon />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-600">Button disabled</p>

          <div className="flex gap-3">
            <Button {...args} size="medium" disabled>
              <PagesStackIcon />
            </Button>

            <Button {...args} size="medium" disabled>
              <PagesStackIcon />
            </Button>

            <Button {...args} size="medium" disabled>
              <PagesStackIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default meta;
