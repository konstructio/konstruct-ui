import type { Meta, StoryObj } from '@storybook/react';

import { Badge as BadgeComponent } from './Badge';

type Story = StoryObj<typeof BadgeComponent>;

const meta: Meta<typeof BadgeComponent> = {
  title: 'In Review/Badge',
  component: BadgeComponent,
};

export const Badge = {
  args: {
    label: 'Badge',
  },
  render: (args) => (
    <div className="flex flex-col gap-3">
      <h3>Badge Small</h3>
      <div className="max-w-[350px] flex gap-3">
        <div className="flex flex-col gap-3">
          <BadgeComponent size="small" {...args} />
          <BadgeComponent size="small" variant="warning" {...args} />
          <BadgeComponent size="small" variant="danger" {...args} />
          <BadgeComponent size="small" variant="success" {...args} />
          <BadgeComponent size="small" variant="info" {...args} />
        </div>
        <div className="flex flex-col gap-3">
          <BadgeComponent size="small" loading {...args} />
          <BadgeComponent size="small" loading variant="warning" {...args} />
          <BadgeComponent size="small" loading variant="danger" {...args} />
          <BadgeComponent size="small" loading variant="success" {...args} />
          <BadgeComponent size="small" loading variant="info" {...args} />
        </div>
        <div className="flex flex-col gap-3">
          <BadgeComponent size="small" dismissible {...args} />
          <BadgeComponent
            size="small"
            dismissible
            variant="warning"
            {...args}
          />
          <BadgeComponent size="small" dismissible variant="danger" {...args} />
          <BadgeComponent
            size="small"
            dismissible
            variant="success"
            {...args}
          />
          <BadgeComponent size="small" dismissible variant="info" {...args} />
        </div>
      </div>

      <h3>Badge Medium</h3>
      <div className="max-w-[350px] flex gap-3">
        <div className="flex flex-col gap-3">
          <BadgeComponent {...args} />
          <BadgeComponent variant="warning" {...args} />
          <BadgeComponent variant="danger" {...args} />
          <BadgeComponent variant="success" {...args} />
          <BadgeComponent variant="info" {...args} />
        </div>
        <div className="flex flex-col gap-3">
          <BadgeComponent loading {...args} />
          <BadgeComponent loading variant="warning" {...args} />
          <BadgeComponent loading variant="danger" {...args} />
          <BadgeComponent loading variant="success" {...args} />
          <BadgeComponent loading variant="info" {...args} />
        </div>
        <div className="flex flex-col gap-3">
          <BadgeComponent dismissible {...args} />
          <BadgeComponent dismissible variant="warning" {...args} />
          <BadgeComponent dismissible variant="danger" {...args} />
          <BadgeComponent dismissible variant="success" {...args} />
          <BadgeComponent dismissible variant="info" {...args} />
        </div>
      </div>

      <h3>Badge Large</h3>
      <div className="max-w-[350px] flex gap-3">
        <div className="flex flex-col gap-3">
          <BadgeComponent size="large" {...args} />
          <BadgeComponent size="large" variant="warning" {...args} />
          <BadgeComponent size="large" variant="danger" {...args} />
          <BadgeComponent size="large" variant="success" {...args} />
          <BadgeComponent size="large" variant="info" {...args} />
        </div>
        <div className="flex flex-col gap-3">
          <BadgeComponent size="large" loading {...args} />
          <BadgeComponent size="large" loading variant="warning" {...args} />
          <BadgeComponent size="large" loading variant="danger" {...args} />
          <BadgeComponent size="large" loading variant="success" {...args} />
          <BadgeComponent size="large" loading variant="info" {...args} />
        </div>
        <div className="flex flex-col gap-3">
          <BadgeComponent size="large" dismissible {...args} />
          <BadgeComponent
            size="large"
            dismissible
            variant="warning"
            {...args}
          />
          <BadgeComponent size="large" dismissible variant="danger" {...args} />
          <BadgeComponent
            size="large"
            dismissible
            variant="success"
            {...args}
          />
          <BadgeComponent size="large" dismissible variant="info" {...args} />
        </div>
      </div>
    </div>
  ),
} satisfies Story;

export default meta;
