import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { ComponentProps, createElement, forwardRef, ReactNode } from 'react';

import { useToast, useToastStore } from './hooks';
import { createToastStore, defaultToastStore } from './store';
import { Toast } from './Toast';
import { ToastProvider } from './ToastProvider';
import { Props } from './ToastProvider.types';

vi.mock('motion/react', () => {
  const MOTION_PROPS = [
    'initial',
    'animate',
    'exit',
    'transition',
    'onAnimationComplete',
    'style',
  ];

  const plain = <T extends 'ol' | 'li' | 'div'>(tag: T) => {
    const Component = forwardRef<
      HTMLElement,
      ComponentProps<T> & Record<string, unknown>
    >((props, ref) => {
      return createElement(tag, {
        ...Object.fromEntries(
          Object.entries(props).filter(([key]) => {
            return !MOTION_PROPS.includes(key);
          }),
        ),
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

describe('ToastProvider', () => {
  afterEach(() => {
    defaultToastStore.getState().clear();
  });

  const Publisher = () => {
    const { addToast } = useToast();

    return (
      <button
        type="button"
        onClick={() => {
          addToast({ title: 'Saved', type: 'success', duration: 0 });
        }}
      >
        Publish
      </button>
    );
  };

  const setup = (props?: Partial<Props>) => {
    const user = userEvent.setup();
    const { container } = render(
      <ToastProvider {...props}>
        <Publisher />
        <Toast />
      </ToastProvider>,
    );

    return { user, container };
  };

  it('should render toasts published through useToast', async () => {
    const { user } = setup();

    await user.click(screen.getByRole('button', { name: 'Publish' }));

    expect(screen.getByRole('status')).toHaveTextContent('Saved');
  });

  it('should dismiss a published toast from its close button', async () => {
    const { user } = setup();

    await user.click(screen.getByRole('button', { name: 'Publish' }));
    await user.click(screen.getByRole('button', { name: 'Close toast' }));

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('should share an injected store', () => {
    const store = createToastStore();
    setup({ store });

    act(() => {
      store.getState().add({ title: 'From outside', duration: 0 });
    });

    expect(screen.getByRole('status')).toHaveTextContent('From outside');
  });

  it('should expose the queue through useToastStore', () => {
    const store = createToastStore();
    const { result } = renderHook(
      () => {
        return useToastStore((state) => {
          return state.toasts;
        });
      },
      {
        wrapper: ({ children }) => (
          <ToastProvider store={store}>{children}</ToastProvider>
        ),
      },
    );

    act(() => {
      store.getState().add({ title: 'Queued' });
    });

    expect(result.current).toHaveLength(1);
    expect(result.current[0].title).toBe('Queued');
  });

  it('should keep the actions stable across renders', () => {
    const { result, rerender } = renderHook(useToast, {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    });
    const first = result.current;

    rerender();

    expect(result.current).toBe(first);
  });

  const Standalone = ({ limit }: { limit?: number }) => {
    const { addToast } = useToast();

    return (
      <>
        <button
          type="button"
          onClick={() => {
            addToast({ title: 'First', duration: 0 });
            addToast({ title: 'Second', duration: 0 });
          }}
        >
          Publish two
        </button>
        <Toast limit={limit} />
      </>
    );
  };

  it('should share a built-in store with the stack without a provider', async () => {
    const user = userEvent.setup();
    render(<Standalone />);

    await user.click(screen.getByRole('button', { name: 'Publish two' }));

    expect(screen.getAllByRole('status')).toHaveLength(2);
  });

  it('should keep a single toast when the stack sets limit 1', async () => {
    const user = userEvent.setup();
    render(<Standalone limit={1} />);

    await user.click(screen.getByRole('button', { name: 'Publish two' }));

    const statuses = screen.getAllByRole('status');

    expect(statuses).toHaveLength(1);
    expect(statuses[0]).toHaveTextContent('Second');
  });

  it('should apply the stack duration to toasts published without one', () => {
    render(<Toast duration={800} />);

    act(() => {
      defaultToastStore.getState().add({ title: 'Timed' });
    });

    expect(defaultToastStore.getState().toasts[0].duration).toBe(800);
  });

  it("should doesn't have violations", async () => {
    const { user } = setup();

    await user.click(screen.getByRole('button', { name: 'Publish' }));

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
