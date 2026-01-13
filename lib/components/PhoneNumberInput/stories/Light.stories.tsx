import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhoneNumberInput as PhoneNumberInputComponent } from '../PhoneNumberInput';

type Story = StoryObj<typeof PhoneNumberInputComponent>;

const meta: Meta<typeof PhoneNumberInputComponent> = {
  title: 'In Review/PhoneNumberInput/Light',
  component: PhoneNumberInputComponent,
};

export const Light = {
  args: {
    label: 'Phone number',
    isRequired: true,
    helperText: 'Please enter your phone number',
    defaultCountryCode: 'CL',
  },
  render: (args) => (
    <div className="w-80">
      <PhoneNumberInputComponent {...args} />
    </div>
  ),
} satisfies Story;

export default meta;
