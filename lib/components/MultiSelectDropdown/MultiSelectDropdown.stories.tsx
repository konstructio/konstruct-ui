import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { MultiSelectDropdown } from './MultiSelectDropdown';
import {
  MultiSelectDropdownOption,
  Props,
} from './MultiSelectDropdown.types';

const meta: Meta<typeof MultiSelectDropdown> = {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown that allows selecting one or multiple options with search. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the dropdown',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no selection',
    },
    multiselect: {
      control: { type: 'boolean' },
      description: 'Whether multiple options can be selected',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is in a loading state',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is disabled',
    },
    noOptionsText: {
      control: { type: 'text' },
      description: 'Text shown when no options match the search',
    },
    options: {
      control: { type: 'object' },
      description: 'Available options to select from',
    },
    onChange: { action: 'changed', table: { disable: true } },
    onBlur: { action: 'blurred', table: { disable: true } },
  },
  args: {
    label: 'Users',
    placeholder: 'Search users...',
    multiselect: true,
    isLoading: false,
    isRequired: false,
    disabled: false,
    noOptionsText: 'No matches found',
    options: [
      { id: 1, label: 'John Doe', badge: 'Admin' },
      { id: 2, label: 'Jane Smith', badge: 'User' },
      { id: 3, label: 'Alex Brown', badge: 'User' },
    ],
  },
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState<MultiSelectDropdownOption[]>([]);

      return (
        <div className="w-80">
          <MultiSelectDropdown
            {...(args as Props)}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      );
    };

    return <Demo />;
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelectDropdown>;

export const Playground: Story = {};
