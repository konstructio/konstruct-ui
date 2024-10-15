import type { Meta, StoryObj } from '@storybook/react';

import { TagSelect as TagSelectComponent } from './TagSelect';

type Story = StoryObj<typeof TagSelectComponent>;

const meta: Meta<typeof TagSelectComponent> = {
  component: TagSelectComponent,
};

export const TagSelect: Story = {
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <TagSelectComponent {...args} />
    </div>
  ),
};

export default meta;
