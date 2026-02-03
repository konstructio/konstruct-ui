import { Slot } from '@radix-ui/react-slot';
import { useCallback, type KeyboardEvent } from 'react';

import type {
  UseStepItemLogicProps,
  UseStepItemLogicReturn,
} from './useStepItemLogic.types';

export function useStepItemLogic({
  clickable,
  onClick,
  step,
}: UseStepItemLogicProps): UseStepItemLogicReturn {
  const status = step.status ?? 'pending';
  const isDisabled = step.disabled || status === 'active';
  const hasCallback = Boolean(step.onClick || onClick);
  const isClickable = clickable && !isDisabled && hasCallback;
  const LabelComponent = typeof step.label === 'string' ? 'span' : Slot;

  const handleClick = useCallback(() => {
    if (!isClickable) return;
    if (step.onClick) {
      step.onClick();
    } else if (onClick) {
      onClick();
    }
  }, [isClickable, step.onClick, onClick]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!isClickable) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [isClickable, handleClick],
  );

  return {
    isClickable,
    isDisabled,
    LabelComponent,
    status,
    handleClick,
    handleKeyDown,
  };
}
