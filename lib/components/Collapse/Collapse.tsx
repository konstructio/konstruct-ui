import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FC, useState } from 'react';

import { cn } from '@/utils';

import { Props } from './Collapse.types';

const EASE = [0.4, 0, 0.2, 1] as const;

/**
 * Animates its children between a collapsed and an expanded height,
 * respecting `prefers-reduced-motion`. Overflow is only clipped while the
 * animation runs, so dropdowns or tooltips inside the content are never cut.
 *
 * @example
 * ```tsx
 * <Button aria-expanded={isOpen} aria-controls="advanced" onClick={toggle}>
 *   Advanced options
 * </Button>
 * <Collapse id="advanced" isOpen={isOpen} keepMounted>
 *   <AdvancedOptions />
 * </Collapse>
 * ```
 */
const Collapse: FC<Props> = ({
  children,
  className,
  collapsedMarginTop = 0,
  id,
  isOpen,
  keepMounted = false,
  onExitComplete,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isAnimating, setIsAnimating] = useState(false);
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        height: { duration: 0.35, ease: EASE },
        marginTop: { duration: 0.35, ease: EASE },
        opacity: { duration: 0.25, ease: EASE },
      };
  const collapsed = { opacity: 0, height: 0, marginTop: collapsedMarginTop };
  const expanded = { opacity: 1, height: 'auto', marginTop: 0 };
  const overflowClassName =
    isOpen && !isAnimating ? 'overflow-visible' : 'overflow-hidden';

  if (keepMounted) {
    return (
      <motion.div
        id={id}
        initial={false}
        animate={isOpen ? expanded : collapsed}
        transition={transition}
        hidden={!isOpen && !isAnimating}
        aria-hidden={!isOpen || undefined}
        className={cn(overflowClassName, className)}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <AnimatePresence initial={false} onExitComplete={onExitComplete}>
      {isOpen ? (
        <motion.div
          key="collapse"
          id={id}
          initial={collapsed}
          animate={expanded}
          exit={collapsed}
          transition={transition}
          className={cn(overflowClassName, className)}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

Collapse.displayName = 'KonstructCollapse';

export { Collapse };
