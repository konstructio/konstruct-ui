'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FC, useCallback, useRef, useState } from 'react';

import { cn } from '@/utils';

import { Props } from './Sheet.types';

const SLIDE_TRANSITION = { duration: 0.2, ease: 'easeOut' } as const;
const STEP_TRANSITION = { duration: 0.6, ease: [0.4, 0, 0.2, 1] } as const;
const STEP_OFFSET = '100%';

const STEP_VARIANTS = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? STEP_OFFSET : `-${STEP_OFFSET}`,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? `-${STEP_OFFSET}` : STEP_OFFSET,
  }),
};

/**
 * A dialog docked to the bottom (or top) edge of the screen, full width: the
 * touch-screen counterpart of a dropdown or a popover menu. It slides in and
 * out, dims the page behind a scrim, and keeps its content scrollable within
 * the viewport. Radix unmounts closed dialogs, so the portal is force-mounted
 * and AnimatePresence keeps it around for the exit animation.
 *
 * Multi-step sheets pass a `step`: when it changes the content slides across
 * (forward for a higher step, back for a lower one) and the panel height
 * animates to the new content.
 *
 * @example
 * ```tsx
 * <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Region">
 *   <button type="button">London</button>
 * </Sheet>
 * ```
 */
export const Sheet: FC<Props> = ({
  isOpen,
  onClose,
  title,
  hideTitle = false,
  leading,
  position = 'bottom',
  step = 0,
  className,
  bodyClassName,
  theme,
  children,
}) => {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const readyFrameRef = useRef<number | null>(null);
  const [contentHeight, setContentHeight] = useState<number | 'auto'>('auto');
  const [isHeightReady, setIsHeightReady] = useState(false);

  const [stepState, setStepState] = useState({ step, direction: 1 });

  if (stepState.step !== step) {
    setStepState({ step, direction: step > stepState.step ? 1 : -1 });
  }

  const { direction } = stepState;

  const offscreen = position === 'bottom' ? '100%' : '-100%';
  const slide = reduceMotion
    ? { initial: false as const, animate: { y: 0 }, exit: { y: 0 } }
    : { initial: { y: offscreen }, animate: { y: 0 }, exit: { y: offscreen } };

  const contentRef = useCallback((node: HTMLDivElement | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;

    if (readyFrameRef.current !== null) {
      cancelAnimationFrame(readyFrameRef.current);
      readyFrameRef.current = null;
    }

    if (!node) {
      setIsHeightReady(false);
      setContentHeight('auto');

      return;
    }

    setContentHeight(node.getBoundingClientRect().height);

    if (typeof ResizeObserver !== 'undefined') {
      observerRef.current = new ResizeObserver(([entry]) => {
        if (entry) {
          setContentHeight(entry.contentRect.height);
        }
      });
      observerRef.current.observe(node);
    }

    readyFrameRef.current = requestAnimationFrame(() => {
      setIsHeightReady(true);
    });
  }, []);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <div data-theme={theme} className="contents">
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/55"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={SLIDE_TRANSITION}
                />
              </Dialog.Overlay>
              <Dialog.Content
                asChild
                forceMount
                onOpenAutoFocus={(event) => {
                  event.preventDefault();
                  panelRef.current?.focus();
                }}
              >
                <motion.div
                  ref={panelRef}
                  tabIndex={-1}
                  className={cn(
                    'konstruct-sheet fixed inset-x-0 z-50 flex max-h-[calc(100dvh-4rem)] flex-col',
                    'bg-white text-slate-800 shadow-xl outline-none',
                    'dark:bg-metal-800 dark:text-metal-50',
                    position === 'bottom'
                      ? 'bottom-0 rounded-t-lg pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]'
                      : 'top-0 rounded-b-lg pb-4 pt-[calc(1rem+env(safe-area-inset-top))]',
                    className,
                  )}
                  data-position={position}
                  data-step={step}
                  transition={SLIDE_TRANSITION}
                  {...slide}
                >
                  <div
                    className={cn(
                      'flex min-h-9 shrink-0 items-center gap-2 px-6 pb-2',
                      hideTitle && 'sr-only',
                    )}
                  >
                    {leading}
                    <Dialog.Title className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-metal-400">
                      {title}
                    </Dialog.Title>
                  </div>

                  <motion.div
                    className={cn(
                      'flex min-h-0 flex-col overflow-y-auto overflow-x-hidden',
                      bodyClassName,
                    )}
                    animate={{ height: contentHeight }}
                    transition={
                      reduceMotion || !isHeightReady
                        ? { duration: 0 }
                        : STEP_TRANSITION
                    }
                  >
                    <div ref={contentRef} className="relative">
                      <AnimatePresence
                        mode="popLayout"
                        initial={false}
                        custom={direction}
                      >
                        <motion.div
                          key={step}
                          custom={direction}
                          className="flex w-full flex-col"
                          variants={reduceMotion ? undefined : STEP_VARIANTS}
                          initial={reduceMotion ? false : 'enter'}
                          animate="center"
                          exit={reduceMotion ? undefined : 'exit'}
                          transition={STEP_TRANSITION}
                        >
                          {children}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

Sheet.displayName = 'KonstructSheet';
