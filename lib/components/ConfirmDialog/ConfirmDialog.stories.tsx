import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Alert } from '../Alert/Alert';
import { Button } from '../Button/Button';

import { ConfirmDialog as ConfirmDialogComponent } from './ConfirmDialog';

type Story = StoryObj<typeof ConfirmDialogComponent>;

const meta = {
  title: 'In Review/ConfirmDialog',
  component: ConfirmDialogComponent,
} satisfies Meta<typeof ConfirmDialogComponent>;

export const TypeToConfirm: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A destructive confirmation gated behind typing the resource name. The chip copies the name, Enter submits once it matches, and `isPending` locks the dialog while the request runs. Seven microfrontends carried their own copy of this modal.',
      },
    },
  },
  render: function TypeToConfirmStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleConfirm = () => {
      setIsPending(true);
      setTimeout(() => {
        setIsPending(false);
        setIsOpen(false);
      }, 1500);
    };

    return (
      <div className="flex gap-4">
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete cluster
        </Button>

        <ConfirmDialogComponent
          isOpen={isOpen}
          title="Delete prod-cluster?"
          description="Are you sure you want to permanently delete this cluster? All node pools and workloads will be removed."
          confirmationText="prod-cluster"
          confirmLabel="Yes, delete"
          pendingLabel="Deleting…"
          isPending={isPending}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
        >
          <Alert
            type="warning"
            description="This volume is attached to web-01 and will be detached first."
          />
        </ConfirmDialogComponent>
      </div>
    );
  },
};

export const Simple: Story = {
  render: function SimpleStory() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex gap-4">
        <Button onClick={() => setIsOpen(true)}>Restart instance</Button>

        <ConfirmDialogComponent
          isOpen={isOpen}
          variant="primary"
          title="Restart web-01?"
          description="The instance will be unavailable for about a minute."
          confirmLabel="Restart"
          onClose={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
        />
      </div>
    );
  },
};

export default meta;
