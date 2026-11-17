import type { StepCustom } from '../../SheetStep.types';

export const directionOf = (custom: StepCustom) =>
  typeof custom === 'number' ? custom : custom.direction;
