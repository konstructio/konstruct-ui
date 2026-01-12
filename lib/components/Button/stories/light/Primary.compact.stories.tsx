import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Light',
  component: Button,
};

export const PrimaryCompact: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button className="w-fit" variant="primary" appearance="compact">
        Primary
      </Button>

      <Button className="w-fit" variant="primary" appearance="compact">
        <ChevronLeft className="w-4 h-4" /> Icon left
      </Button>

      <Button className="w-fit" variant="primary" appearance="compact">
        Icon right <ChevronRight className="w-4 h-4" />
      </Button>

      <Button className="w-fit" variant="primary" appearance="compact" disabled>
        Primary disabled
      </Button>
    </div>
  ),
};

export default meta;
