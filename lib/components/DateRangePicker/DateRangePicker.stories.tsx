import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A range picker with optional time inputs and preset options. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label for the component',
    },
    showTime: {
      control: { type: 'boolean' },
      description: 'Whether to show time inputs',
    },
    showPresets: {
      control: { type: 'boolean' },
      description: 'Whether to show the preset panel',
    },
    timeFormat: {
      control: { type: 'inline-radio' },
      options: ['12', '24'],
      description: 'Time format',
    },
    navigationMode: {
      control: { type: 'inline-radio' },
      options: ['independent', 'together'],
      description: 'Navigation mode for the calendar months',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onRangeChange: { action: 'rangeChanged', table: { disable: true } },
    onDateChange: { action: 'dateChanged', table: { disable: true } },
  },
  args: {
    label: 'Date range',
    showTime: true,
    showPresets: true,
    timeFormat: '12',
    navigationMode: 'independent',
    disabled: false,
    isRequired: false,
  },
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Playground: Story = {};
