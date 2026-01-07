import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge as BadgeComponent } from './Badge';
import { Check } from 'lucide-react';

type Story = StoryObj<typeof BadgeComponent>;

const meta: Meta<typeof BadgeComponent> = {
  title: 'In Review/Badge',
  component: BadgeComponent,
};

export const Badge = {
  args: {
    label: 'Badge',
    isSelectable: false,
  },
  render: (args) => (
    <div className="max-w-[400px]">
      <div className="flex flex-col gap-3 p-5 justify-center items-center">
        <div className="max-w-[350px] flex gap-3">
          <div className="flex flex-col gap-3">
            <BadgeComponent {...args} />
            <BadgeComponent variant="warning" {...args} />
            <BadgeComponent variant="danger" {...args} />
            <BadgeComponent variant="success" {...args} />
            <BadgeComponent variant="info" {...args} />
            <BadgeComponent variant="violet" {...args} />
            <BadgeComponent variant="orange" {...args} />
          </div>
          <div className="flex flex-col gap-3">
            <BadgeComponent loading {...args} />
            <BadgeComponent loading variant="warning" {...args} />
            <BadgeComponent loading variant="danger" {...args} />
            <BadgeComponent loading variant="success" {...args} />
            <BadgeComponent loading variant="info" {...args} />
            <BadgeComponent loading variant="violet" {...args} />
            <BadgeComponent loading variant="orange" {...args} />
          </div>
          <div className="flex flex-col gap-3">
            <BadgeComponent dismissible {...args} />
            <BadgeComponent dismissible variant="warning" {...args} />
            <BadgeComponent dismissible variant="danger" {...args} />
            <BadgeComponent dismissible variant="success" {...args} />
            <BadgeComponent dismissible variant="info" {...args} />
            <BadgeComponent dismissible variant="violet" {...args} />
            <BadgeComponent dismissible variant="orange" {...args} />
          </div>
          <div className="flex flex-col gap-3">
            <BadgeComponent leftIcon={<Check />} {...args} />
            <BadgeComponent leftIcon={<Check />} variant="warning" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="danger" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="success" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="info" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="violet" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="orange" {...args} />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-3 mt-5 bg-metal-900 p-5 justify-center items-center rounded-lg"
        data-theme="dark"
      >
        <div className="max-w-[350px] flex gap-3">
          <div className="flex flex-col gap-3">
            <BadgeComponent {...args} />
            <BadgeComponent variant="warning" {...args} />
            <BadgeComponent variant="danger" {...args} />
            <BadgeComponent variant="success" {...args} />
            <BadgeComponent variant="info" {...args} />
            <BadgeComponent variant="violet" {...args} />
            <BadgeComponent variant="orange" {...args} />
          </div>
          <div className="flex flex-col gap-3">
            <BadgeComponent loading {...args} />
            <BadgeComponent loading variant="warning" {...args} />
            <BadgeComponent loading variant="danger" {...args} />
            <BadgeComponent loading variant="success" {...args} />
            <BadgeComponent loading variant="info" {...args} />
            <BadgeComponent loading variant="violet" {...args} />
            <BadgeComponent loading variant="orange" {...args} />
          </div>
          <div className="flex flex-col gap-3">
            <BadgeComponent dismissible {...args} />
            <BadgeComponent dismissible variant="warning" {...args} />
            <BadgeComponent dismissible variant="danger" {...args} />
            <BadgeComponent dismissible variant="success" {...args} />
            <BadgeComponent dismissible variant="info" {...args} />
            <BadgeComponent dismissible variant="violet" {...args} />
            <BadgeComponent dismissible variant="orange" {...args} />
          </div>
          <div className="flex flex-col gap-3">
            <BadgeComponent leftIcon={<Check />} {...args} />
            <BadgeComponent leftIcon={<Check />} variant="warning" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="danger" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="success" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="info" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="violet" {...args} />
            <BadgeComponent leftIcon={<Check />} variant="orange" {...args} />
          </div>
        </div>
      </div>
    </div>
  ),
} satisfies Story;

export default meta;
