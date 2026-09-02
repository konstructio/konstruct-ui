import { AnimatePresence, motion, TargetAndTransition } from 'motion/react';
import { FC } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { useCustomDateRangeFilterDropdown } from '../../contexts';

const FADE_DURATION = 0.15;

export const Actions: FC = () => {
  const {
    animationDuration,
    appliedRangeLabel,
    canApply,
    hasPendingSelection,
    isCollapsed,
    labelApply,
    labelReset,
    revealCalendarOnCustom,
    showsCalendar,
    onApply,
    onReset,
  } = useCustomDateRangeFilterDropdown();

  const hidesCalendar = revealCalendarOnCustom && !showsCalendar;
  const showsApply = hidesCalendar && hasPendingSelection && !isCollapsed;
  const showsActions =
    hidesCalendar && (showsApply || Boolean(appliedRangeLabel));

  const panelDuration = animationDuration / 1000;
  const fadeIn: TargetAndTransition = {
    opacity: 1,
    transition: { duration: FADE_DURATION, delay: panelDuration },
  };
  const fadeOut: TargetAndTransition = {
    opacity: 0,
    transition: { duration: FADE_DURATION },
  };
  const rowIn: TargetAndTransition = {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: panelDuration, ease: 'easeInOut' },
      opacity: { duration: FADE_DURATION, delay: panelDuration },
    },
  };
  const rowOut: TargetAndTransition = {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: panelDuration, ease: 'easeInOut' },
      opacity: { duration: FADE_DURATION },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {showsActions && (
        <motion.div
          key="actions"
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={rowIn}
          exit={rowOut}
        >
          <div
            className={cn(
              'flex',
              'justify-end',
              'items-center',
              'gap-4',
              'p-4',
              'pt-0',
            )}
          >
            <Button variant="secondary" appearance="compact" onClick={onReset}>
              {labelReset}
            </Button>

            <AnimatePresence initial={false}>
              {showsApply && (
                <motion.div
                  key="apply"
                  initial={{ opacity: 0 }}
                  animate={fadeIn}
                  exit={fadeOut}
                >
                  <Button
                    appearance="compact"
                    disabled={!canApply}
                    onClick={onApply}
                  >
                    {labelApply}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
