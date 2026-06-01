import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Datepicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A date picker built on react-day-picker for single date selection. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    defaultSelected: {
      control: { type: 'date' },
      description: 'Initial selected date',
    },
    showOutsideDays: {
      control: { type: 'boolean' },
      description: 'Show days from the previous and next months',
    },
    animate: {
      control: { type: 'boolean' },
      description: 'Animate month transitions',
    },
    onSelect: { action: 'selected', table: { disable: true } },
  },
  args: {
    defaultSelected: new Date(),
    showOutsideDays: true,
    animate: true,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Playground: Story = {};
