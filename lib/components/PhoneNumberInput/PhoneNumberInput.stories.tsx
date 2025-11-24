import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhoneNumberInput as PhoneNumberInputComponent } from './PhoneNumberInput';

type Story = StoryObj<typeof PhoneNumberInputComponent>;

const meta: Meta<typeof PhoneNumberInputComponent> = {
  title: 'In Review/PhoneNumberInput',
  component: PhoneNumberInputComponent,
};

export const PhoneNumberInput: Story = {
  render: function PhoneNumberInputStory() {
    return (
      <div className="w-[350px]">
        <PhoneNumberInputComponent />
      </div>
    );
  },
};

export default meta;
