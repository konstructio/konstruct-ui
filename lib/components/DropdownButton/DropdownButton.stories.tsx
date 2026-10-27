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

/**
 * Options can stay listed while unavailable (`disabledReason` prints why beside
 * the label), open a new group (`separator`) or read as destructive. With
 * `sheetTitle` the same options become an action sheet docked to the bottom of
 * the screen on touch devices and viewports under 768px; resize the preview
 * to see it.
 */
export const ActionsMenu: Story = {
  args: {
    label: 'Actions',
    variant: 'secondary',
    sheetTitle: 'web-server-prod',
    options: [
      { label: 'Shutdown' },
      { label: 'Reboot' },
      { label: 'Start', disabledReason: 'Already running' },
      { label: 'Delete instance', destructive: true, separator: true },
    ],
  },
  render: (args) => (
    <div className="max-w-40" data-theme="civo">
      <DropdownButtonComponent {...args} />
    </div>
  ),
};

export default meta;
