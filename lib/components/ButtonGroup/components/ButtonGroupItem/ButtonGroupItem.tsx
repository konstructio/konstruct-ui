import { AnimatePresence, motion } from 'motion/react';
import { FC, memo } from 'react';

import { cn } from '@/utils';

import { Props } from './ButtonGroupItem.types';
import {
  buttonGroupDescriptionVariants,
  buttonGroupItemContentVariants,
  buttonGroupItemVariants,
  buttonGroupLabelVariants,
  buttonGroupPillVariants,
} from './ButtonGroupItem.variants';

const getClipPath = (
  isSelected: boolean,
  direction: 'left' | 'right' | 'none',
) => {
  if (direction === 'none') {
    return isSelected ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)';
  }

  if (isSelected) {
    // Entering: reveal from the direction the pill is coming
    return 'inset(0 0 0 0)';
  } else {
    // Exiting: hide towards the direction the pill is going
    return direction === 'right' ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
  }
};

export const ButtonGroupItem: FC<Props> = memo(
  ({
    animationDirection,
    className,
    contentClassName,
    descriptionClassName,
    duration = 0.3,
    hasDescription,
    index,
    isDisabled,
    isSelected,
    labelClassName,
    layoutId,
    option,
    pillClassName,
    value,
    onKeyDown,
    onSelect,
  }) => (
    <button
      key={option.value}
      type="button"
      role="radio"
      aria-checked={isSelected}
      data-value={option.value}
      disabled={isDisabled}
      tabIndex={isSelected || index === 0 ? 0 : -1}
      onClick={() => !isDisabled && onSelect(value)}
      onKeyDown={(e) => onKeyDown(e, index)}
      className={cn(
        buttonGroupItemVariants({ disabled: isDisabled }),
        'relative',
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {isSelected && (
          <motion.div
            layoutId={layoutId}
            className={cn(buttonGroupPillVariants(), pillClassName)}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration,
            }}
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          buttonGroupItemContentVariants({ hasDescription }),
          'relative z-10',
          contentClassName,
        )}
      >
        <span className="relative">
          <span
            className={cn(
              buttonGroupLabelVariants({ selected: false }),
              labelClassName,
            )}
          >
            {option.icon}
            {option.label}
          </span>

          <motion.span
            className={cn(
              buttonGroupLabelVariants({ selected: true }),
              'absolute inset-0',
              labelClassName,
            )}
            aria-hidden="true"
            initial={false}
            animate={{
              clipPath: getClipPath(isSelected, animationDirection),
            }}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration,
            }}
          >
            {option.icon}
            {option.label}
          </motion.span>
        </span>

        {option.description && (
          <span
            className={cn(
              buttonGroupDescriptionVariants(),
              descriptionClassName,
            )}
          >
            {option.description}
          </span>
        )}
      </div>
    </button>
  ),
);

ButtonGroupItem.displayName = 'KonstructButtonGroupItem';
