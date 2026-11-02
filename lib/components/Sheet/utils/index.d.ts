import { SheetPosition } from '../Sheet.types';
export declare const DISMISS_DISTANCE_RATIO = 0.25;
export declare const DISMISS_VELOCITY = 500;
type DismissGesture = {
    offset: number;
    velocity: number;
    panelHeight: number;
    position: SheetPosition;
};
export declare function shouldDismissSheet({ offset, velocity, panelHeight, position, }: DismissGesture): boolean;
export {};
