import type { SheetPosition } from '../Sheet.types';

export const DISMISS_DISTANCE_RATIO = 0.25;
export const DISMISS_VELOCITY = 500;

type DismissGesture = {
  offset: number;
  velocity: number;
  panelHeight: number;
  position: SheetPosition;
};

export function shouldDismissSheet({
  offset,
  velocity,
  panelHeight,
  position,
}: DismissGesture): boolean {
  const sign = position === 'bottom' ? 1 : -1;
  const distance = offset * sign;
  const speed = velocity * sign;

  if (distance <= 0) {
    return false;
  }

  return (
    distance > panelHeight * DISMISS_DISTANCE_RATIO || speed > DISMISS_VELOCITY
  );
}
