import type { Meta, StoryObj } from '@storybook/react';

import { TimePicker as TimePickerComponent } from './TimePicker';

type Story = StoryObj<typeof TimePickerComponent>;

const meta: Meta<typeof TimePickerComponent> = {
  title: 'In Review/TimePicker',
  component: TimePickerComponent,
};

export const TimePicker: Story = {
  render: () => (
    <>
      <div className="max-w-[350px] flex flex-col gap-2">
        <TimePickerComponent name="time" />
      </div>
    </>
  ),
};

export default meta;
