import type { Meta, StoryObj } from '@storybook/react';

import { Modal as ModalComponent } from './Modal';
import { ModalProvider } from './contexts';
import { useModal } from './hooks';
import { Button } from '../Button/Button';

type Story = StoryObj<typeof ModalComponent>;

const meta: Meta<typeof ModalComponent> = {
  component: ModalComponent,
};

export const Modal: Story = {
  render: () => {
    const WrapperButton = () => {
      const { onOpen } = useModal();
      return <Button onClick={onOpen}>Click me to Open Modal!</Button>;
    };

    return (
      <div className="w-[350px]">
        <ModalProvider>
          <WrapperButton />
          <ModalComponent>This is a modal content test</ModalComponent>
        </ModalProvider>
      </div>
    );
  },
};

export default meta;
