import type { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumb as BreadcrumbComponent } from '../Breadcrumb';

type Story = StoryObj<typeof BreadcrumbComponent>;

const meta: Meta<typeof BreadcrumbComponent> = {
  title: 'In Review/Breadcrumb/Light',
  component: BreadcrumbComponent,
};

export const Light: Story = {
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
    <div className="max-w-62.5 p-4 flex justify-center">
      <BreadcrumbComponent {...args} />
    </div>
  ),
};

export default meta;
