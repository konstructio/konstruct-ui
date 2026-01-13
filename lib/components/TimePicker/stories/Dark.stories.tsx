import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimePicker as TimePickerComponent } from '../TimePicker';
import { useEffect } from 'react';

type Story = StoryObj<typeof TimePickerComponent>;

const meta: Meta<typeof TimePickerComponent> = {
  title: 'In Review/TimePicker/Dark',
  component: TimePickerComponent,
};

export const Dark: Story = {
  render: () => {
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    return (
      <>
        <TimePickerComponent name="time-12" label="Time 12 format" required />

        <div className="h-5" />

        <TimePickerComponent
          name="time-24"
          label="Time 24 format"
          format="24"
          required
        />
      </>
    );
  },
};

export default meta;
