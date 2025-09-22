import type { Meta, StoryObj } from '@storybook/react-vite';

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
        <LoadingComponent theme="kubefirst" />
      </div>
      <div className="w-[350px]">
        <LoadingComponent />
      </div>
    </>
  ),
} satisfies Story;

export default meta;
