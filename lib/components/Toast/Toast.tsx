'use client';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useIsHydrated } from '@/hooks/useIsHydrated/useIsHydrated';
import { cn } from '@/utils';

import { ToastCard } from './components';
import {
  DEFAULT_MAX_VISIBLE_TOASTS,
  TOAST_DISMISS_STAGGER_MS,
  TOAST_TRANSITION,
} from './constants';
import { useStackExpansion, useToastHeights, useToastSource } from './hooks';
import { Props } from './Toast.types';
import { computeStackLayout } from './utils';

/**
 * A stack of toast notifications anchored to the bottom-right corner.
 *
 * The newest toast sits in front; older ones peek out behind it and the whole
 * stack expands on hover or focus, holding every auto-dismiss countdown until
 * the pointer leaves, focus moves out or the window loses focus. By default
 * each toast then resumes with the time it had left; `hoverBehavior="restart"`
 * gives them their full duration again and dismisses them one by one.
 * Rendered through a portal on `document.body` so no ancestor can clip or
 * cover it, and themed through the `data-theme` it lands under.
 *
 * @example
 * ```tsx
 * <App />
 * <Toast limit={5} duration={3000} />
 *
 * const { addToast } = useToast();
 * addToast({ title: 'Saved', type: 'success' });
 * ```
 *
 * No `ToastProvider` is needed: the stack and `useToast()` share a built-in
 * store that `duration` and `limit` configure (`limit={1}` shows one toast at
 * a time). Wrap a subtree in `ToastProvider` to scope or inject a store, or
 * pass `toasts` and `onDismiss` to drive the stack from your own state.
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-toast-light--docs Storybook}
 */
export const Toast: FC<Props> = ({
  className,
  closeLabel = 'Close toast',
  container,
  duration,
  hoverBehavior = 'resume',
  isPortal = true,
  label = 'Notifications',
  limit,
  maxVisible = DEFAULT_MAX_VISIBLE_TOASTS,
  theme,
  toasts,
  onDismiss,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isHydrated = useIsHydrated();
  const { heights, setHeight, removeHeight } = useToastHeights();
  const { expanded, regionHandlers } = useStackExpansion();
  const source = useToastSource({ toasts, onDismiss });

  useEffect(() => {
    if (!toasts) {
      source.configure({ duration, limit });
    }
  }, [toasts, source.configure, duration, limit]);

  const ordered = source.toasts.slice().reverse();
  const isExpanded = expanded && ordered.length > 0;
  const { offsets, frontHeight, regionHeight } = computeStackLayout({
    toasts: ordered,
    heights,
    expanded: isExpanded,
    maxVisible,
  });

  const region = (
    <section
      aria-label={label}
      data-theme={theme}
      className={cn(
        'fixed right-6 bottom-6 z-100 w-97.5 max-w-[calc(100vw-3rem)]',
        className,
      )}
      style={{ pointerEvents: ordered.length > 0 ? undefined : 'none' }}
      {...regionHandlers}
    >
      <motion.ol
        className="relative m-0 list-none p-0"
        animate={{ height: regionHeight }}
        transition={prefersReducedMotion ? { duration: 0 } : TOAST_TRANSITION}
      >
        <AnimatePresence>
          {ordered.map((toast, index) => (
            <ToastCard
              key={toast.id}
              closeLabel={closeLabel}
              expanded={isExpanded}
              frontHeight={frontHeight}
              index={index}
              offset={offsets[index] ?? 0}
              reducedMotion={Boolean(prefersReducedMotion)}
              restartOnLeave={hoverBehavior === 'restart'}
              resumeDelay={
                (ordered.length - 1 - index) * TOAST_DISMISS_STAGGER_MS
              }
              toast={toast}
              total={ordered.length}
              visible={index < maxVisible}
              onDismiss={() => {
                source.dismiss(toast.id);
              }}
              onExited={removeHeight}
              onHeightChange={setHeight}
            />
          ))}
        </AnimatePresence>
      </motion.ol>
    </section>
  );

  if (!isPortal) {
    return region;
  }

  if (!isHydrated) {
    return null;
  }

  return createPortal(region, container ?? document.body);
};

Toast.displayName = 'KonstructToast';
