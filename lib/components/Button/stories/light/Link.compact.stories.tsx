import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Light/LinkCompact',
  component: Button,
};

export const LinkCompact: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button className="w-fit" variant="link" appearance="compact">
        Link
      </Button>

      <Button className="w-fit" variant="link" appearance="compact">
        <ChevronLeft className="w-4 h-4" /> Icon left
      </Button>

      <Button className="w-fit" variant="link" appearance="compact">
        Icon right <ChevronRight className="w-4 h-4" />
      </Button>

      <Button className="w-fit" variant="link" appearance="compact" disabled>
        Link disabled
      </Button>
    </div>
  ),
};

export default meta;
