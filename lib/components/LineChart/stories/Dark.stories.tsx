import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '../../Card/Card';
import { LineChart as LineChartComponent } from '../LineChart';

type Story = StoryObj<typeof LineChartComponent>;

const meta: Meta<typeof LineChartComponent> = {
  title: 'In Review/LineChart/Dark',
  component: LineChartComponent,
};

const labels = [
  '11:20',
  '11:21',
  '11:22',
  '11:23',
  '11:24',
  '11:25',
  '11:26',
  '11:27',
  '11:28',
  '11:29',
  '11:30',
];

export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
  render: () => {
    return (
      <div className="flex flex-col gap-6">
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent
            title="Disk Usage %"
            labels={labels}
            datasets={[
              {
                label: 'Usage',
                data: [6, 7, 6.5, 3, 2.5, 10, 7, 8, 5, 6, 4.5],
              },
            ]}
            height={200}
            yAxisFormatter={(v) => {
              return `${v}%`;
            }}
          />
        </Card>
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent
            title="Disk I/O"
            labels={labels}
            datasets={[
              {
                label: 'Read',
                data: [8, 8.5, 7, 9, 8, 8.5, 7.5, 8, 9, 8, 8.5],
              },
              {
                label: 'Write',
                data: [3, 2.5, 3, 2, 3, 2.5, 2, 3, 2.5, 2, 3],
              },
            ]}
            height={200}
            yAxisFormatter={(v) => {
              return `${v}%`;
            }}
          />
        </Card>
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent
            title="Disk I/O (Rigid)"
            labels={labels}
            datasets={[
              {
                label: 'Read',
                data: [8, 8.5, 7, 9, 8, 8.5, 7.5, 8, 9, 8, 8.5],
              },
              {
                label: 'Write',
                data: [3, 2.5, 3, 2, 3, 2.5, 2, 3, 2.5, 2, 3],
              },
            ]}
            smooth={false}
            height={200}
            yAxisFormatter={(v) => {
              return `${v}%`;
            }}
          />
        </Card>
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent
            title="Network Traffic"
            labels={labels}
            datasets={[
              {
                label: 'Inbound',
                data: [12, 15, 11, 14, 13, 16, 12, 15, 14, 13, 11],
              },
              {
                label: 'Outbound',
                data: [5, 6, 4.5, 7, 5.5, 6, 5, 7, 6.5, 5, 4],
              },
              {
                label: 'Errors',
                data: [1, 0.5, 2, 1.5, 1, 0.8, 1.2, 0.5, 1, 1.5, 0.7],
              },
            ]}
            showGrid={false}
            showAxisBorder
            lineWidth={1}
            height={200}
            yAxisFormatter={(v) => {
              return `${v} MB/s`;
            }}
          />
        </Card>
      </div>
    );
  },
};

export default meta;
