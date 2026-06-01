import type { Meta, StoryObj } from '@storybook/react-vite';

import { DropdownButton } from './DropdownButton';

const meta: Meta<typeof DropdownButton> = {
  title: 'Components/DropdownButton',
  component: DropdownButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A button with an attached dropdown menu for selecting actions. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of options to display in the dropdown',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the wrapper',
    },
    buttonClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the trigger button',
    },
  },
  args: {
    options: [
      { label: 'PDF' },
      { label: 'CSV' },
      { label: 'Excel' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const Playground: Story = {};
