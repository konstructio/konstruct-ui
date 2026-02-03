import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Dark/DangerAlternate',
  component: Button,
};

export const DangerAlternate: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Button className="w-fit" variant="danger" version="alternate">
        Danger
      </Button>

      <Button className="w-fit" variant="danger" version="alternate">
        <ChevronLeft className="w-4 h-4" /> Icon left
      </Button>

      <Button className="w-fit" variant="danger" version="alternate">
        Icon right <ChevronRight className="w-4 h-4" />
      </Button>

      <Button className="w-fit" variant="danger" version="alternate" disabled>
        Danger disabled
      </Button>
    </div>
  ),
};

export default meta;
