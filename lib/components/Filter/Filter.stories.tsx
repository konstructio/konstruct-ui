import type { Meta, StoryObj } from '@storybook/react-vite';

import { Filter } from './Filter';

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A compound component for building filter interfaces with multi-select dropdowns and a reset button. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    closeOnApply: {
      control: { type: 'boolean' },
      description: 'Whether to close the filter dropdown automatically when Apply is clicked',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    closeOnApply: true,
  },
  render: (args) => {
    return (
      <Filter {...args}>
        <Filter.BadgeMultiSelect
          label="Status"
          options={[
            { id: 'active', label: 'Active', variant: 'success' },
            { id: 'pending', label: 'Pending', variant: 'warning' },
            { id: 'inactive', label: 'Inactive', variant: 'default' },
          ]}
        />
        <Filter.ResetButton />
      </Filter>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Playground: Story = {};
