import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Theme } from '@/domain/theme';

import { Modal as ModalComponent } from './Modal';

type Story = StoryObj<typeof ModalComponent>;

const meta: Meta<typeof ModalComponent> = {
  title: 'In Review/Modal',
  component: ModalComponent,
};

export const Modal: Story = {
  render: function ModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<Theme>('kubefirst');
    const handleClose = () => setIsOpen(false);
    const handleOpen = (theme?: Theme) => {
      setIsOpen(true);
      setCurrentTheme(theme);
    };

    return (
      <div className="w-[450px]">
        <div className="flex flex-col gap-5">
          <Button onClick={() => handleOpen('kubefirst')} theme="kubefirst">
            Click me to Open Modal with Kubefirst theme!
          </Button>
        </div>

        <ModalComponent
          isOpen={isOpen}
          onClose={handleClose}
          theme={currentTheme}
        >
          <ModalComponent.Header className="text-center text-xl bg-gray-50 p-4 border-b">
            This is the Header
          </ModalComponent.Header>

          <ModalComponent.Body>
            <div className="flex justify-center items-center h-full text-gray-900">
              This is the Body
            </div>
          </ModalComponent.Body>

          <ModalComponent.Footer className="text-center text-sm bg-gray-50 p-4 border-t">
            This is the Footer
          </ModalComponent.Footer>
        </ModalComponent>
      </div>
    );
  },
};

export default meta;
