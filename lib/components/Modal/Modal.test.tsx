import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { useState } from 'react';

import { ModalProps } from './Modal.types';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

describe('Modal', () => {
  const defaultProps = {
    className: 'className-test',
  } satisfies ModalProps;

  const setup = (props?: Partial<ModalProps>) => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(false);

      const handleOpen = () => {
        setIsOpen(true);
      };

      return (
        <>
          <Modal
            {...defaultProps}
            {...props}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            Modal Content
          </Modal>
          <Button onClick={handleOpen}>Click me!</Button>
        </>
      );
    };

    const { container: component } = render(<Wrapper />);

    const user = userEvent.setup();
    const getButton = () => screen.findByRole('button', { name: /click me!/i });
    const getModal = () => screen.findByRole('dialog');
    const getCloseButton = () =>
      screen.findByRole('button', { name: /dismiss modal/i });
    const getOverlay = () => screen.findByRole('presentation');

    return {
      component,
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

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
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
