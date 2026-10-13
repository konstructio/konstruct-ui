import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { useState } from 'react';

import { Props } from './Modal.types';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

describe('Modal', () => {
  const defaultProps = {
    className: 'className-test',
  } satisfies Props;

  const setup = (props?: Partial<Props>) => {
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

  it('should portal into the nearest [data-theme] container', async () => {
    const ThemeWrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <div data-theme="dark" data-testid="theme-container">
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            Modal Content
          </Modal>
        </div>
      );
    };

    render(<ThemeWrapper />);

    const themeContainer = screen.getByTestId('theme-container');
    const modal = await screen.findByRole('dialog');

    expect(themeContainer).toContainElement(modal);
  });

  it('should move focus into the modal when it opens', async () => {
    const { user, getButton, getCloseButton } = setup();

    await user.click(await getButton());

    const closeButton = await getCloseButton();

    await waitFor(() => {
      expect(closeButton).toHaveFocus();
    });
  });

  it('should keep focus inside the modal when tabbing', async () => {
    const { user, getButton, getCloseButton } = setup();

    await user.click(await getButton());

    const closeButton = await getCloseButton();

    await waitFor(() => {
      expect(closeButton).toHaveFocus();
    });

    await user.tab();

    expect(closeButton).toHaveFocus();
  });

  it('should restore focus to the trigger when the modal closes', async () => {
    const { user, getButton, getCloseButton } = setup();

    const trigger = await getButton();

    await user.click(trigger);
    await user.click(await getCloseButton());

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });
  describe('accessible name', () => {
    it('should name the dialog with ariaLabel', () => {
      render(
        <Modal isOpen ariaLabel="Cluster settings">
          <Modal.Body>Content</Modal.Body>
        </Modal>,
      );

      expect(
        screen.getByRole('dialog', { name: 'Cluster settings' }),
      ).toBeInTheDocument();
    });

    it('should name the dialog with ariaLabelledBy', () => {
      render(
        <Modal isOpen ariaLabelledBy="modal-title">
          <Modal.Header>
            <h2 id="modal-title">Delete cluster</h2>
          </Modal.Header>
        </Modal>,
      );

      expect(
        screen.getByRole('dialog', { name: 'Delete cluster' }),
      ).toBeInTheDocument();
    });
  });
});
