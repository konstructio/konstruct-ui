import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhoneNumberInput as PhoneNumberInputComponent } from './PhoneNumberInput';

type Story = StoryObj<typeof PhoneNumberInputComponent>;

const meta: Meta<typeof PhoneNumberInputComponent> = {
  title: 'In Review/PhoneNumberInput',
  component: PhoneNumberInputComponent,
};

export const PhoneNumberInput: Story = {
  args: {
    label: 'Phone Number',
    isRequired: true,
  },
  render: function PhoneNumberInputStory(args) {
    return (
      <div className="w-[300px]">
        <PhoneNumberInputComponent {...args} />
      </div>
    );
  },
};

export default meta;
