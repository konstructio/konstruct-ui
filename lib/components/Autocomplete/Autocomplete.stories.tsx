import type { Meta, StoryObj } from '@storybook/react-vite';

import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A text input with suggestions filtered as the user types. Use the **Controls** panel below to interact with the props.',
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
      description: 'Placeholder text',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of options to suggest',
    },
    placeHolderEmptyValues: {
      control: { type: 'text' },
      description: 'Text shown when no options match',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
  },
  args: {
    label: 'Framework',
    placeholder: 'Search frameworks...',
    options: [
      { value: 'React' },
      { value: 'Vue' },
      { value: 'Angular' },
      { value: 'Svelte' },
      { value: 'Solid' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Playground: Story = {};
