import type { Meta, StoryObj } from '@storybook/react-vite';

import { BadgeGroup as BadgeGroupComponent } from './BadgeGroup';

type Story = StoryObj<typeof BadgeGroupComponent>;

const meta = {
  title: 'In Review/BadgeGroup',
  component: BadgeGroupComponent,
} satisfies Meta<typeof BadgeGroupComponent>;

const tags = [
  { id: 1, label: 'web' },
  { id: 2, label: 'database' },
  { id: 3, label: 'staging' },
  { id: 4, label: 'europe-west' },
  { id: 5, label: 'critical' },
  { id: 6, label: 'backup-daily' },
];

export const BadgeGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A row of badges that collapses the ones that do not fit into a focusable "+N" badge whose tooltip lists the hidden labels; the full list is always available to screen readers. `maxVisible` limits by count (teams PermissionBadges) and `maxWidth` measures the labels to fit a column width (compute and vpc TagOverflowList).',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <BadgeGroupComponent items={tags} maxVisible={3} />
      <BadgeGroupComponent items={tags} maxWidth={260} variant="info" />
      <BadgeGroupComponent items={tags.slice(0, 2)} maxWidth={260} />
    </div>
  ),
};

export default meta;
