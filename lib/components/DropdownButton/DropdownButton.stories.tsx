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
        label: 'PDF',
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

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`isLoading` swaps the chevron for a spinner and disables the trigger while a download is in flight; `disabled` keeps the menu closed. `variant`, `appearance` and `version` are forwarded to the trigger Button. Billing fell back to a plain Button for the loading state before.',
      },
    },
  },
  args: {
    label: 'Download invoice as',
    options: [{ label: 'PDF' }, { label: 'CSV' }],
  },
  render: (args) => (
    <div className="flex flex-col gap-4 max-w-60">
      <DropdownButtonComponent {...args} isLoading />
      <DropdownButtonComponent {...args} disabled />
      <DropdownButtonComponent {...args} variant="secondary" />
      <DropdownButtonComponent
        {...args}
        variant="tertiary"
        appearance="compact"
      />
    </div>
  ),
};

export default meta;
