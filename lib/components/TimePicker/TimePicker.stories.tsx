import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimePicker as TimePickerComponent } from './TimePicker';

type Story = StoryObj<typeof TimePickerComponent>;

const meta: Meta<typeof TimePickerComponent> = {
  title: 'In Review/TimePicker',
  component: TimePickerComponent,
};

export const TimePicker: Story = {
  render: () => (
    <div className="max-w-[350px] flex flex-col gap-2">
      <TimePickerComponent name="time-12" label="Time 12 format" required />

      <TimePickerComponent
        name="time-24"
        label="Time 24 format"
        format="24"
        required
      />
    </div>
  ),
};

export default meta;
