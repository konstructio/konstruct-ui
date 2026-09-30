import { DEFAULT_TOAST_DURATION, DEFAULT_TOAST_LIMIT } from '../constants';
import { ToastItem } from '../Toast.types';

import {
  ToastStore,
  ToastStoreListener,
  ToastStoreOptions,
  ToastStoreState,
} from './create-toast-store.types';

let fallbackId = 0;

const nextId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  fallbackId += 1;

  return `toast-${Date.now()}-${fallbackId}`;
};

export const createToastStore = (
  initialOptions: ToastStoreOptions = {},
): ToastStore => {
  const listeners = new Set<ToastStoreListener>();
  let duration = initialOptions.duration ?? DEFAULT_TOAST_DURATION;
  let limit = initialOptions.limit ?? DEFAULT_TOAST_LIMIT;

  const setToasts = (toasts: ToastItem[]) => {
    const previous = state;
    state = { ...state, toasts };
    listeners.forEach((listener) => {
      listener(state, previous);
    });
  };

  let state: ToastStoreState = {
    toasts: [],
    add: (input) => {
      const toast: ToastItem = {
        ...input,
        id: nextId(),
        type: input.type ?? 'info',
        duration: input.duration ?? duration,
        showCloseButton: input.showCloseButton ?? true,
      };

      setToasts([...state.toasts, toast].slice(-limit));

      return toast.id;
    },
    remove: (id) => {
      const kept = state.toasts.filter((toast) => {
        return toast.id !== id;
      });

      if (kept.length !== state.toasts.length) {
        setToasts(kept);
      }
    },
    clear: () => {
      if (state.toasts.length > 0) {
        setToasts([]);
      }
    },
  };

  return {
    configure: (options) => {
      duration = options.duration ?? duration;
      limit = options.limit ?? limit;

      if (state.toasts.length > limit) {
        setToasts(state.toasts.slice(-limit));
      }
    },
    getState: () => {
      return state;
    },
    subscribe: (listener) => {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
  };
};
