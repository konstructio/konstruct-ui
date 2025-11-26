import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhoneNumberInput as PhoneNumberInputComponent } from './PhoneNumberInput';

type Story = StoryObj<typeof PhoneNumberInputComponent>;

const meta: Meta<typeof PhoneNumberInputComponent> = {
  title: 'In Review/PhoneNumberInput',
  component: PhoneNumberInputComponent,
};

export const PhoneNumberInput: Story = {
  args: {
    label: 'Phone number',
    isRequired: true,
    helperText: 'Please enter your phone number',
    defaultCountryCode: 'CL',
  },
  render: function PhoneNumberInputStory(args) {
    return (
      <>
        <div className="w-80 h-110 p-4 rounded-sm">
          <PhoneNumberInputComponent {...args} />
        </div>

        <div className="h-5" />

        <div
          className="w-80 h-110 bg-slate-950 p-4 rounded-sm"
          data-theme="dark"
        >
          <PhoneNumberInputComponent {...args} />
        </div>
      </>
    );
  },
};

export default meta;
