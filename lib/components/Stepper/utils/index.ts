import type { ReactNode } from 'react';

import type { StepStatus } from '../Stepper.types';

const STATUS_ARIA_MAP: Record<StepStatus, string> = {
  completed: ', completed',
  active: ', current',
  error: ', error',
  pending: '',
};

export function getStepAriaLabel(
  index: number,
  label: ReactNode,
  status: StepStatus,
): string {
  const baseLabel = `Step ${index + 1}`;
  const labelPart = typeof label === 'string' ? `: ${label}` : '';
  return `${baseLabel}${labelPart}${STATUS_ARIA_MAP[status]}`;
}
