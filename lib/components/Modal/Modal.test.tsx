import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ModalProps } from './Modal.types';
import { Modal } from './Modal';
import { ModalProvider } from './contexts';
import { Button } from '../Button/Button';
import { useModal } from './hooks';

describe('Modal', () => {
  const defaultProps = {
    className: 'className-test',
  } satisfies ModalProps;

  const setup = (props?: Partial<ModalProps>) => {
    const Wrapper = () => {
      const { onOpen } = useModal();

      return (
        <>
          <Modal {...defaultProps} {...props}>
            Modal Content
          </Modal>
          <Button onClick={() => onOpen()}>Click me!</Button>
        </>
      );
    };

    render(<Wrapper />, { wrapper: ModalProvider });

    const user = userEvent.setup();
    const getButton = () => screen.findByRole('button', { name: /click me!/i });
    const getModal = () => screen.findByRole('dialog');
    const getCloseButton = () =>
      screen.findByRole('button', { name: /dismiss modal/i });
    const getOverlay = () => screen.findByRole('presentation');

    return {
      user,
      getButton,
      getModal,
      getCloseButton,
      getOverlay,
    };
  };

  it('should render correctly', async () => {
    const { getButton } = setup();

    const button = await getButton();

    expect(button).toBeInTheDocument();
  });

  it('should show de modal after click the button', async () => {
    const { user, getButton, getModal } = setup();

    const button = await getButton();

    await user.click(button);

    const modal = await getModal();

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('Modal Content');
  });

  it('should close the modal after the close button has been clicked', async () => {
    const { user, getButton, getModal, getCloseButton } = setup();

    const button = await getButton();

    await user.click(button);

    const modal = await getModal();
    const closeButton = await getCloseButton();

    await user.click(closeButton);

    expect(modal).not.toBeInTheDocument();
  });

  it('should close the modal after the escape key has been clicked', async () => {
    const { user, getButton, getModal } = setup();

    const button = await getButton();

    await user.click(button);

    const modal = await getModal();

    await user.keyboard('{Escape}');

    expect(modal).not.toBeInTheDocument();
  });

  it('should close the modal when the user made click outside the modal', async () => {
    const { user, getButton, getModal, getOverlay } = setup();

    const button = await getButton();

    await user.click(button);

    const modal = await getModal();
    const overlay = await getOverlay();

    await user.click(overlay);

    expect(modal).not.toBeInTheDocument();
  });
});
