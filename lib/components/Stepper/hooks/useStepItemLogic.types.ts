import type { Slot } from '@radix-ui/react-slot';
import type { KeyboardEvent } from 'react';

import type { Step, StepStatus } from '../Stepper.types';

export type UseStepItemLogicProps = {
  clickable: boolean;
  step: Step;
  onClick?: () => void;
};

export type UseStepItemLogicReturn = {
  isClickable: boolean;
  isDisabled: boolean;
  LabelComponent: typeof Slot | 'span';
  status: StepStatus;
  handleClick: () => void;
  handleKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
};
