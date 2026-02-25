import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from '../../Spinner';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = {
  title: 'In Review/Spinner/Light/Sizes',
  component: Spinner,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-12 items-end h-[400px]">
      <div className="flex-1 h-full">
        <Spinner size="sm" text="Small" />
      </div>
      <div className="flex-1 h-full">
        <Spinner size="md" text="Medium" />
      </div>
      <div className="flex-1 h-full">
        <Spinner size="lg" text="Large" />
      </div>
    </div>
  ),
};

export default meta;
