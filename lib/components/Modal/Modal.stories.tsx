import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog with Header, Body, and Footer sub-components and Escape-to-close support. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show the X close button in the corner',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onClose: { action: 'closed', table: { disable: true } },
  },
  args: {
    showCloseButton: true,
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
            Open modal
          </Button>
          <Modal
            {...args}
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <Modal.Header>Confirm action</Modal.Header>
            <Modal.Body>Are you sure you want to proceed?</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };

    return <Demo />;
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = {};
