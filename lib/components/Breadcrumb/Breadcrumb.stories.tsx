import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb as BreadcrumbComponent } from './Breadcrumb';

type Story = StoryObj<typeof BreadcrumbComponent>;

const meta: Meta<typeof BreadcrumbComponent> = {
  component: BreadcrumbComponent,
};

export const Breadcrumb: Story = {
  args: {
    steps: [
      {
        label: 'Step 1',
      },
      {
        label: 'Step 2',
      },
      {
        label: 'Step 3',
      },
    ],
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <BreadcrumbComponent {...args} />
    </div>
  ),
};

export default meta;
