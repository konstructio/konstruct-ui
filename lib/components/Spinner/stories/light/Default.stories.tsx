import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from '../../Spinner';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = {
  title: 'In Review/Spinner/Light/Default',
  component: Spinner,
};

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-3 h-[400px]">
      <Spinner text="Getting everything ready..." />
    </div>
  ),
};

export default meta;
