import type { Meta, StoryObj } from '@storybook/react-vite';

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
    <div>
      <div className="max-w-[250px] p-4 flex justify-center">
        <BreadcrumbComponent {...args} />
      </div>

      <div
        className="max-w-[250px] mt-2 bg-metal-900 p-4 rounded-lg flex justify-center"
        data-theme="dark"
      >
        <BreadcrumbComponent {...args} />
      </div>
    </div>
  ),
} satisfies Story;

export default meta;
