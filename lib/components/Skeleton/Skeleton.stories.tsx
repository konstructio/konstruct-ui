import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '../Card/Card';

import { Skeleton as SkeletonComponent } from './Skeleton';

type Story = StoryObj<typeof SkeletonComponent>;

const meta = {
  title: 'In Review/Skeleton',
  component: SkeletonComponent,
} satisfies Meta<typeof SkeletonComponent>;

export const Skeleton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Pulsing placeholders with a `role="status"` wrapper. `shape` picks a rectangle, a text line or a circle, `count` repeats it and `className` sizes each block. Settings, billing and dashboard-manager built these blocks by hand.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6 max-w-100">
      <Card className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <SkeletonComponent shape="circle" wrapperClassName="w-auto" />
          <SkeletonComponent shape="text" count={2} label="Loading member" />
        </div>
        <SkeletonComponent shape="text" count={3} label="Loading activity" />
      </Card>

      <SkeletonComponent className="h-8 w-40" label="Loading balance" />
    </div>
  ),
};

export default meta;
