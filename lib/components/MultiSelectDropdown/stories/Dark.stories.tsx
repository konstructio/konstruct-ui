import type { Meta, StoryObj } from '@storybook/react-vite';

import { MultiSelectDropdown as MultiSelectDropdownComponent } from '../MultiSelectDropdown';

type Story = StoryObj<typeof MultiSelectDropdownComponent>;

const meta: Meta<typeof MultiSelectDropdownComponent> = {
  title: 'In Review/MultiSelectDropdown/Dark',
  component: MultiSelectDropdownComponent,
};

export const Dark = {
  parameters: {
    theme: 'dark',
  },
  args: {
    options: [
      {
        id: '1',
        label: 'dev: development',
        badge: 'dev',
        value: 'development',
      },
      {
        id: '2',
        label: 'qa: quality assurance',
        badge: 'qa',
        value: 'quality_assurance',
      },
      {
        id: '3',
        label: 'prod: production',
        badge: 'prod',
        value: 'production',
      },
    ],
    isRequired: true,
  },
  render: (args) => (
    <div className="max-w-75 flex flex-col gap-6">
      <MultiSelectDropdownComponent {...args} label="Multiselect" />

      <MultiSelectDropdownComponent
        {...args}
        label="Single select"
        multiselect={false}
      />
    </div>
  ),
} satisfies Story;

export default meta;
