import type { Meta, StoryObj } from '@storybook/react-vite';

import { PieGraph as PieGraphComponent } from './PieGraph';

type Story = StoryObj<typeof PieGraphComponent>;

const meta: Meta<typeof PieGraphComponent> = {
  title: 'In Review/PieGraph',
  component: PieGraphComponent,
};

export const PieGraph: Story = {
  render: () => {
    return (
      <div className="w-[350px] flex flex-col gap-4">
        <PieGraphComponent />
      </div>
    );
  },
};

export default meta;
