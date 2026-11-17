import type { SheetPosition } from '../Sheet.types';

export type Gesture = {
  offset: number;
  velocity: number;
  panelHeight: number;
  position: SheetPosition;
};

export type SheetGesture = Gesture & {
  expandable: boolean;
  isExpanded: boolean;
  /** Height the panel had before it expanded; the collapse target */
  restHeight?: number;
};

export type SheetGestureOutcome = 'dismiss' | 'expand' | 'collapse' | 'rest';

export type BackGesture = {
  offset: number;
  velocity: number;
  panelWidth: number;
};
