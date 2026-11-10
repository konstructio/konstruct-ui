import { AnimatePresence, motion } from 'motion/react';
import { FC, useLayoutEffect, useRef } from 'react';

import { cn } from '@/utils';

import { useDateRangePicker } from '../../contexts';
import { hidesRightPanel } from '../../utils';

import { Props } from './RightPanel.types';

const expanded = { width: 'auto', height: 'auto', opacity: 1 };

/**
 * Wraps the inputs + calendar so `revealCalendarOnCustom` can hide them from
 * inside the provider: whether the active preset is the manual-selection entry
 * is only knowable from context.
 */
export const RightPanel: FC<Props> = ({ children, className }) => {
  const { animationDuration, fluid, preset, presets, revealCalendarOnCustom } =
    useDateRangePicker();
  const anchorRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const collapsedWidthRef = useRef(0);

  const isHidden = hidesRightPanel(preset, presets, revealCalendarOnCustom);

  // Side by side the panel grows out of nothing. Stacked under the presets it
  // starts from the picker's width without it, so the picker grows in width
  // and height over the same stretch of the same curve instead of widening
  // only once the panel outgrows the presets.
  useLayoutEffect(() => {
    const container = anchorRef.current?.parentElement;
    const panel = panelRef.current;

    if (!container || getComputedStyle(container).flexDirection !== 'column') {
      collapsedWidthRef.current = 0;

      return;
    }

    const display = panel?.style.display ?? '';

    if (panel) {
      panel.style.display = 'none';
    }

    collapsedWidthRef.current = container.getBoundingClientRect().width;

    if (panel) {
      panel.style.display = display;
    }
  });

  const collapsed = {
    width: collapsedWidthRef.current,
    height: 0,
    opacity: 0,
  };

  return (
    <>
      <span ref={anchorRef} aria-hidden="true" className="hidden" />
      <AnimatePresence initial={false}>
        {!isHidden && (
          <motion.div
            ref={panelRef}
            key="right-panel"
            // A flex basis would override the animated size, so the panel only
            // grows to the row when it stretches to a fluid container.
            className={cn('overflow-hidden', fluid && 'flex-1')}
            initial={collapsed}
            animate={expanded}
            exit={collapsed}
            transition={{
              duration: animationDuration / 1000,
              ease: 'easeInOut',
            }}
          >
            <div className={cn(className, fluid ? 'w-full' : 'w-max')}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

RightPanel.displayName = 'DateRangePickerRightPanel';
