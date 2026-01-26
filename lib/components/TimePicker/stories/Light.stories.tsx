import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimePicker as TimePickerComponent } from '../TimePicker';

type Story = StoryObj<typeof TimePickerComponent>;

const meta: Meta<typeof TimePickerComponent> = {
  title: 'In Review/TimePicker/Light',
  component: TimePickerComponent,
};

export const Light: Story = {
  render: () => (
    <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-12" label="Time 12 format" isRequired />

      <TimePickerComponent
        name="time-24"
        label="Time 24 format"
        format="24"
        isRequired
      />
    </div>
  ),
};

export const InputMode: Story = {
  render: () => (
    <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent
        name="time-input-12"
        label="Time 12 format (Input mode with list)"
        mode="input"
        isRequired
      />

      <TimePickerComponent
        name="time-input-24"
        label="Time 24 format (Input mode with list)"
        format="24"
        mode="input"
        isRequired
      />
    </div>
  ),
};

export const InputModeWithoutList: Story = {
  render: () => (
    <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent
        name="time-input-no-list-12"
        label="Time 12 format (Input only)"
        mode="input"
        showList={false}
        isRequired
      />

      <TimePickerComponent
        name="time-input-no-list-24"
        label="Time 24 format (Input only)"
        format="24"
        mode="input"
        showList={false}
        isRequired
      />
    </div>
  ),
};

export default meta;
