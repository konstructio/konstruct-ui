'use client';
import { FC, useState } from 'react';

import { ToastStoreContext } from './contexts';
import { createToastStore } from './store';
import { Props } from './ToastProvider.types';

/**
 * Optional scope for the toast queue: everything below it publishes with
 * `useToast()` into this store and a `<Toast />` inside draws it. Use it to
 * inject a store shared with other code (`store`) or to isolate a subtree;
 * without it, `<Toast />` and `useToast()` share one built-in store.
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-toast-light--docs Storybook}
 */
export const ToastProvider: FC<Props> = ({
  children,
  duration,
  limit,
  store,
}) => {
  const [value] = useState(() => {
    return store ?? createToastStore({ duration, limit });
  });

  return (
    <ToastStoreContext.Provider value={value}>
      {children}
    </ToastStoreContext.Provider>
  );
};

ToastProvider.displayName = 'KonstructToastProvider';
