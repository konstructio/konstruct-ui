import type { StepSize } from '../Stepper.types';

export const ICON_SIZE_MAP: Record<StepSize, number> = {
  sm: 12,
  md: 16,
  lg: 24,
};

export const CHECK_ICON_SIZE_MAP: Record<StepSize, string> = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-6 w-6',
};
