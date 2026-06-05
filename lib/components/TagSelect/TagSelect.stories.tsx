import type { Meta, StoryObj } from '@storybook/react-vite';

import { TagSelect } from './TagSelect';

const meta: Meta<typeof TagSelect> = {
  title: 'Components/TagSelect',
  component: TagSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An input that allows selecting from a list of tags. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no selection',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    multiselect: {
      control: { type: 'boolean' },
      description: 'Whether multiple tags can be selected',
    },
    options: {
      control: { type: 'object' },
      description: 'Available tag options',
    },
  },
  args: {
    label: 'Categories',
    placeholder: 'Select categories...',
    multiselect: true,
    options: [
      { id: 1, label: 'Frontend', color: 'light blue' },
      { id: 2, label: 'Backend', color: 'green' },
      { id: 3, label: 'DevOps', color: 'purple' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof TagSelect>;

export const Playground: Story = {};
