import type { Meta, StoryObj } from '@storybook/react-vite';

import { HomeIcon } from '@/assets/icons/components';

import { Breadcrumb as BreadcrumbComponent } from '../Breadcrumb';

type Story = StoryObj<typeof BreadcrumbComponent>;

const meta: Meta<typeof BreadcrumbComponent> = {
  title: 'In Review/Breadcrumb/Dark',
  component: BreadcrumbComponent,
  parameters: {
    theme: 'dark',
  },
};

export const Dark: Story = {
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
    <div className="max-w-62.5 p-4 flex justify-start">
      <BreadcrumbComponent {...args} />
    </div>
  ),
};

export const WithBackButton: Story = {
  args: {
    backButton: {
      onClick: () => console.log('go back'),
    },
    steps: [
      { label: 'Step 1', to: '#' },
      { label: 'Step 2', to: '#' },
      { label: 'Step 3' },
    ],
  },
  render: (args) => (
    <div className="p-4 flex justify-start">
      <BreadcrumbComponent {...args} />
    </div>
  ),
};

export const WithStepIcons: Story = {
  args: {
    backButton: {
      icon: <HomeIcon className="w-5 h-5" />,
      to: '#',
      label: 'Go home',
    },
    steps: [
      {
        label: 'Home',
        to: '#',
        leftIcon: <HomeIcon className="w-4 h-4" />,
      },
      { label: 'Step 2', to: '#' },
      { label: 'Step 3' },
    ],
  },
  render: (args) => (
    <div className="p-4 flex justify-start">
      <BreadcrumbComponent {...args} />
    </div>
  ),
};

export default meta;
