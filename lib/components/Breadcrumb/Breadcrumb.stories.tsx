import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb as BreadcrumbComponent } from './Breadcrumb';

type Story = StoryObj<typeof BreadcrumbComponent>;

const meta: Meta<typeof BreadcrumbComponent> = {
  title: 'In Review/Breadcrumb',
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
      <BreadcrumbComponent {...args} />
    </div>
  ),
} satisfies Story;

export default meta;
