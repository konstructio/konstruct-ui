import { AnimatePresence, motion } from 'motion/react';
import { FC } from 'react';

import { cn } from '@/utils';

import { useDateRangePicker } from '../../contexts';
import { calculatePresetRange } from '../../utils';

import { Props } from './RightPanel.types';

const collapsed = { width: 0, height: 0, opacity: 0 };
const expanded = { width: 'auto', height: 'auto', opacity: 1 };

/**
 * Wraps the inputs + calendar so `revealCalendarOnCustom` can hide them from
 * inside the provider: whether the active preset is the manual-selection entry
 * is only knowable from context.
 */
export const RightPanel: FC<Props> = ({ children, className }) => {
  const { animationDuration, preset, presets, revealCalendarOnCustom } =
    useDateRangePicker();

  const isHidden = () => {
    if (!revealCalendarOnCustom) {
      return false;
    }

    const range = calculatePresetRange(preset, presets);

    // A preset that resolves to a window speaks for itself, and no selection at
    // all means no filter yet; only the manual-selection entry needs the
    // calendar.
    return preset === null || Boolean(range.from) || Boolean(range.to);
  };

  return (
    <AnimatePresence initial={false}>
      {!isHidden() && (
        <motion.div
          key="right-panel"
          className="overflow-hidden"
          initial={collapsed}
          animate={expanded}
          exit={collapsed}
          transition={{
            duration: animationDuration / 1000,
            ease: 'easeInOut',
          }}
        >
          <div className={cn(className, 'w-max')}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

RightPanel.displayName = 'DateRangePickerRightPanel';
