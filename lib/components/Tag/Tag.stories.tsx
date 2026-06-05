import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A small label component for categorization or status display. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text displayed in the tag',
    },
    color: {
      control: { type: 'select' },
      options: [
        'gray',
        'gray-800',
        'cyan',
        'gold',
        'green',
        'light blue',
        'lime',
        'pink',
        'purple',
        'emerald',
        'fuscia',
        'indigo',
        'light-orange',
        'dark-sky-blue',
        'mistery',
      ],
      description: 'Color variant for the tag',
    },
    isSelected: {
      control: { type: 'boolean' },
      description: 'Whether the tag is in a selected state',
    },
  },
  args: {
    id: 'tag-1',
    label: 'Active',
    color: 'green',
    isSelected: false,
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Playground: Story = {};
