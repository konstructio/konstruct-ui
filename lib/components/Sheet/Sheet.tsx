'use client';
import * as Dialog from '@radix-ui/react-dialog';
import {
  animate,
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';
import {
  FC,
  PointerEvent as ReactPointerEvent,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { ChevronLeft } from 'lucide-react';

import { cn } from '@/utils';

import { BackOutcome, SheetStep } from './components';
import { Props } from './Sheet.types';
import { resolveSheetGesture, shouldSwipeBack } from './utils';

const SLIDE_TRANSITION = { duration: 0.2, ease: 'easeOut' } as const;
const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const;
const INSTANT = { duration: 0 } as const;
const DRAG_RESISTANCE = 0.05;
type HeaderCustom = number | { direction: number; instant: boolean };

const headerDirection = (custom: HeaderCustom) =>
  typeof custom === 'number' ? custom : custom.direction;

// The header row (back control or plain title) crosses over on a step change
// the way the content does, with a shorter travel.
const HEADER_VARIANTS = {
  enter: (custom: HeaderCustom) => ({
    opacity: 0,
    x: headerDirection(custom) > 0 ? TITLE_TRAVEL : -TITLE_TRAVEL,
  }),
  center: { opacity: 1, x: 0 },
  exit: (custom: HeaderCustom) => {
    if (typeof custom === 'object' && custom.instant) {
      return { opacity: 0, transition: INSTANT };
    }

    return {
      opacity: 0,
      x: headerDirection(custom) > 0 ? -TITLE_TRAVEL : TITLE_TRAVEL,
    };
  },
};

const TITLE_CLASS =
  'text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-metal-400';
// How far behind the outgoing step the previous one waits, as a share of the
// panel width: the parallax of the iOS back gesture.
const BACK_PARALLAX = 0.3;
// The title travels less than the content, like the iOS navigation bar.
const TITLE_TRAVEL = 24;
// Chevron slot plus gap: how far the title sits right of where a first step's
// title stands, so a back swipe to the first step lands it in place.
const CHEVRON_SLOT = 36;
// Soft bottom edge while the body grows over content it has not shown yet.
const REVEAL_FADE = '96px';
const REVEAL_SWEEP = { duration: 0.45, ease: 'easeOut' } as const;

type PanelGesture = {
  startHeight: number;
  restHeight: number;
  maxHeight: number;
};

type StepContent = {
  step: number;
  title: ReactNode;
  children: ReactNode;
};

type BackPhase = 'idle' | 'dragging' | 'settling';

const isGrip = (target: EventTarget | null) =>
  target instanceof Element && target.closest('[data-sheet-grip]') !== null;

/**
 * A dialog docked to the bottom (or top) edge of the screen, full width: the
 * touch-screen counterpart of a dropdown or a popover menu. It slides in and
 * out, dims the page behind a scrim, and keeps its content scrollable within
 * the viewport. Radix unmounts closed dialogs, so the portal is force-mounted
 * and AnimatePresence keeps it around for the exit animation.
 *
 * Multi-step sheets pass a `step`: when it changes the content slides across
 * (forward for a higher step, back for a lower one) and the panel height
 * animates to the new content. With `onBack`, swiping the content towards the
 * right on a later step goes back the way the iOS back gesture does: the
 * previous step follows the finger in from the left while the panel grows or
 * shrinks to its height, and the swipe commits or springs back on release.
 *
 * On touch screens the panel follows a finger on its grab handle or header.
 * Towards the edge it docks to it closes past a quarter of its height or on a
 * quick flick, and springs back otherwise. An `expandable` sheet grows with
 * the finger when pulled away from that edge and, once released, springs the
 * rest of the way to the full viewport (or back to its natural height); from
 * there a pull towards the edge shrinks it again, and a long one closes it.
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
  onBack,
  title,
  hideTitle = false,
  leading,
  position = 'bottom',
  expandable = false,
  step = 0,
  className,
  bodyClassName,
  headerClassName,
  titleClassName,
  theme,
  children,
}) => {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const contentNodeRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const readyFrameRef = useRef<number | null>(null);
  const [contentHeight, setContentHeight] = useState<number | 'auto'>('auto');
  const [isHeightReady, setIsHeightReady] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGripping, setIsGripping] = useState(false);
  const restHeightRef = useRef(0);
  const gestureRef = useRef<PanelGesture | null>(null);
  const gripArmedRef = useRef(false);
  const backArmedRef = useRef(false);
  const axisRef = useRef<'x' | 'y' | null>(null);
  const y = useMotionValue(0);
  const panelHeight = useMotionValue<number | 'auto'>('auto');

  const lastRenderRef = useRef<StepContent>({ step, title, children });
  const previousRef = useRef<StepContent | null>(null);
  const skipStepAnimationRef = useRef(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewHeightRef = useRef(0);
  const backStartHeightRef = useRef(0);
  const [backPreview, setBackPreview] = useState<StepContent | null>(null);
  const [backPhase, setBackPhase] = useState<BackPhase>('idle');
  const [isRevealing, setIsRevealing] = useState(false);
  const [commitSignal, setCommitSignal] = useState(0);
  const pendingBackRef = useRef(false);
  const previewX = useMotionValue(0);
  const previewOpacity = useMotionValue(0);
  const titleOutX = useMotionValue(0);
  const titleOutOpacity = useMotionValue(1);
  const titleInX = useMotionValue(0);
  const titleInOpacity = useMotionValue(0);
  const chevronOpacity = useMotionValue(1);
  const revealFade = useMotionValue('0px');
  const sweepingRef = useRef(false);
  const revealBaseRef = useRef<number | null>(null);
  const lastContentHeightRef = useRef(0);

  if (lastRenderRef.current.step !== step) {
    previousRef.current = lastRenderRef.current;
  }

  lastRenderRef.current = { step, title, children };

  if (isExpanded && (!isOpen || !expandable)) {
    setIsExpanded(false);
    panelHeight.set('auto');
  }

  const [stepState, setStepState] = useState({
    step,
    direction: 1,
    animated: true,
  });

  if (stepState.step !== step) {
    const stepAnimated = !skipStepAnimationRef.current;

    setStepState({
      step,
      direction: step > stepState.step ? 1 : -1,
      animated: stepAnimated,
    });
    skipStepAnimationRef.current = false;
    // The height to beat: the new step reveals behind a soft edge only when
    // it turns out taller than the one it replaces.
    revealBaseRef.current =
      stepAnimated && !reduceMotion && !isExpanded
        ? lastContentHeightRef.current
        : null;
  }

  const { direction, animated } = stepState;
  const sign = position === 'bottom' ? 1 : -1;
  const spring = reduceMotion ? INSTANT : SPRING;

  const resetHeaderMotion = () => {
    previewX.set(0);
    previewOpacity.set(0);
    titleOutX.set(0);
    titleOutOpacity.set(1);
    titleInX.set(0);
    titleInOpacity.set(0);
    chevronOpacity.set(1);
  };

  useEffect(() => {
    setBackPreview(null);
    setBackPhase('idle');
    resetHeaderMotion();

    if (!isExpanded) {
      panelHeight.set('auto');
    }

    // The preview, the header motion and the fixed panel height only outlive
    // the step they served.
  }, [step]);

  useLayoutEffect(() => {
    previewHeightRef.current =
      previewRef.current?.getBoundingClientRect().height ?? 0;

    if (
      backPreview &&
      !isExpanded &&
      previewHeightRef.current > backStartHeightRef.current
    ) {
      startReveal();
    }

    // A back button press runs the swipe's choreography end to end; it waits
    // for the preview to mount so the height has a target.
    if (backPreview && pendingBackRef.current) {
      pendingBackRef.current = false;
      setBackPhase('settling');
      settleBack(1);
      setCommitSignal((signal) => signal + 1);
    }
    // settleBack reads refs and motion values that never go stale.
  }, [backPreview]);

  const offscreen = position === 'bottom' ? '100%' : '-100%';
  const slide = reduceMotion
    ? { initial: false as const, animate: { y: 0 } }
    : { initial: { y: offscreen }, animate: { y: 0 }, exit: { y: offscreen } };

  const startReveal = () => {
    revealFade.set(REVEAL_FADE);
    sweepingRef.current = false;
    setIsRevealing(true);
  };

  // Pan callbacks receive the first pointermove, whose target is the window,
  // so which part of the panel the finger landed on is read at pointerdown.
  // Until an expandable sheet is expanded its body is a grip too: dragging the
  // list up grows the sheet first, as on iOS, and only then does it scroll.
  const bodyIsGrip = expandable && !isExpanded;

  const armGestures = (event: ReactPointerEvent<HTMLDivElement>) => {
    const primary = event.pointerType !== 'mouse' || event.button === 0;
    const grip = isGrip(event.target);

    gripArmedRef.current = primary && (grip || bodyIsGrip);
    backArmedRef.current = primary && !grip;
    axisRef.current = null;
  };

  // The first pan event decides whether the finger is moving along x or y, so
  // a back swipe and a vertical drag never run at the same time.
  const panAxis = (info: PanInfo) => {
    if (axisRef.current === null) {
      axisRef.current =
        Math.abs(info.offset.x) > Math.abs(info.offset.y) ? 'x' : 'y';
    }

    return axisRef.current;
  };

  const handlePanStart = (_event: PointerEvent, info: PanInfo) => {
    if (!gripArmedRef.current || panAxis(info) === 'x') {
      return;
    }

    gripArmedRef.current = false;

    const startHeight = panelRef.current?.offsetHeight ?? 0;

    gestureRef.current = {
      startHeight,
      restHeight: isExpanded ? restHeightRef.current : startHeight,
      maxHeight: window.visualViewport?.height ?? window.innerHeight,
    };
    panelHeight.set(startHeight);
    setIsGripping(true);
  };

  const handlePan = (_event: PointerEvent, info: PanInfo) => {
    const gesture = gestureRef.current;

    if (!gesture) {
      return;
    }

    const towards = info.offset.y * sign;

    if (!expandable) {
      y.set(towards >= 0 ? info.offset.y : info.offset.y * DRAG_RESISTANCE);

      return;
    }

    const wanted = gesture.startHeight - towards;

    if (wanted >= gesture.restHeight) {
      panelHeight.set(Math.min(wanted, gesture.maxHeight));
      y.set(0);

      return;
    }

    panelHeight.set(gesture.restHeight);
    y.set((gesture.restHeight - wanted) * sign);
  };

  const settle = (gesture: PanelGesture, expand: boolean, velocity: number) => {
    animate(y, 0, spring);

    if (expand) {
      animate(panelHeight, gesture.maxHeight, { ...spring, velocity });

      return;
    }

    animate(panelHeight, gesture.restHeight, {
      ...spring,
      velocity,
      onComplete: () => panelHeight.set('auto'),
    });
  };

  const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
    const gesture = gestureRef.current;

    if (!gesture) {
      return;
    }

    gestureRef.current = null;
    setIsGripping(false);

    const outcome = resolveSheetGesture({
      offset: info.offset.y,
      velocity: info.velocity.y,
      panelHeight: gesture.startHeight,
      position,
      expandable,
      isExpanded,
      restHeight: gesture.restHeight,
    });
    const growth = -info.velocity.y * sign;

    if (outcome === 'dismiss') {
      panelHeight.set('auto');
      onClose();
    } else if (outcome === 'expand') {
      restHeightRef.current = gesture.restHeight;
      setIsExpanded(true);
      settle(gesture, true, growth);
    } else if (outcome === 'collapse') {
      setIsExpanded(false);
      settle(gesture, false, growth);
    } else {
      settle(gesture, isExpanded, growth);
    }
  };

  const canSwipeBack = Boolean(onBack) && step > 0;
  const panelWidth = () => panelRef.current?.offsetWidth || 1;
  const followsHeight = () => previewHeightRef.current > 0 && !isExpanded;

  const isBackArmed = (info: PanInfo) =>
    backArmedRef.current && panAxis(info) === 'x';

  // Where every moving part of the back gesture stands at a given progress:
  // the previous step and its title come in from the left, the current title
  // drifts right, and the chevron fades when the previous step is the first.
  const backTargets = (progress: number) => {
    const previous = previousRef.current;
    const keepsChevron = previous !== null && previous.step > 0;

    return {
      previewX: -BACK_PARALLAX * panelWidth() * (1 - progress),
      previewOpacity: progress,
      titleOutX: TITLE_TRAVEL * progress,
      titleOutOpacity: 1 - progress,
      titleInX:
        (keepsChevron ? 0 : -CHEVRON_SLOT) * progress -
        TITLE_TRAVEL * (1 - progress),
      titleInOpacity: progress,
      chevronOpacity: keepsChevron ? 1 : 1 - progress,
    };
  };

  const applyBackProgress = (progress: number) => {
    const targets = backTargets(progress);

    previewX.set(targets.previewX);
    previewOpacity.set(targets.previewOpacity);
    titleOutX.set(targets.titleOutX);
    titleOutOpacity.set(targets.titleOutOpacity);
    titleInX.set(targets.titleInX);
    titleInOpacity.set(targets.titleInOpacity);
    chevronOpacity.set(targets.chevronOpacity);

    if (followsHeight()) {
      const start = backStartHeightRef.current;

      setContentHeight(start + (previewHeightRef.current - start) * progress);
    }
  };

  const settleBack = (progress: number) => {
    const targets = backTargets(progress);

    animate(previewX, targets.previewX, spring);
    animate(previewOpacity, targets.previewOpacity, spring);
    animate(titleOutX, targets.titleOutX, spring);
    animate(titleOutOpacity, targets.titleOutOpacity, spring);
    animate(titleInX, targets.titleInX, spring);
    animate(titleInOpacity, targets.titleInOpacity, spring);
    animate(chevronOpacity, targets.chevronOpacity, spring);

    if (followsHeight()) {
      setContentHeight(
        progress === 1 ? previewHeightRef.current : backStartHeightRef.current,
      );
    }
  };

  const handleBackStart = () => {
    backArmedRef.current = false;
    backStartHeightRef.current =
      contentNodeRef.current?.getBoundingClientRect().height ?? 0;
    previewHeightRef.current = 0;
    applyBackProgress(0);
    setBackPreview(previousRef.current);
    setBackPhase('dragging');
  };

  const handleBackMove = (offset: number) => {
    applyBackProgress(Math.min(offset / panelWidth(), 1));
  };

  const handleBackEnd = (info: PanInfo): BackOutcome => {
    const back = shouldSwipeBack({
      offset: info.offset.x,
      velocity: info.velocity.x,
      panelWidth: panelWidth(),
    });

    setBackPhase('settling');
    settleBack(back ? 1 : 0);

    return back ? 'back' : 'stay';
  };

  // The wrapper briefly holds both steps while one leaves, so the comparison
  // uses the new step's own height rather than the wrapper's.
  const handleStepMount = (height: number) => {
    const base = revealBaseRef.current;

    revealBaseRef.current = null;

    if (base !== null && height > base) {
      startReveal();
    }
  };

  const handleBackClick = () => {
    if (backPhase !== 'idle' || !previousRef.current) {
      onBack?.();

      return;
    }

    pendingBackRef.current = true;
    handleBackStart();
  };

  const handleBackCommit = () => {
    skipStepAnimationRef.current = true;
    onBack?.();
  };

  const handleBackCancel = () => {
    setBackPreview(null);
    setBackPhase('idle');
    resetHeaderMotion();
  };

  // While the body grows, its bottom edge fades the incoming rows out instead
  // of cutting them; once the height has settled the fade shrinks away and
  // the rows it was holding back come fully in.
  const handleBodySettled = () => {
    if (!isRevealing || backPhase === 'dragging' || sweepingRef.current) {
      return;
    }

    sweepingRef.current = true;
    animate(revealFade, '0px', {
      ...(reduceMotion ? INSTANT : REVEAL_SWEEP),
      onComplete: () => setIsRevealing(false),
    });
  };

  const bodyTransition = (() => {
    if (reduceMotion || !isHeightReady || backPhase === 'dragging') {
      return INSTANT;
    }

    return SPRING;
  })();

  const grabHandle = (
    <div
      aria-hidden="true"
      data-sheet-handle=""
      data-sheet-grip=""
      data-active={isGripping || undefined}
      className={cn(
        'group flex shrink-0 cursor-grab touch-none justify-center active:cursor-grabbing',
        position === 'bottom' ? 'pb-2' : 'pt-2',
      )}
    >
      <div
        className={cn(
          'h-1 w-10 rounded-full transition-colors duration-150',
          'bg-slate-300 dark:bg-metal-600',
          'group-data-[active]:bg-slate-400 dark:group-data-[active]:bg-metal-400',
        )}
      />
    </div>
  );

  const contentRef = useCallback((node: HTMLDivElement | null) => {
    contentNodeRef.current = node;
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

    const applyHeight = (next: number) => {
      lastContentHeightRef.current = next;
      setContentHeight(next);
    };

    applyHeight(node.getBoundingClientRect().height);

    if (typeof ResizeObserver !== 'undefined') {
      observerRef.current = new ResizeObserver(([entry]) => {
        if (entry) {
          applyHeight(entry.contentRect.height);
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
                  className="fixed inset-0 z-70 bg-black/55"
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
                    'konstruct-sheet fixed inset-x-0 z-70 flex flex-col',
                    'bg-white text-slate-800 shadow-xl outline-none',
                    'dark:bg-metal-800 dark:text-metal-50',
                    position === 'bottom'
                      ? 'bottom-0 pb-[calc(1rem+env(safe-area-inset-bottom))]'
                      : 'top-0 pt-[calc(1rem+env(safe-area-inset-top))]',
                    isExpanded ? 'max-h-dvh' : 'max-h-[calc(100dvh-4rem)]',
                    position === 'bottom' ? 'rounded-t-lg' : 'rounded-b-lg',
                    position === 'bottom' &&
                      (isExpanded
                        ? 'pt-[calc(0.5rem+env(safe-area-inset-top))]'
                        : 'pt-2'),
                    position === 'top' &&
                      (isExpanded
                        ? 'pb-[calc(0.5rem+env(safe-area-inset-bottom))]'
                        : 'pb-2'),
                    className,
                  )}
                  data-position={position}
                  data-step={step}
                  data-expanded={isExpanded || undefined}
                  style={{ y, height: panelHeight }}
                  transition={SLIDE_TRANSITION}
                  onPointerDownCapture={armGestures}
                  onPanStart={handlePanStart}
                  onPan={handlePan}
                  onPanEnd={handlePanEnd}
                  {...slide}
                >
                  {position === 'bottom' && grabHandle}
                  <div
                    className={cn(
                      'flex min-h-9 shrink-0 touch-none items-center gap-2 px-6 pb-2',
                      headerClassName,
                      hideTitle && 'sr-only',
                    )}
                    data-sheet-grip=""
                  >
                    <Dialog.Title className="sr-only">{title}</Dialog.Title>
                    <AnimatePresence
                      mode="popLayout"
                      initial={false}
                      custom={{ direction, instant: !animated }}
                    >
                      <motion.div
                        key={step}
                        custom={direction}
                        className="flex min-h-9 items-center gap-2"
                        variants={
                          !reduceMotion && animated
                            ? HEADER_VARIANTS
                            : undefined
                        }
                        initial={!reduceMotion && animated ? 'enter' : false}
                        animate="center"
                        exit={!reduceMotion && animated ? 'exit' : undefined}
                        transition={spring}
                      >
                        {canSwipeBack ? (
                          <>
                            <button
                              type="button"
                              data-sheet-back=""
                              onClick={handleBackClick}
                              className={cn(
                                '-my-1 -ml-2 flex h-9 items-center gap-2 rounded pr-2 outline-none',
                                'focus-visible:ring-1 focus-visible:ring-aurora-500',
                                'pointer-coarse:active:bg-slate-100 dark:pointer-coarse:active:bg-metal-700',
                              )}
                            >
                              <motion.span
                                className="flex size-9 shrink-0 items-center justify-center text-slate-800 dark:text-metal-50"
                                style={{ opacity: chevronOpacity }}
                              >
                                <ChevronLeft
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              </motion.span>
                              <span className="relative flex items-center">
                                <motion.span
                                  className={cn(TITLE_CLASS, titleClassName)}
                                  style={{
                                    x: titleOutX,
                                    opacity: titleOutOpacity,
                                  }}
                                >
                                  {title}
                                </motion.span>
                                {backPreview && (
                                  <motion.span
                                    aria-hidden="true"
                                    data-sheet-preview-title=""
                                    className={cn(
                                      'absolute left-0 whitespace-nowrap',
                                      TITLE_CLASS,
                                      titleClassName,
                                    )}
                                    style={{
                                      x: titleInX,
                                      opacity: titleInOpacity,
                                    }}
                                  >
                                    {backPreview.title}
                                  </motion.span>
                                )}
                              </span>
                            </button>
                          </>
                        ) : (
                          <>
                            {leading}
                            <span
                              aria-hidden="true"
                              className={cn(TITLE_CLASS, titleClassName)}
                            >
                              {title}
                            </span>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <motion.div
                    className={cn(
                      'flex min-h-0 flex-col overflow-x-hidden',
                      // The incoming step is laid out at full height behind
                      // the growing body; no scrollbar while that runs.
                      backPreview || isRevealing
                        ? 'overflow-y-hidden'
                        : 'overflow-y-auto',
                      bodyIsGrip && 'touch-none',
                      isRevealing &&
                        '[mask-image:linear-gradient(to_bottom,black_calc(100%-var(--sheet-reveal)),transparent)]',
                      isExpanded && 'flex-1',
                      bodyClassName,
                    )}
                    style={{ '--sheet-reveal': revealFade } as never}
                    animate={{ height: isExpanded ? 'auto' : contentHeight }}
                    transition={bodyTransition}
                    onAnimationComplete={handleBodySettled}
                  >
                    <div ref={contentRef} className="relative">
                      {backPreview && (
                        <motion.div
                          ref={previewRef}
                          aria-hidden="true"
                          data-sheet-preview=""
                          className="pointer-events-none absolute inset-x-0 top-0 flex w-full flex-col"
                          style={{ x: previewX, opacity: previewOpacity }}
                        >
                          {backPreview.children}
                        </motion.div>
                      )}
                      <AnimatePresence
                        mode="popLayout"
                        initial={false}
                        // A step change that skips the enter animation comes
                        // from a back gesture that already slid the old step
                        // out, so that step's exit is instant too. Read from
                        // the step state so it only changes with the step.
                        custom={{ direction, instant: !animated }}
                      >
                        <SheetStep
                          key={step}
                          step={step}
                          direction={direction}
                          animated={!reduceMotion && animated}
                          canSwipeBack={canSwipeBack}
                          onMount={handleStepMount}
                          commitSignal={commitSignal}
                          isArmed={isBackArmed}
                          onBackStart={handleBackStart}
                          onBackMove={handleBackMove}
                          onBackEnd={handleBackEnd}
                          onBackCommit={handleBackCommit}
                          onBackCancel={handleBackCancel}
                        >
                          {children}
                        </SheetStep>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                  {position === 'top' && grabHandle}
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
