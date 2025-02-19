import type { Meta, StoryObj } from '@storybook/react';

import { Loading as LoadingComponent } from './Loading';

type Story = StoryObj<typeof LoadingComponent>;

const meta = {
  title: 'In Review/Loading',
  component: LoadingComponent,
} satisfies Meta<typeof LoadingComponent>;

export const Loading = {
  render: () => (
    <>
      <div className="w-[350px]">
        <LoadingComponent />
      </div>
      <div className="w-[350px]">
        <LoadingComponent theme="colony" />
      </div>
      <div className="w-[350px]">
        <LoadingComponent theme="civo" />
      </div>
    </>
  ),
} satisfies Story;

export default meta;
