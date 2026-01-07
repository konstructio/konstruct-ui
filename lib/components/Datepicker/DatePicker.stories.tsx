import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePicker as DatepickerComponent } from './DatePicker';

type Story = StoryObj<typeof DatepickerComponent>;

const meta: Meta<typeof DatepickerComponent> = {
  title: 'In Review/Datepicker',
  component: DatepickerComponent,
};

export const Datepicker: Story = {
  render: () => (
    <>
      <div className="max-w-[350px] flex justify-center gap-2">
        <DatepickerComponent />
      </div>

      <div
        className="max-w-[350px] flex justify-center gap-2 mt-6 rounded-lg bg-metal-900"
        data-theme="dark"
      >
        <DatepickerComponent />
      </div>
    </>
  ),
};

export default meta;
