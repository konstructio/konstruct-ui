import type { Meta, StoryObj } from '@storybook/react';
import { useState, ReactNode } from 'react';

import { ThemeProvider, useTheme } from '@/contexts';
import { Theme } from '@/domain/theme';

import { Button } from '@/components/Button/Button';

import { Modal as ModalComponent } from './Modal';

type Story = StoryObj<typeof ModalComponent>;

const meta: Meta<typeof ModalComponent> = {
  title: 'In Review/Modal',
  component: ModalComponent,
};

export const Modal: Story = {
  render: () => {
    const Wrapper = ({
      onOpen,
      children,
    }: {
      onOpen: () => void;
      children: ReactNode;
    }) => {
      const { setTheme } = useTheme();

      const handleOpen = (themeName: Theme) => {
        setTheme?.(themeName);
        onOpen();
      };

      return (
        <>
          <div className="flex flex-col gap-5">
            <Button onClick={() => handleOpen('kubefirst')} theme="kubefirst">
              Click me to Open Modal with Kubefirst theme!
            </Button>
            <Button onClick={() => handleOpen('colony')} theme="colony">
              Click me to Open Modal with Colony theme!
            </Button>
          </div>
          {children}
        </>
      );
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <div className="w-[450px]">
        <ThemeProvider>
          <Wrapper onOpen={handleOpen}>
            <ModalComponent isOpen={isOpen} onClose={handleClose}>
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
          </Wrapper>
        </ThemeProvider>
      </div>
    );
  },
};

export default meta;
