import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { Command } from './Command';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A command palette dialog for keyboard-driven navigation and actions. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
    },
    emptyResults: {
      control: { type: 'text' },
      description: 'Text shown when no results match the search',
    },
    title: {
      control: { type: 'text' },
      description: 'Accessible title for the dialog',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    placeholder: 'Type a command or search...',
    emptyResults: 'No results found.',
    title: 'Command Palette',
  },
  render: (args) => {
    const Demo = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Open command palette
          </Button>
          <Command {...args} open={open} onOpenChange={setOpen} />
        </>
      );
    };

    return <Demo />;
  },
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Playground: Story = {};
