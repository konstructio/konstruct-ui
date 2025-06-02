import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tag as TagComponent } from './Tag';

type Story = StoryObj<typeof TagComponent>;

const meta: Meta<typeof TagComponent> = {
  title: 'In Review/Tag',
  component: TagComponent,
};

export const Tag: Story = {
  render: () => (
    <div className="w-[350px] flex flex-col gap-3">
      <TagComponent id="default" label="This is a tag with default color" />
      <TagComponent id="gray" color="gray" label="This is a tag gray" />
      <TagComponent id="cyan" color="cyan" label="This is a tag cyan" />
      <TagComponent id="gold" color="gold" label="This is a tag gold" />
      <TagComponent id="green" color="green" label="This is a tag green" />
      <TagComponent
        id="light"
        color="light blue"
        label="This is a tag light blue"
      />
      <TagComponent id="lime" color="lime" label="This is a tag lime" />
      <TagComponent id="pink" color="pink" label="This is a tag pink" />
      <TagComponent id="purple" color="purple" label="This is a tag purple" />
      <TagComponent
        id="emerald"
        color="emerald"
        label="This is a tag emerald"
      />
      <TagComponent id="fuscia" color="fuscia" label="This is a tag fuscia" />
      <TagComponent id="indigo" color="indigo" label="This is a tag indigo" />
      <TagComponent
        id="light"
        color="light-orange"
        label="This is a tag light-orange"
      />
      <TagComponent
        id="dark"
        color="dark-sky-blue"
        label="This is a tag dark-sky-blue"
      />
      <TagComponent
        id="mistery"
        color="mistery"
        label="This is a tag mistery"
      />
    </div>
  ),
};

export default meta;
