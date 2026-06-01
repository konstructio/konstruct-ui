import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A panel component that slides in from the side of the screen. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    position: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
      description: 'Position of the drawer',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show the X close button in the corner',
    },
    canResize: {
      control: { type: 'boolean' },
      description: 'Enable resizable drawer',
    },
    defaultWidth: {
      control: { type: 'number' },
      description: 'Default width of the drawer in pixels',
    },
    minWidth: {
      control: { type: 'number' },
      description: 'Minimum width when resizable',
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width when resizable',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onClose: { action: 'closed', table: { disable: true } },
  },
  args: {
    position: 'right',
    showCloseButton: true,
    canResize: false,
    defaultWidth: 500,
    minWidth: 400,
    maxWidth: 800,
  },
  render: (args) => {
    const Demo = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Open drawer
          </Button>
          <Drawer
            {...args}
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <Drawer.Header>Drawer title</Drawer.Header>
            <Drawer.Body>Some drawer content goes here.</Drawer.Body>
            <Drawer.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </Button>
            </Drawer.Footer>
          </Drawer>
        </>
      );
    };

    return <Demo />;
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Playground: Story = {};
