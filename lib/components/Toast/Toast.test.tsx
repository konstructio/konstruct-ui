import { act, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import {
  ComponentProps,
  createElement,
  forwardRef,
  ReactNode,
  useRef,
} from 'react';

import { TOAST_DISMISS_STAGGER_MS } from './constants';
import { Toast } from './Toast';
import { Props, ToastItem } from './Toast.types';

vi.mock('motion/react', () => {
  const MOTION_PROPS = [
    'initial',
    'animate',
    'exit',
    'transition',
    'onAnimationComplete',
    'style',
    'drag',
    'dragSnapToOrigin',
    'dragTransition',
    'onDragStart',
    'onDragEnd',
  ];

  type DragProps = {
    drag?: string | false;
    onDragStart?: () => void;
    onDragEnd?: (
      event: unknown,
      info: { offset: { x: number }; velocity: { x: number } },
    ) => void;
  };

  const plain = <T extends 'ol' | 'li' | 'div'>(tag: T) => {
    const Component = forwardRef<
      HTMLElement,
      ComponentProps<T> & Record<string, unknown>
    >((props, ref) => {
      const { drag, onDragStart, onDragEnd } = props as DragProps;
      const startXRef = useRef<number | null>(null);

      const dragHandlers = drag
        ? {
            onPointerDown: (event: PointerEvent) => {
              startXRef.current = event.clientX;
              onDragStart?.();
            },
            onPointerUp: (event: PointerEvent) => {
              if (startXRef.current === null) {
                return;
              }

              onDragEnd?.(event, {
                offset: { x: event.clientX - startXRef.current },
                velocity: { x: 0 },
              });
              startXRef.current = null;
            },
          }
        : {};

      return createElement(tag, {
        ...Object.fromEntries(
          Object.entries(props).filter(([key]) => {
            return !MOTION_PROPS.includes(key);
          }),
        ),
        ...dragHandlers,
        ref,
      });
    });

    Component.displayName = `Motion${tag}`;

    return Component;
  };

  return {
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
    motion: { ol: plain('ol'), li: plain('li'), div: plain('div') },
    usePresence: () => {
      return [true, () => {}];
    },
    useReducedMotion: () => {
      return true;
    },
  };
});

describe('Toast', () => {
  const item = (id: string, overrides: Partial<ToastItem> = {}): ToastItem => ({
    id,
    title: id,
    duration: 0,
    ...overrides,
  });

  const setup = (props?: Partial<Props>) => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    const view = render(<Toast toasts={[]} onDismiss={onDismiss} {...props} />);

    const getRegion = (name = 'Notifications') => {
      return screen.getByRole('region', { name });
    };

    return { ...view, user, onDismiss, getRegion };
  };

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render an empty named region when there are no toasts', () => {
    const { getRegion } = setup();

    expect(getRegion()).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('should name the region and the close button from the labels', () => {
    const { getRegion } = setup({
      label: 'Notificaciones',
      closeLabel: 'Cerrar aviso',
      toasts: [item('a')],
    });

    expect(getRegion('Notificaciones')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cerrar aviso' }),
    ).toBeInTheDocument();
  });

  it('should portal the region to document.body by default', () => {
    const { container, getRegion } = setup();

    expect(container).not.toContainElement(getRegion());
    expect(getRegion().parentElement).toBe(document.body);
  });

  it('should render in place when isPortal is false', () => {
    const { container, getRegion } = setup({ isPortal: false });

    expect(container).toContainElement(getRegion());
  });

  it('should render into the given container', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    const { getRegion } = setup({ container: target });

    expect(getRegion().parentElement).toBe(target);
    target.remove();
  });

  it('should render a toast with its title and description', () => {
    setup({
      toasts: [item('a', { title: 'Saved', description: 'All good' })],
    });

    const status = screen.getByRole('status');

    expect(status).toHaveTextContent('Saved');
    expect(status).toHaveTextContent('All good');
  });

  it('should put the newest toast first', () => {
    const { getRegion } = setup({
      toasts: [
        item('first', { title: 'First' }),
        item('second', { title: 'Second' }),
      ],
    });

    const items = within(getRegion()).getAllByRole('listitem');

    expect(items[0]).toHaveTextContent('Second');
    expect(items[1]).toHaveTextContent('First');
  });

  it('should hide toasts beyond maxVisible from assistive tech', () => {
    const { getRegion } = setup({
      maxVisible: 2,
      toasts: [item('1'), item('2'), item('3')],
    });

    const items = within(getRegion()).getAllByRole('listitem', {
      hidden: true,
    });

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveAttribute('aria-hidden', 'false');
    expect(items[1]).toHaveAttribute('aria-hidden', 'false');
    expect(items[2]).toHaveAttribute('aria-hidden', 'true');
  });

  it('should dismiss a toast when its duration elapses', () => {
    vi.useFakeTimers();
    const { onDismiss } = setup({ toasts: [item('a', { duration: 1000 })] });

    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(onDismiss).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  it('should keep a toast with no duration until dismissed', () => {
    vi.useFakeTimers();
    const { onDismiss } = setup({ toasts: [item('a', { duration: 0 })] });

    act(() => {
      vi.advanceTimersByTime(60_000);
    });

    expect(onDismiss).not.toHaveBeenCalled();
  });

  const setupWithClock = (props?: Partial<Props>) => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ delay: null });
    const view = setup(props);

    const tick = (ms: number) => {
      act(() => {
        vi.advanceTimersByTime(ms);
      });
    };

    return { ...view, user, tick };
  };

  it('should resume the countdown with the time left after a hover', async () => {
    const { onDismiss, getRegion, user, tick } = setupWithClock({
      toasts: [item('a', { duration: 1000 })],
    });

    tick(600);
    await user.hover(getRegion());
    tick(5000);
    expect(onDismiss).not.toHaveBeenCalled();

    await user.unhover(getRegion());
    tick(200);
    expect(onDismiss).not.toHaveBeenCalled();

    tick(300);
    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  it('should resume the countdown when the window loses focus while hovered', async () => {
    const { onDismiss, getRegion, user, tick } = setupWithClock({
      toasts: [item('a', { duration: 1000 })],
    });

    await user.hover(getRegion());
    act(() => {
      window.dispatchEvent(new Event('blur'));
    });
    tick(1100);

    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  it('should restart the countdown from the full duration after a hover', async () => {
    const { onDismiss, getRegion, user, tick } = setupWithClock({
      hoverBehavior: 'restart',
      toasts: [item('a', { duration: 1000 })],
    });

    tick(600);
    await user.hover(getRegion());
    tick(5000);
    await user.unhover(getRegion());

    tick(700);
    expect(onDismiss).not.toHaveBeenCalled();

    tick(400);
    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  it('should dismiss one by one in appearance order after a hover', async () => {
    const { onDismiss, getRegion, user, tick } = setupWithClock({
      hoverBehavior: 'restart',
      toasts: [
        item('first', { duration: 1000 }),
        item('second', { duration: 1000 }),
        item('third', { duration: 1000 }),
      ],
    });

    await user.hover(getRegion());
    await user.unhover(getRegion());

    tick(1000);
    expect(onDismiss.mock.calls).toEqual([['first']]);

    tick(TOAST_DISMISS_STAGGER_MS);
    expect(onDismiss.mock.calls).toEqual([['first'], ['second']]);

    tick(TOAST_DISMISS_STAGGER_MS);
    expect(onDismiss.mock.calls).toEqual([['first'], ['second'], ['third']]);
  });

  it('should pause the countdown when a mouse enters the stack', () => {
    const { onDismiss, getRegion, tick } = setupWithClock({
      toasts: [item('a', { duration: 1000 })],
    });

    fireEvent.pointerEnter(getRegion(), { pointerType: 'mouse' });
    tick(5000);

    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('should not expand the stack when a touch pointer enters it', () => {
    const { onDismiss, getRegion, tick } = setupWithClock({
      toasts: [item('a', { duration: 1000 })],
    });

    fireEvent.pointerEnter(getRegion(), { pointerType: 'touch' });
    tick(1000);

    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  it('should expand the stack on a tap and keep it expanded on further taps', () => {
    const { onDismiss, getRegion, tick } = setupWithClock({
      toasts: [item('a', { duration: 1000 })],
    });

    fireEvent.pointerDown(getRegion(), { pointerType: 'touch' });
    fireEvent.pointerLeave(getRegion(), { pointerType: 'touch' });
    tick(2000);
    fireEvent.pointerDown(screen.getByRole('status'), { pointerType: 'touch' });
    tick(2000);

    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('should collapse the stack on a tap outside it', () => {
    const { onDismiss, getRegion, tick } = setupWithClock({
      toasts: [item('a', { duration: 1000 })],
    });

    fireEvent.pointerDown(getRegion(), { pointerType: 'touch' });
    tick(2000);
    fireEvent.pointerDown(document.body, { pointerType: 'touch' });
    tick(1000);

    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  describe('swipe to dismiss', () => {
    const WIDTH = 400;

    beforeEach(() => {
      vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(
        WIDTH,
      );
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    const swipe = (distance: number) => {
      const card = screen.getByRole('listitem');

      fireEvent.pointerDown(card, { pointerType: 'touch', clientX: 0 });
      fireEvent.pointerUp(card, { pointerType: 'touch', clientX: distance });
    };

    it('should dismiss a toast swiped past 40% of its width', () => {
      const { onDismiss } = setup({ toasts: [item('a')] });

      swipe(WIDTH * 0.4 + 1);

      expect(onDismiss).toHaveBeenCalledWith('a');
    });

    it('should keep a toast swiped less than 40% of its width', () => {
      const { onDismiss } = setup({ toasts: [item('a')] });

      swipe(-(WIDTH * 0.4 - 1));

      expect(onDismiss).not.toHaveBeenCalled();
    });

    it('should hold the countdown while the toast is being dragged', () => {
      const { onDismiss, tick } = setupWithClock({
        toasts: [item('a', { duration: 1000 })],
      });
      const card = screen.getByRole('listitem');

      fireEvent.pointerDown(card, { pointerType: 'mouse', clientX: 0 });
      tick(5000);

      expect(onDismiss).not.toHaveBeenCalled();

      fireEvent.pointerUp(card, { pointerType: 'mouse', clientX: 10 });
      tick(1000);

      expect(onDismiss).toHaveBeenCalledWith('a');
    });

    it('should let the page scroll vertically over a toast', () => {
      setup({ toasts: [item('a')] });

      expect(screen.getByRole('listitem')).toHaveClass('touch-pan-y');
    });
  });

  it('should grow the close button hit area on touch', () => {
    setup({ toasts: [item('a')] });

    expect(screen.getByRole('button', { name: 'Close toast' })).toHaveClass(
      'relative',
      'tap-target',
      'touch-hit-area',
    );
  });

  it('should dismiss a toast from its close button', async () => {
    const { user, onDismiss } = setup({ toasts: [item('a')] });

    await user.click(screen.getByRole('button', { name: 'Close toast' }));

    expect(onDismiss).toHaveBeenCalledWith('a');
  });

  it('should not offer a close button when disabled', () => {
    setup({ toasts: [item('a', { showCloseButton: false })] });

    expect(
      screen.queryByRole('button', { name: 'Close toast' }),
    ).not.toBeInTheDocument();
  });

  it('should cap each toast at the region width by default', () => {
    setup({ toasts: [item('a')] });

    expect(screen.getByRole('listitem')).toHaveClass('max-w-full');
    expect(screen.getByRole('listitem')).not.toHaveClass('w-max');
  });

  it('should size each toast to its content when autoWidth is set', () => {
    setup({ autoWidth: true, toasts: [item('a')] });

    expect(screen.getByRole('listitem')).toHaveClass(
      'w-max',
      'max-w-[calc(100vw-3rem)]',
    );
  });

  it("should doesn't have violations", async () => {
    setup({
      toasts: [
        item('a', {
          title: 'Saved',
          description: 'All good',
          type: 'success',
        }),
        item('b', {
          title: 'Failed',
          type: 'error',
          showCloseButton: false,
        }),
      ],
    });

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
