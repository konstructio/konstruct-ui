import { PanInfo } from 'motion/react';
/**
 * One step of a sheet's content. It owns its horizontal offset so a step that
 * was swiped away keeps that offset while it unmounts and the next step mounts
 * in place.
 *
 * The ref is forwarded because AnimatePresence's popLayout attaches one to
 * take the leaving step out of the flow; without it the step keeps its space
 * while it slides out and the sheet grows to the height of both steps.
 */
export declare const SheetStep: import('../../../../../node_modules/react').ForwardRefExoticComponent<{
    step: number;
    direction: number;
    animated: boolean;
    canSwipeBack: boolean;
    isArmed: (info: PanInfo) => boolean;
    onBackStart: () => void;
    onBackMove: (offset: number) => void;
    onBackEnd: (info: PanInfo) => import('./SheetStep.types').BackOutcome;
    onMount: (height: number) => void;
    commitSignal: number;
    onBackCommit: () => void;
    onBackCancel: () => void;
} & {
    children?: import('../../../../../node_modules/react').ReactNode | undefined;
} & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
