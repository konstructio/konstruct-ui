import type { Meta, StoryObj } from '@storybook/react-vite';

import { PieChart as PieChartComponent } from './PieChart';

type Story = StoryObj<typeof PieChartComponent>;

const meta = {
  title: 'In Review/PieChart',
  component: PieChartComponent,
} satisfies Meta<typeof PieChartComponent>;

export const PieChart = {
  render: () => {
    const values = [20, 80];

    return (
      <div className="w-[115px] h-[115px]">
        <PieChartComponent
          subtitle="Total IPs"
          subtitleColor="#62748E"
          subtitleFontSize={14}
          title="10/256"
          titleColor="#1D283D"
          titleFontSize={14}
          titleFontWeight="normal"
          values={values}
        />
      </div>
    );
  },
} satisfies Story;

export default meta;
