import type { Meta, StoryObj } from '@storybook/react-vite';

import { DropdownButton as DropdownButtonComponent } from './DropdownButton';

type Story = StoryObj<typeof DropdownButtonComponent>;

const meta: Meta<typeof DropdownButtonComponent> = {
  title: 'In Review/DropdownButton',
  component: DropdownButtonComponent,
};

export const DropdownButton: Story = {
  args: {
    options: [
      {
        label: 'Pdf',
      },
      {
        label: 'CSV',
      },
    ],
  },
  render: (args) => {
    return (
      <div className="max-w-50" data-theme="civo">
        <DropdownButtonComponent {...args} />
      </div>
    );
  },
};

export default meta;
