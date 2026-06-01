import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown select with optional search, grouping, and infinite scroll. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the select',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the select',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Enable search functionality',
    },
    highlightSearch: {
      control: { type: 'boolean' },
      description: 'Highlight matching text in options',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of options or option groups',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    isRequired: false,
    isLoading: false,
    disabled: false,
    searchable: false,
    highlightSearch: false,
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'br', label: 'Brazil' },
      { value: 'de', label: 'Germany' },
    ],
  },
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState<string | undefined>();

      return (
        <div className="w-80">
          <Select
            {...args}
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

type Story = StoryObj<typeof Select>;

export const Playground: Story = {};
