import type { Meta, StoryObj } from '@storybook/react';

import { TagSelect as TagSelectComponent } from './TagSelect';

type Story = StoryObj<typeof TagSelectComponent>;

const meta: Meta<typeof TagSelectComponent> = {
  title: 'In Review/TagSelect',
  component: TagSelectComponent,
};

export const TagSelect: Story = {
  args: {
    options: [
      { id: '1', color: 'gray', label: 'gray' },
      { id: '2', color: 'cyan', label: 'cyan' },
      { id: '3', color: 'gold', label: 'gold' },
      { id: '4', color: 'green', label: 'green' },
      { id: '5', color: 'light blue', label: 'light blue' },
      { id: '6', color: 'lime', label: 'lime' },
      { id: '7', color: 'pink', label: 'pink' },
      { id: '8', color: 'purple', label: 'purple' },
      { id: '9', color: 'emerald', label: 'emerald' },
      { id: '10', color: 'fuscia', label: 'fuscia' },
      { id: '11', color: 'indigo', label: 'indigo' },
      { id: '12', color: 'light-orange', label: 'light-orange' },
      { id: '13', color: 'dark-sky-blue', label: 'dark-sky-blue' },
      { id: '14', color: 'mistery', label: 'mistery' },
    ],
  },
  render: (args) => (
    <div className="max-w-[300px] flex flex-col gap-3">
      <TagSelectComponent
        {...args}
        label="Select tag with kubefirst theme multiselect"
      />
      <div className="border-t my-3 border-gray-200" />
      <TagSelectComponent
        {...args}
        label="Select tag with kubefirst theme"
        multiselect={false}
      />
    </div>
  ),
};

export default meta;
