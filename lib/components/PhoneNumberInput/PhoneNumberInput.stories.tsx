import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhoneNumberInput } from './PhoneNumberInput';

const meta: Meta<typeof PhoneNumberInput> = {
  title: 'Components/PhoneNumberInput',
  component: PhoneNumberInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An input with country code selector and phone number formatting. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the input',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    defaultCountryCode: {
      control: { type: 'text' },
      description: 'Default country code',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    showFlagOnSearch: {
      control: { type: 'boolean' },
      description: 'Show country flags in the search dropdown',
    },
    showInputFilter: {
      control: { type: 'boolean' },
      description: 'Show the country filter input',
    },
    showNameOnSearch: {
      control: { type: 'boolean' },
      description: 'Show country names in the search dropdown',
    },
    showPlaceHolder: {
      control: { type: 'boolean' },
      description: 'Show the placeholder text',
    },
  },
  args: {
    label: 'Phone Number',
    name: 'phone',
    defaultCountryCode: 'US',
    placeholder: 'Enter phone number',
    showFlagOnSearch: true,
    showInputFilter: true,
    showNameOnSearch: true,
    showPlaceHolder: true,
  },
};

export default meta;

type Story = StoryObj<typeof PhoneNumberInput>;

export const Playground: Story = {};
