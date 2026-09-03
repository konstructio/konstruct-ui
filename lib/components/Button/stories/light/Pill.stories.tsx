import type { Meta, StoryObj } from '@storybook/react-vite';

import { ArrowBackIcon } from '@/assets/icons/components';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Light/Pill',
  component: Button,
};

export const Pill: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`shape="pill"` rounds the button fully. With `asChild` and `disabled`, the rendered child (a link here) becomes inert and `aria-disabled` instead of receiving an invalid `disabled` attribute.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-5 w-fit">
      <Button shape="pill">
        Continue
        <ArrowBackIcon className="rotate-180" />
      </Button>

      <Button shape="pill" variant="secondary">
        Secondary pill
      </Button>

      <Button asChild>
        <a href="#billing">Manage billing</a>
      </Button>

      <Button asChild disabled>
        <a href="#billing">Manage billing (disabled link)</a>
      </Button>
    </div>
  ),
};

export default meta;
