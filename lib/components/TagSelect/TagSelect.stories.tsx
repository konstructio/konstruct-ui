import type { Meta, StoryObj } from '@storybook/react';

import { TagSelect as TagSelectComponent } from './TagSelect';

type Story = StoryObj<typeof TagSelectComponent>;

const meta: Meta<typeof TagSelectComponent> = {
  title: 'Design System/TagSelect',
  component: TagSelectComponent,
};

export const TagSelect: Story = {
  args: {
    options: [
      { color: 'gray', label: 'gray' },
      { color: 'cyan', label: 'cyan' },
      { color: 'gold', label: 'gold' },
      { color: 'green', label: 'green' },
      { color: 'light blue', label: 'light blue' },
      { color: 'lime', label: 'lime' },
      { color: 'pink', label: 'pink' },
      { color: 'purple', label: 'purple' },
      { color: 'emerald', label: 'emerald' },
      { color: 'fuscia', label: 'fuscia' },
      { color: 'indigo', label: 'indigo' },
      { color: 'light-orange', label: 'light-orange' },
      { color: 'dark-sky-blue', label: 'dark-sky-blue' },
      { color: 'mistery', label: 'mistery' },
    ],
  },
  render: (args) => (
    <div className="max-w-[300px] flex flex-col gap-3">
      <TagSelectComponent {...args} label="Select tag with kubefirst theme" />
      <TagSelectComponent
        {...args}
        theme="colony"
        label="Select tag with colony theme"
      />
    </div>
  ),
};

export default meta;
