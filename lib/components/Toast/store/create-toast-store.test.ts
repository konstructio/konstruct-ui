import { DEFAULT_TOAST_DURATION, DEFAULT_TOAST_LIMIT } from '../constants';

import { createToastStore } from './create-toast-store';
import { ToastStoreOptions } from './create-toast-store.types';

describe('createToastStore', () => {
  const setup = (options?: ToastStoreOptions) => {
    const store = createToastStore(options);
    const listener = vi.fn();
    store.subscribe(listener);

    return { store, listener };
  };

  it('should start empty', () => {
    const { store } = setup();

    expect(store.getState().toasts).toEqual([]);
  });

  it('should add a toast with defaults and return its id', () => {
    const { store, listener } = setup();

    const id = store.getState().add({ title: 'Saved' });

    expect(store.getState().toasts).toEqual([
      {
        id,
        title: 'Saved',
        type: 'info',
        duration: DEFAULT_TOAST_DURATION,
        showCloseButton: true,
      },
    ]);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should apply the configured default duration', () => {
    const { store } = setup({ duration: 800 });

    store.getState().add({ title: 'Quick' });

    expect(store.getState().toasts[0].duration).toBe(800);
  });

  it('should keep the given fields', () => {
    const { store } = setup();

    store.getState().add({
      title: 'Failed',
      description: 'Try again',
      type: 'error',
      duration: 0,
      showCloseButton: false,
    });

    expect(store.getState().toasts[0]).toMatchObject({
      title: 'Failed',
      description: 'Try again',
      type: 'error',
      duration: 0,
      showCloseButton: false,
    });
  });

  it('should append in insertion order with unique ids', () => {
    const { store } = setup();

    const first = store.getState().add({ title: 'First' });
    const second = store.getState().add({ title: 'Second' });

    expect(first).not.toBe(second);
    expect(
      store.getState().toasts.map((toast) => {
        return toast.title;
      }),
    ).toEqual(['First', 'Second']);
  });

  it('should drop the oldest toast once the default limit is exceeded', () => {
    const { store } = setup();

    for (let index = 0; index <= DEFAULT_TOAST_LIMIT; index += 1) {
      store.getState().add({ title: `Toast ${index}` });
    }

    const titles = store.getState().toasts.map((toast) => {
      return toast.title;
    });

    expect(titles).toHaveLength(DEFAULT_TOAST_LIMIT);
    expect(titles[0]).toBe('Toast 1');
  });

  it('should honour a custom limit', () => {
    const { store } = setup({ limit: 2 });

    store.getState().add({ title: 'First' });
    store.getState().add({ title: 'Second' });
    store.getState().add({ title: 'Third' });

    expect(
      store.getState().toasts.map((toast) => {
        return toast.title;
      }),
    ).toEqual(['Second', 'Third']);
  });

  it('should remove a toast by id and skip unknown ids', () => {
    const { store, listener } = setup();
    const id = store.getState().add({ title: 'First' });
    store.getState().add({ title: 'Second' });
    const snapshot = store.getState().toasts;

    store.getState().remove('unknown');
    expect(store.getState().toasts).toBe(snapshot);

    store.getState().remove(id);
    expect(
      store.getState().toasts.map((toast) => {
        return toast.title;
      }),
    ).toEqual(['Second']);
    expect(listener).toHaveBeenCalledTimes(3);
  });

  it('should clear every toast and skip an empty queue', () => {
    const { store, listener } = setup();

    store.getState().clear();
    expect(listener).not.toHaveBeenCalled();

    store.getState().add({ title: 'First' });
    store.getState().clear();

    expect(store.getState().toasts).toEqual([]);
  });

  it('should reconfigure duration and limit, trimming the queue', () => {
    const { store } = setup();

    store.getState().add({ title: 'One' });
    store.getState().add({ title: 'Two' });
    store.getState().add({ title: 'Three' });
    store.configure({ limit: 2, duration: 100 });
    store.getState().add({ title: 'Four' });

    expect(
      store.getState().toasts.map((toast) => {
        return toast.title;
      }),
    ).toEqual(['Three', 'Four']);
    expect(store.getState().toasts[1].duration).toBe(100);
  });

  it('should keep the current options when configure omits them', () => {
    const { store } = setup({ duration: 700, limit: 1 });

    store.configure({});
    store.getState().add({ title: 'One' });
    store.getState().add({ title: 'Two' });

    expect(store.getState().toasts).toHaveLength(1);
    expect(store.getState().toasts[0].duration).toBe(700);
  });

  it('should stop notifying after unsubscribe', () => {
    const store = createToastStore();
    const listener = vi.fn();
    const unsubscribe = store.subscribe(listener);

    unsubscribe();
    store.getState().add({ title: 'Silent' });

    expect(listener).not.toHaveBeenCalled();
  });
});
