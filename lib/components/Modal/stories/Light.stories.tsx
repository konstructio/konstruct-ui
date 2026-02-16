import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Typography } from '@/components/Typography/Typography';

import { Modal as ModalComponent } from '../Modal';

type Story = StoryObj<typeof ModalComponent>;

const meta = {
  title: 'In Review/Modal/Light',
  component: ModalComponent,
} satisfies Meta<typeof ModalComponent>;

export const Light: Story = {
  render: function ModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
      <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <ModalComponent isOpen={isOpen} onClose={handleClose}>
          <ModalComponent.Header className="text-center bg-gray-50 p-4 border-b">
            <Typography variant="h4" className="text-slate-700">
              This is the Header
            </Typography>
          </ModalComponent.Header>

          <ModalComponent.Body>
            <div className="flex justify-center items-center h-full">
              <Typography variant="body1" className="text-gray-900">
                This is the Body
              </Typography>
            </div>
          </ModalComponent.Body>

          <ModalComponent.Footer className="text-center bg-gray-50 p-4 border-t">
            <Typography variant="body2" className="text-slate-500">
              This is the Footer
            </Typography>
          </ModalComponent.Footer>
        </ModalComponent>
      </div>
    );
  },
};

export default meta;
