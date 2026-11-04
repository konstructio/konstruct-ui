import { SheetPosition } from '../Sheet.types';
export declare const DISMISS_DISTANCE_RATIO = 0.25;
export declare const DISMISS_VELOCITY = 500;
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
export declare function shouldDismissSheet(gesture: Gesture): boolean;
export declare function shouldExpandSheet(gesture: Gesture): boolean;
type BackGesture = {
    offset: number;
    velocity: number;
    panelWidth: number;
};
export declare function shouldSwipeBack({ offset, velocity, panelWidth, }: BackGesture): boolean;
export declare function resolveSheetGesture({ expandable, isExpanded, restHeight, ...gesture }: SheetGesture): SheetGestureOutcome;
export {};
