import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb as BreadcrumbComponent } from './Breadcrumb';
import { ThemeProvider } from '../../contexts';

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
    <div className="max-w-[350px] flex flex-col gap-1">
      <ThemeProvider theme="kubefirst">
        <p className="text-kubefirst-secondary font-semibold">
          Kubefirst Theme
        </p>
        <BreadcrumbComponent size="sm" {...args} />
        <BreadcrumbComponent size="base" {...args} />
        <BreadcrumbComponent size="lg" {...args} />
        <BreadcrumbComponent size="xl" {...args} />
      </ThemeProvider>

      <ThemeProvider theme="colony">
        <p className="mt-2 text-red-600 font-semibold">Colony Theme</p>
        <BreadcrumbComponent size="sm" {...args} />
        <BreadcrumbComponent size="base" {...args} />
        <BreadcrumbComponent size="lg" {...args} />
        <BreadcrumbComponent size="xl" {...args} />
      </ThemeProvider>
    </div>
  ),
};

export default meta;
