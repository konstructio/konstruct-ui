import { motion } from 'motion/react';
import { FC, memo } from 'react';

import { cn } from '@/utils';

import { Props } from './ButtonGroupItem.types';
import {
  buttonGroupDescriptionVariants,
  buttonGroupItemContentVariants,
  buttonGroupItemVariants,
  buttonGroupLabelVariants,
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
    isFirst,
    isLast,
    isSelected,
    labelClassName,
    option,
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
        buttonGroupItemVariants({ disabled: isDisabled, isFirst, isLast }),
        'relative',
        className,
      )}
    >
      <div
        className={cn(
          buttonGroupItemContentVariants({ hasDescription }),
          'relative',
          contentClassName,
        )}
      >
        <span className="relative w-full">
          <span
            className={cn(
              buttonGroupLabelVariants({ selected: false }),
              labelClassName,
            )}
          >
            <span className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </span>
            {option.secondaryLabel && <span>{option.secondaryLabel}</span>}
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
              ease: 'linear',
              duration,
            }}
          >
            <span className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </span>
            {option.secondaryLabel && <span>{option.secondaryLabel}</span>}
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
