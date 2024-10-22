import type { Meta, StoryObj } from '@storybook/react';

import { Modal as ModalComponent } from './Modal';
import { ModalProvider } from './contexts';
import { useModal } from './hooks';
import { Button } from '../Button/Button';
import { Theme, ThemeProvider, useTheme } from '../../contexts';

type Story = StoryObj<typeof ModalComponent>;

const meta: Meta<typeof ModalComponent> = {
  component: ModalComponent,
};

export const Modal: Story = {
  render: () => {
    const WrapperButton = () => {
      const { setTheme } = useTheme();
      const { onOpen } = useModal();

      const handleOpen = (themeName: Theme) => {
        setTheme?.(themeName);
        onOpen();
      };

      return (
        <div className="flex flex-col gap-5">
          <Button onClick={() => handleOpen('kubefirst')} theme="kubefirst">
            Click me to Open Modal with Kubefirst theme!
          </Button>
          <Button onClick={() => handleOpen('konstruct')} theme="kontruct">
            Click me to Open Modal with Kontruct theme!
          </Button>
          <Button onClick={() => handleOpen('colony')} theme="colony">
            Click me to Open Modal with Colony theme!
          </Button>
        </div>
      );
    };

    return (
      <div className="w-[450px]">
        <ThemeProvider>
          <ModalProvider>
            <WrapperButton />
            <ModalComponent>
              <div className="flex justify-center items-center h-full">
                This is a modal content test
              </div>
            </ModalComponent>
          </ModalProvider>
        </ThemeProvider>
      </div>
    );
  },
};

export default meta;
