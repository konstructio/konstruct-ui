import type { Meta, StoryObj } from '@storybook/react';

import { Loading as LoadingComponent } from './Loading';

type Story = StoryObj<typeof LoadingComponent>;

const meta: Meta<typeof LoadingComponent> = {
  title: 'In Review/Loading',
  component: LoadingComponent,
};

export const Loading: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <>
      <div className="w-[350px]">
        <LoadingComponent {...args} />
      </div>
      <div className="w-[350px]">
        <LoadingComponent {...args} theme="colony" />
      </div>
      <div className="w-[350px]">
        <LoadingComponent {...args} theme="civo" />
      </div>
    </>
  ),
};

export default meta;
