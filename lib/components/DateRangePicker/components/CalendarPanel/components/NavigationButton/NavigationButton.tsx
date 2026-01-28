import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/utils';

import {
  calendarNavButtonVariants,
  calendarNavButtonDisabledVariants,
} from '../../CalendarPanel.variants';

import { Props } from './NavigationButton.types';

export const NavigationButton: FC<Props> = ({
  direction,
  onClick,
  disabled = false,
  isAnimating = false,
  canNavigate = true,
  hideWhenDisabled = false,
  className,
  disabledClassName,
  ariaLabel,
  size = 'medium',
}) => {
  const isDisabled = disabled || isAnimating || !canNavigate;
  const shouldHide = hideWhenDisabled && !canNavigate;

  if (shouldHide) {
    return null;
  }

  const Icon = direction === 'prev' ? ChevronLeftIcon : ChevronRightIcon;
  const iconSize = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        calendarNavButtonVariants(),
        className,
        isDisabled &&
          cn(calendarNavButtonDisabledVariants(), disabledClassName),
      )}
      aria-label={ariaLabel}
    >
      <Icon className={iconSize} />
    </button>
  );
};

NavigationButton.displayName = 'NavigationButton';
