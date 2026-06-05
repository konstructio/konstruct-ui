import type { Meta, StoryObj } from '@storybook/react-vite';

import { PieChart } from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Components/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A doughnut/pie chart built on Chart.js for data visualization. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    values: {
      control: { type: 'object' },
      description: 'Array of numeric values for each segment',
    },
    colors: {
      control: { type: 'object' },
      description: 'Array of colors for filling the segments',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text displayed in the center',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtitle text displayed in the center',
    },
    cutoutPercentage: {
      control: { type: 'number' },
      description: 'Percentage of the chart center cut out (donut effect)',
    },
    borderWidth: {
      control: { type: 'number' },
      description: 'Width of segment borders in pixels',
    },
    titleFontSize: {
      control: { type: 'number' },
      description: 'Font size for the title in pixels',
    },
    subtitleFontSize: {
      control: { type: 'number' },
      description: 'Font size for the subtitle in pixels',
    },
    titleFontWeight: {
      control: { type: 'inline-radio' },
      options: ['bold', 'normal'],
      description: 'Font weight for the title',
    },
    subtitleFontWeight: {
      control: { type: 'inline-radio' },
      options: ['bold', 'normal'],
      description: 'Font weight for the subtitle',
    },
  },
  args: {
    values: [30, 70],
    colors: ['#ef4444', '#22c55e'],
    title: '70%',
    subtitle: 'Complete',
    cutoutPercentage: 75,
    borderWidth: 0,
  },
};

export default meta;

type Story = StoryObj<typeof PieChart>;

export const Playground: Story = {};
