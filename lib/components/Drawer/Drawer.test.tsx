import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { Drawer } from './Drawer';
import { Props } from './Drawer.types';

describe('Drawer', () => {
  const defaultProps = {
    className: 'className-test',
  } satisfies Partial<Props>;

  const setup = (props?: Partial<Props>) => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(false);

      const handleOpen = () => {
        setIsOpen(true);
      };

      return (
        <>
          <Drawer
            {...defaultProps}
            {...props}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Drawer.Header>Header Content</Drawer.Header>
            <Drawer.Body>Body Content</Drawer.Body>
            <Drawer.Footer>Footer Content</Drawer.Footer>
          </Drawer>
          <Button onClick={handleOpen}>Open Drawer</Button>
        </>
      );
    };

    const { container: component } = render(<Wrapper />);

    const user = userEvent.setup();
    const findButton = () =>
      screen.findByRole('button', { name: /open drawer/i });
    const findDrawer = () => screen.findByRole('dialog');
    const findCloseButton = () =>
      screen.findByRole('button', { name: /dismiss drawer/i });
    const findOverlay = () =>
      screen.findByRole('presentation', { hidden: true });
    const findResizeHandle = () =>
      screen.findByRole('button', { name: /resize drawer/i });
    const queryDrawer = () => screen.queryByRole('dialog');
    const queryCloseButton = () =>
      screen.queryByRole('button', { name: /dismiss drawer/i });

    return {
      component,
      user,
      findButton,
      findDrawer,
      findCloseButton,
      findOverlay,
      findResizeHandle,
      queryDrawer,
      queryCloseButton,
    };
  };

  it('should render correctly', async () => {
    const { findButton } = setup();

    const button = await findButton();

    expect(button).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should show the drawer after clicking the button', async () => {
    const { user, findButton, findDrawer } = setup();

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();

    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveTextContent('Header Content');
    expect(drawer).toHaveTextContent('Body Content');
    expect(drawer).toHaveTextContent('Footer Content');
  });

  it('should close the drawer after the close button has been clicked', async () => {
    const { user, findButton, findDrawer, findCloseButton, queryDrawer } =
      setup();

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();
    const closeButton = await findCloseButton();

    expect(drawer).toBeInTheDocument();

    await user.click(closeButton);

    await waitFor(() => {
      expect(queryDrawer()).not.toBeInTheDocument();
    });
  });

  it('should close the drawer after the escape key has been pressed', async () => {
    const { user, findButton, findDrawer, queryDrawer } = setup();

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();

    expect(drawer).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(queryDrawer()).not.toBeInTheDocument();
    });
  });

  it('should close the drawer when clicking the overlay', async () => {
    const { user, findButton, findDrawer, findOverlay, queryDrawer } = setup();

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();
    const overlay = await findOverlay();

    expect(drawer).toBeInTheDocument();

    await user.click(overlay);

    await waitFor(() => {
      expect(queryDrawer()).not.toBeInTheDocument();
    });
  });

  it('should render on the left side when position is left', async () => {
    const { user, findButton, findDrawer } = setup({ position: 'left' });

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();

    expect(drawer).toHaveClass('left-0');
  });

  it('should render on the right side when position is right', async () => {
    const { user, findButton, findDrawer } = setup({ position: 'right' });

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();

    expect(drawer).toHaveClass('right-0');
  });

  it('should not show close button when showCloseButton is false', async () => {
    const { user, findButton, findDrawer, queryCloseButton } = setup({
      showCloseButton: false,
    });

    const button = await findButton();

    await user.click(button);

    const drawer = await findDrawer();

    expect(drawer).toBeInTheDocument();
    expect(queryCloseButton()).not.toBeInTheDocument();
  });

  it('should show resize handle when canResize is true', async () => {
    const { user, findButton, findResizeHandle } = setup({ canResize: true });

    const button = await findButton();

    await user.click(button);

    const resizeHandle = await findResizeHandle();

    expect(resizeHandle).toBeInTheDocument();
  });
});
