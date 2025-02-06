import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb as BreadcrumbComponent } from './Breadcrumb';

type Story = StoryObj<typeof BreadcrumbComponent>;

const meta: Meta<typeof BreadcrumbComponent> = {
  title: 'Design System/Breadcrumb',
  component: BreadcrumbComponent,
};

export const Breadcrumb = {
  args: {
    steps: [
      {
        label: 'Step 1',
        isActive: false,
      },
      {
        label: 'Step 2',
        to: '#',
      },
      {
        label: 'Step 3',
      },
    ],
  },
  render: (args) => (
    <div className="max-w-[350px] flex flex-col gap-1">
      <BreadcrumbComponent size="sm" {...args} />
      <div className="mt-3" />
      <BreadcrumbComponent size="base" {...args} />
      <div className="mt-3" />
      <BreadcrumbComponent size="lg" {...args} />
      <div className="mt-3" />
      <BreadcrumbComponent size="xl" {...args} />
    </div>
  ),
} satisfies Story;

export default meta;
