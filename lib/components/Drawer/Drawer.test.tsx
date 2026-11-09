import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  it('should move focus into the drawer when it opens', async () => {
    const { user, findButton, findCloseButton } = setup();

    await user.click(await findButton());

    const closeButton = await findCloseButton();

    await waitFor(() => {
      expect(closeButton).toHaveFocus();
    });
  });

  it('should focus the panel itself when initialFocus is panel', async () => {
    const { user, findButton, findCloseButton } = setup({
      initialFocus: 'panel',
    });

    await user.click(await findButton());

    const dialog = await screen.findByRole('dialog');

    await waitFor(() => {
      expect(dialog).toHaveFocus();
    });
    expect(await findCloseButton()).not.toHaveFocus();
  });

  it('should keep focus inside the drawer when tabbing', async () => {
    const { user, findButton, findCloseButton } = setup();

    await user.click(await findButton());

    const closeButton = await findCloseButton();

    await waitFor(() => {
      expect(closeButton).toHaveFocus();
    });

    await user.tab();

    expect(closeButton).toHaveFocus();
  });

  it('should restore focus to the trigger when the drawer closes', async () => {
    const { user, findButton, findCloseButton } = setup();

    const trigger = await findButton();

    await user.click(trigger);
    await user.click(await findCloseButton());

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });
  describe('resize', () => {
    const pointer = { pointerId: 1, pointerType: 'touch', isPrimary: true };

    it('should resize the panel while a pointer drags the handle', async () => {
      const { user, findButton, findResizeHandle } = setup({
        canResize: true,
        position: 'left',
      });

      await user.click(await findButton());

      const handle = await findResizeHandle();
      const dialog = screen.getByRole('dialog');

      fireEvent.pointerDown(handle, { ...pointer, clientX: 500 });
      fireEvent.pointerMove(handle, { ...pointer, clientX: 620 });

      expect(dialog).toHaveStyle({ width: '620px' });

      fireEvent.pointerMove(handle, { ...pointer, clientX: 2000 });

      expect(dialog).toHaveStyle({ width: '800px' });

      fireEvent.pointerUp(handle, pointer);
      fireEvent.pointerMove(handle, { ...pointer, clientX: 450 });

      expect(dialog).toHaveStyle({ width: '800px' });
      expect(document.body.style.cursor).toBe('');
    });

    it('should stop resizing when the pointer is cancelled', async () => {
      const { user, findButton, findResizeHandle } = setup({
        canResize: true,
        position: 'left',
      });

      await user.click(await findButton());

      const handle = await findResizeHandle();
      const dialog = screen.getByRole('dialog');

      fireEvent.pointerDown(handle, { ...pointer, clientX: 500 });
      fireEvent.pointerCancel(handle, pointer);
      fireEvent.pointerMove(handle, { ...pointer, clientX: 700 });

      expect(dialog).toHaveStyle({ width: '500px' });
    });

    it('should keep the handle from scrolling the page on touch', async () => {
      const { user, findButton, findResizeHandle } = setup({
        canResize: true,
      });

      await user.click(await findButton());

      expect(await findResizeHandle()).toHaveClass(
        'touch-none',
        'tap-target',
        'touch-hit-area',
      );
    });
  });

  describe('mobile layout', () => {
    it('should take the whole screen below md by default', async () => {
      const { user, findButton } = setup();

      await user.click(await findButton());

      expect(await screen.findByRole('dialog')).toHaveClass('max-md:w-full!');
    });

    it('should keep its own width when fullScreenOnMobile is false', async () => {
      const { user, findButton } = setup({ fullScreenOnMobile: false });

      await user.click(await findButton());

      expect(await screen.findByRole('dialog')).not.toHaveClass(
        'max-md:w-full!',
      );
    });
  });

  describe('swipe to close', () => {
    const touchEvent = (
      type: 'touchstart' | 'touchmove' | 'touchend',
      point: [number, number],
      timeStamp?: number,
    ) => {
      const event = new Event(type, { bubbles: true, cancelable: true });
      const touch = { clientX: point[0], clientY: point[1] };

      Object.defineProperties(event, {
        touches: { value: type === 'touchend' ? [] : [touch] },
        targetTouches: { value: type === 'touchend' ? [] : [touch] },
        changedTouches: { value: [touch] },
      });

      if (timeStamp !== undefined) {
        Object.defineProperty(event, 'timeStamp', { value: timeStamp });
      }

      return event;
    };

    const swipe = (
      element: HTMLElement,
      from: [number, number],
      to: [number, number],
    ) => {
      fireEvent(element, touchEvent('touchstart', from));
      fireEvent(element, touchEvent('touchend', to));
    };

    it('should close a left drawer on a swipe towards the left edge', async () => {
      const { user, findButton } = setup({ position: 'left' });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      swipe(dialog, [200, 100], [100, 110]);

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    it('should ignore vertical moves, short swipes and swipes away from the edge', async () => {
      const { user, findButton } = setup({ position: 'left' });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      swipe(dialog, [200, 100], [180, 300]);
      swipe(dialog, [200, 100], [160, 100]);
      swipe(dialog, [100, 100], [260, 100]);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should follow the finger towards the edge only', async () => {
      const { user, findButton } = setup({ position: 'right' });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      fireEvent(dialog, touchEvent('touchstart', [100, 100], 0));
      fireEvent(dialog, touchEvent('touchmove', [140, 102], 50));

      expect(['40px', '40px 0']).toContain(dialog.style.translate);
      expect(dialog).toHaveClass('transition-none');

      fireEvent(dialog, touchEvent('touchmove', [60, 102], 100));

      expect(['0px', '0px 0']).toContain(dialog.style.translate);

      fireEvent(dialog, touchEvent('touchend', [60, 102], 400));

      expect(dialog.style.translate).toBe('');
      expect(dialog).not.toHaveClass('transition-none');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should spring back after a slow, short drag', async () => {
      const { user, findButton } = setup({ position: 'right' });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      fireEvent(dialog, touchEvent('touchstart', [100, 100], 0));
      fireEvent(dialog, touchEvent('touchmove', [130, 100], 300));
      fireEvent(dialog, touchEvent('touchend', [130, 100], 320));

      expect(dialog.style.translate).toBe('');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should close on a quick flick shorter than the distance threshold', async () => {
      const { user, findButton } = setup({ position: 'right' });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      fireEvent(dialog, touchEvent('touchstart', [100, 100], 0));
      fireEvent(dialog, touchEvent('touchmove', [110, 100], 10));
      fireEvent(dialog, touchEvent('touchmove', [140, 100], 30));
      fireEvent(dialog, touchEvent('touchend', [140, 100], 40));

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    it('should not track vertical drags', async () => {
      const { user, findButton } = setup({ position: 'right' });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      fireEvent(dialog, touchEvent('touchstart', [100, 100], 0));
      fireEvent(dialog, touchEvent('touchmove', [110, 160], 30));
      fireEvent(dialog, touchEvent('touchmove', [200, 170], 60));

      expect(dialog.style.translate).toBe('');

      fireEvent(dialog, touchEvent('touchend', [200, 170], 70));

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should not swipe when the touch starts on the resize handle', async () => {
      const { user, findButton, findResizeHandle } = setup({
        position: 'right',
        canResize: true,
      });

      await user.click(await findButton());
      const handle = await findResizeHandle();

      swipe(handle, [100, 100], [300, 100]);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should not close on swipe when closeOnSwipe is false', async () => {
      const { user, findButton } = setup({
        position: 'left',
        closeOnSwipe: false,
      });

      await user.click(await findButton());
      const dialog = await screen.findByRole('dialog');

      swipe(dialog, [200, 100], [60, 100]);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });
});
