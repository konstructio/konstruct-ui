import type { Meta, StoryObj } from '@storybook/react';
import { Info } from 'react-feather';

import { Alert as AlertComponent } from './Alert';

type Story = StoryObj<typeof AlertComponent>;

const meta = {
  title: 'In Review/Alert',
  component: AlertComponent,
} satisfies Meta<typeof AlertComponent>;

export const Alert = {
  args: {
    content: (
      <p>
        <Info className="w-4 h-4" /> Ensure you have an AWS cloud account with
        billing enabled.
      </p>
    ),
  },
  render: (args) => {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="w-[600px] flex flex-col gap-3"
      >
        <AlertComponent {...args} type="info" />

        <AlertComponent {...args} type="info" showCloseButton={true} />
      </div>
    );
  },
} satisfies Story;

export default meta;
