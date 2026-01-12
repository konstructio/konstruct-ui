import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Dark',
  component: Button,
};

export const TertiaryCompact: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Button className="w-fit" variant="tertiary" appearance="compact">
        Tertiary
      </Button>

      <Button className="w-fit" variant="tertiary" appearance="compact">
        <ChevronLeft className="w-4 h-4" /> Icon left
      </Button>

      <Button className="w-fit" variant="tertiary" appearance="compact">
        Icon right <ChevronRight className="w-4 h-4" />
      </Button>

      <Button
        className="w-fit"
        variant="tertiary"
        appearance="compact"
        disabled
      >
        Tertiary disabled
      </Button>
    </div>
  ),
};

export default meta;
