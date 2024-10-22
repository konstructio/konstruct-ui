import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog as AlertDialogComponent } from './AlertDialog';

type Story = StoryObj<typeof AlertDialogComponent>;

const meta: Meta<typeof AlertDialogComponent> = {
  component: AlertDialogComponent,
};

export const AlertDialog: Story = {
  render: () => (
    <div className="w-[350px]">
      <AlertDialogComponent
        buttonText="Destroy machine"
        theme="kubefirst"
        title="Are you sure to delete?"
        description="This will permanently delete all data from this host. This action cannot be undone."
      />
    </div>
  ),
};

export default meta;
