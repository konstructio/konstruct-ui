import type { Meta, StoryObj } from '@storybook/react';

import { Tag as TagComponent } from './Tag';

type Story = StoryObj<typeof TagComponent>;

const meta: Meta<typeof TagComponent> = {
  title: 'In Review/Tag',
  component: TagComponent,
};

export const Tag: Story = {
  render: () => (
    <div className="w-[350px] flex flex-col gap-3">
      <TagComponent label="This is a tag with default color" />
      <TagComponent color="gray" label="This is a tag gray" />
      <TagComponent color="cyan" label="This is a tag cyan" />
      <TagComponent color="gold" label="This is a tag gold" />
      <TagComponent color="green" label="This is a tag green" />
      <TagComponent color="light blue" label="This is a tag light blue" />
      <TagComponent color="lime" label="This is a tag lime" />
      <TagComponent color="pink" label="This is a tag pink" />
      <TagComponent color="purple" label="This is a tag purple" />
      <TagComponent color="emerald" label="This is a tag emerald" />
      <TagComponent color="fuscia" label="This is a tag fuscia" />
      <TagComponent color="indigo" label="This is a tag indigo" />
      <TagComponent color="light-orange" label="This is a tag light-orange" />
      <TagComponent color="dark-sky-blue" label="This is a tag dark-sky-blue" />
      <TagComponent color="mistery" label="This is a tag mistery" />
    </div>
  ),
};

export default meta;
