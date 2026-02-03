import { Slot } from '@radix-ui/react-slot';
import { useCallback, type KeyboardEvent } from 'react';

import type { Step, StepStatus } from '../Stepper.types';

type UseStepItemLogicProps = {
  clickable: boolean;
  onClick?: () => void;
  step: Step;
};

type UseStepItemLogicReturn = {
  handleClick: () => void;
  handleKeyDown: (e: KeyboardEvent) => void;
  isClickable: boolean;
  isDisabled: boolean;
  LabelComponent: typeof Slot | 'span';
  status: StepStatus;
};

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
    (e: KeyboardEvent) => {
      if (!isClickable) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [isClickable, handleClick],
  );

  return {
    handleClick,
    handleKeyDown,
    isClickable,
    isDisabled,
    LabelComponent,
    status,
  };
}
