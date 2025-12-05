import type { Meta, StoryObj } from '@storybook/react-vite';

import { MultiSelectDropdown as MultiSelectDropdownComponent } from './MultiSelectDropdown';

type Story = StoryObj<typeof MultiSelectDropdownComponent>;

const meta: Meta<typeof MultiSelectDropdownComponent> = {
  title: 'In Review/MultiSelectDropdown',
  component: MultiSelectDropdownComponent,
};

export const MultiSelectDropdown: Story = {
  args: {
    options: [
      {
        id: '1',
        label: 'dev: development',
        tagLabel: 'dev',
        tagColor: 'gray-800',
        value: 'development',
      },
      {
        id: '2',
        label: 'qa: quality assurance',
        tagLabel: 'qa',
        tagColor: 'gray-800',
        value: 'quality assurance',
      },
      {
        id: '3',
        label: 'prod: production',
        tagLabel: 'prod',
        tagColor: 'gray-800',
        value: 'production',
      },
    ],
  },
  render: (args) => (
    <div className="max-w-[300px] flex flex-col gap-3">
      <MultiSelectDropdownComponent {...args} label="Multiselect" />
      <div className="border-t my-3 border-gray-200" />
      <MultiSelectDropdownComponent
        {...args}
        label="Single select"
        multiselect={false}
      />
    </div>
  ),
};

export default meta;
