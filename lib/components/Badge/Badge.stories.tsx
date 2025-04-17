import type { Meta, StoryObj } from '@storybook/react';

import { Badge as BadgeComponent } from './Badge';

type Story = StoryObj<typeof BadgeComponent>;

const meta: Meta<typeof BadgeComponent> = {
  title: 'In Review/Badge',
  component: BadgeComponent,
};

export const Badge = {
  args: {
    dismissible: true,
    label: 'Badge',
    loading: true,
  },
  render: (args) => (
    <div className="max-w-[350px] flex flex-col gap-3">
      <BadgeComponent {...args} />
      <BadgeComponent variant="warning" {...args} />
      <BadgeComponent variant="danger" {...args} />
      <BadgeComponent variant="success" {...args} />
      <BadgeComponent variant="info" {...args} />
    </div>
  ),
} satisfies Story;

export default meta;
