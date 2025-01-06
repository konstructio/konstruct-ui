import type { Meta, StoryObj } from '@storybook/react';

import { Card as CardComponent } from './Card';

type Story = StoryObj<typeof CardComponent>;

const meta: Meta<typeof CardComponent> = {
  title: 'Design System/Card',
  component: CardComponent,
};

export const Card: Story = {
  render: () => (
    <div className="max-w-[350px] flex flex-col gap-2">
      <CardComponent />
    </div>
  ),
};

export default meta;
