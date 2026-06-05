import type { Meta, StoryObj } from '@storybook/react-vite';

import { LineChart } from './LineChart';

const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A line chart built on Chart.js for data visualization. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Chart title text',
    },
    labels: {
      control: { type: 'object' },
      description: 'X-axis labels',
    },
    datasets: {
      control: { type: 'object' },
      description: 'One or more datasets (lines)',
    },
    showLegend: {
      control: { type: 'boolean' },
      description: 'Show legend (auto-shown when datasets > 1)',
    },
    smooth: {
      control: { type: 'boolean' },
      description: 'Smooth lines',
    },
    showGrid: {
      control: { type: 'boolean' },
      description: 'Show horizontal grid lines',
    },
    showAxisBorder: {
      control: { type: 'boolean' },
      description: 'Show axis border lines',
    },
    height: {
      control: { type: 'number' },
      description: 'Chart height in px',
    },
    lineWidth: {
      control: { type: 'number' },
      description: 'Line thickness in px',
    },
  },
  args: {
    title: 'Disk Usage %',
    labels: ['11:20', '11:25', '11:30', '11:35', '11:40'],
    datasets: [
      {
        label: 'Usage',
        data: [6, 3, 8, 5, 7],
      },
    ],
    smooth: true,
    showGrid: true,
    showAxisBorder: false,
    height: 300,
    lineWidth: 2,
  },
};

export default meta;

type Story = StoryObj<typeof LineChart>;

export const Playground: Story = {};
