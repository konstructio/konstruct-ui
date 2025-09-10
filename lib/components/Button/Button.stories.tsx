import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check } from 'react-feather';

import PagesStackIcon from '@/assets/icons/pages-stack.svg';
import HelpIcon from '@/assets/icons/help.svg';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button',
  component: Button,
};

export const Primary: Story = {
  render: () => (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <h6>Default Appearance</h6>
        <Button variant="primary" theme="kubefirst">
          Primary Kubefirst
        </Button>

        <Button variant="primary" disabled>
          Primary Disabled
        </Button>

        <Button variant="primary" theme="civo">
          Primary Civo
        </Button>

        <Button variant="primary" theme="civo" disabled>
          Primary Civo Disabled
        </Button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <h6>Compact Appearance</h6>
        <Button variant="primary" theme="kubefirst" appearance="compact">
          Primary Kubefirst
        </Button>

        <Button variant="primary" disabled appearance="compact">
          Primary Disabled
        </Button>

        <Button variant="primary" theme="civo" appearance="compact">
          Primary Civo
        </Button>

        <Button variant="primary" theme="civo" disabled appearance="compact">
          Primary Civo Disabled
        </Button>
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col items-center gap-3">
        <h6>Default Style</h6>
        <Button variant="secondary" theme="kubefirst">
          Secondary Kubefirst
        </Button>

        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>

        <Button variant="secondary" theme="civo">
          Secondary Civo
        </Button>

        <Button variant="secondary" theme="civo" disabled>
          Secondary Civo Disabled
        </Button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <h6>Compact Appearance</h6>
        <Button variant="secondary" theme="kubefirst" appearance="compact">
          Secondary Kubefirst
        </Button>

        <Button variant="secondary" disabled appearance="compact">
          Secondary Disabled
        </Button>

        <Button variant="secondary" theme="civo" appearance="compact">
          Secondary Civo
        </Button>

        <Button variant="secondary" theme="civo" disabled appearance="compact">
          Secondary Civo Disabled
        </Button>

        <div
          data-theme="civo-dark"
          className="bg-gray-900 w-full h-[100px] flex items-center justify-center"
        >
          <Button variant="secondary" theme="civo">
            Secondary Civo Dark
          </Button>
        </div>
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
        <h6>Default Appearance</h6>
        <Button {...args} />

        <Button variant="danger" version="alternate">
          Secondary Danger
        </Button>

        <Button {...args} theme="civo" disabled>
          Danger Civo Disabled
        </Button>

        <Button {...args} disabled>
          Danger Disabled
        </Button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <h6>Compact Appearance</h6>
        <Button {...args} appearance="compact" />

        <Button variant="danger" version="alternate" appearance="compact">
          Secondary Danger
        </Button>

        <Button {...args} theme="civo" disabled appearance="compact">
          Danger Civo Disabled
        </Button>

        <Button {...args} disabled appearance="compact">
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
        <h6>Default Appearance</h6>
        <Button variant="text" theme="kubefirst">
          Text Kubefirst Default Version
        </Button>

        <Button variant="text" theme="civo">
          Text Civo Default Version
        </Button>

        <Button variant="text" theme="kubefirst" version="alternate">
          Text Kubefirst Alternative Version
        </Button>

        <Button variant="text" theme="civo" version="alternate">
          Text Civo Alternative Version
        </Button>

        <Button variant="text" theme="civo" disabled>
          Text Civo Disabled
        </Button>

        <Button variant="text" disabled>
          Text Disabled
        </Button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <h6>Compact Appearance</h6>
        <Button variant="text" theme="kubefirst" appearance="compact">
          Text Kubefirst Default Version
        </Button>

        <Button variant="text" theme="civo" appearance="compact">
          Text Civo Default Version
        </Button>

        <Button
          variant="text"
          theme="kubefirst"
          appearance="compact"
          version="alternate"
        >
          Text Kubefirst Alternative Version
        </Button>

        <Button
          variant="text"
          theme="civo"
          appearance="compact"
          version="alternate"
        >
          Text Civo Alternative Version
        </Button>

        <Button variant="text" theme="civo" disabled appearance="compact">
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
        <h6>Default Appearance</h6>
        <Button {...args} theme="kubefirst">
          <Check className="w-5 h-5" /> Verified
        </Button>

        <Button {...args} theme="civo">
          <Check className="w-5 h-5" /> Verified
        </Button>

        <Button {...args} theme="civo" disabled>
          <Check className="w-5 h-5" /> Verified Disabled
        </Button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-8">
        <h6>Compact Appearance</h6>
        <Button {...args} theme="kubefirst" appearance="compact">
          <Check className="w-4 h-4" /> Verified
        </Button>

        <Button {...args} theme="civo" appearance="compact">
          <Check className="w-4 h-4" /> Verified
        </Button>

        <Button {...args} theme="civo" disabled appearance="compact">
          <Check className="w-4 h-4" /> Verified Disabled
        </Button>
      </div>
    </div>
  ),
};

export const Circle: Story = {
  args: {
    shape: 'circle',
  },
  render: (args) => (
    <div className="w-full max-w-[300px]">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-600">Button medium size</p>

          <div className="flex gap-3">
            <Button {...args} size="medium">
              <PagesStackIcon />
            </Button>
            <Button {...args} size="medium" theme="civo">
              <PagesStackIcon />
            </Button>
            <Button {...args} size="medium" variant="danger">
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
            <Button {...args} size="large" theme="civo">
              <HelpIcon />
            </Button>
            <Button {...args} size="large" variant="danger">
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
