import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A scrollable time picker with 12 and 24 hour format support. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the picker',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    format: {
      control: { type: 'inline-radio' },
      options: ['12', '24'],
      description: 'Time format',
    },
    mode: {
      control: { type: 'inline-radio' },
      options: ['select', 'input'],
      description: 'Input mode',
    },
    showList: {
      control: { type: 'boolean' },
      description: 'Whether to show the dropdown list',
    },
    listPosition: {
      control: { type: 'inline-radio' },
      options: ['top', 'bottom'],
      description: 'Direction to open the dropdown list',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the picker is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for input mode',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Meeting time',
    name: 'meetingTime',
    format: '12',
    mode: 'select',
    showList: true,
    listPosition: 'bottom',
    isRequired: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Playground: Story = {};
