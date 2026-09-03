import type { Meta, StoryObj } from '@storybook/react-vite';

import { BillingIcon } from '@/assets/icons/components';
import { Button } from '@/components/Button/Button';

import { Alert as AlertComponent } from '../Alert';

type Story = StoryObj<typeof AlertComponent>;

const meta: Meta<typeof AlertComponent> = {
  title: 'In Review/Alert/Light',
  component: AlertComponent,
};

export const Light: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-150">
      <AlertComponent
        type="danger"
        title="You do not have permission to log in"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      />
      <AlertComponent
        type="danger"
        title="You do not have permission to log in"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        showCloseButton
      />
      <AlertComponent
        type="warning"
        title="Attention needed"
        description="If you think this is incorrect, please contact your Konstruct administrators."
      />
      <AlertComponent
        type="warning"
        title="Attention needed"
        description="If you think this is incorrect, please contact your Konstruct administrators."
        showCloseButton
      />
      <AlertComponent
        type="success"
        title="Success message"
        description="If you think this is incorrect, please contact your Konstruct administrators."
      />
      <AlertComponent
        type="success"
        title="Success message"
        description="If you think this is incorrect, please contact your Konstruct administrators."
        showCloseButton
      />
      <AlertComponent
        type="info"
        title="Information"
        description="If you think this is incorrect, please contact your Konstruct administrators."
      />
      <AlertComponent
        type="info"
        title="Information"
        description="If you think this is incorrect, please contact your Konstruct administrators."
        showCloseButton
      />
    </div>
  ),
};

export const WithAction: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`action` renders a call to action at the right end of the alert and `icon` replaces the icon derived from `type`. Billing built an AlertBanner from scratch to get this layout.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3 w-150">
      <AlertComponent
        type="warning"
        title="Add a payment method"
        description="Your trial ends in 3 days. Add a card to keep your resources running."
        action={
          <Button variant="tertiary" appearance="compact">
            Add card
          </Button>
        }
      />
      <AlertComponent
        type="info"
        title="Billing address updated"
        icon={
          <BillingIcon className="size-6 text-blue-800 dark:text-blue-300" />
        }
        showCloseButton
      />
    </div>
  ),
};

export default meta;
