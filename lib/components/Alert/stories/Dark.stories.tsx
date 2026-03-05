import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert as AlertComponent } from '../Alert';

type Story = StoryObj<typeof AlertComponent>;

const meta: Meta<typeof AlertComponent> = {
  title: 'In Review/Alert/Dark',
  component: AlertComponent,
};

export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
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

export default meta;
