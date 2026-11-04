import type { SheetPosition } from '../Sheet.types';

export const DISMISS_DISTANCE_RATIO = 0.25;
export const DISMISS_VELOCITY = 500;

type Gesture = {
  offset: number;
  velocity: number;
  panelHeight: number;
  position: SheetPosition;
};

type SheetGesture = Gesture & {
  expandable: boolean;
  isExpanded: boolean;
  /** Height the panel had before it expanded; the collapse target */
  restHeight?: number;
};

export type SheetGestureOutcome = 'dismiss' | 'expand' | 'collapse' | 'rest';

function towardsEdge({ offset, velocity, position }: Gesture) {
  const sign = position === 'bottom' ? 1 : -1;

  return { distance: offset * sign, speed: velocity * sign };
}

function passesThreshold(distance: number, speed: number, panelHeight: number) {
  return (
    distance > panelHeight * DISMISS_DISTANCE_RATIO || speed > DISMISS_VELOCITY
  );
}

export function shouldDismissSheet(gesture: Gesture): boolean {
  const { distance, speed } = towardsEdge(gesture);

  if (distance <= 0) {
    return false;
  }

  return passesThreshold(distance, speed, gesture.panelHeight);
}

export function shouldExpandSheet(gesture: Gesture): boolean {
  const { distance, speed } = towardsEdge(gesture);

  if (distance >= 0) {
    return false;
  }

  return passesThreshold(-distance, -speed, gesture.panelHeight);
}

type BackGesture = {
  offset: number;
  velocity: number;
  panelWidth: number;
};

export function shouldSwipeBack({
  offset,
  velocity,
  panelWidth,
}: BackGesture): boolean {
  if (offset <= 0) {
    return false;
  }

  return passesThreshold(offset, velocity, panelWidth);
}

export function resolveSheetGesture({
  expandable,
  isExpanded,
  restHeight = 0,
  ...gesture
}: SheetGesture): SheetGestureOutcome {
  if (expandable && !isExpanded && shouldExpandSheet(gesture)) {
    return 'expand';
  }

  if (!shouldDismissSheet(gesture)) {
    return 'rest';
  }

  if (!isExpanded) {
    return 'dismiss';
  }

  const { distance } = towardsEdge(gesture);
  const pastRest =
    distance - (gesture.panelHeight - restHeight) >
    restHeight * DISMISS_DISTANCE_RATIO;

  return restHeight > 0 && pastRest ? 'dismiss' : 'collapse';
}
