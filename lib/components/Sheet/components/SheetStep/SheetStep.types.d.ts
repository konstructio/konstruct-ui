import { PanInfo } from 'motion/react';
import { PropsWithChildren } from '../../../../../node_modules/react';
export type BackOutcome = 'back' | 'stay';
/**
 * What AnimatePresence hands an exiting step: the direction of travel and
 * whether the step has already been moved out by a gesture.
 */
export type StepExitCustom = {
    direction: number;
    instant: boolean;
};
export type Props = PropsWithChildren<{
    step: number;
    direction: number;
    /** Slide the content across on mount and unmount */
    animated: boolean;
    /** The content follows a swipe towards the right and reports its progress */
    canSwipeBack: boolean;
    /** Whether the pan that just started is a horizontal one on swipeable content */
    isArmed: (info: PanInfo) => boolean;
    onBackStart: () => void;
    onBackMove: (offset: number) => void;
    onBackEnd: (info: PanInfo) => BackOutcome;
    /** Reports the step's own height once it is laid out */
    onMount: (height: number) => void;
    /** Bumped to slide the content out as if swiped, e.g. from the back button */
    commitSignal: number;
    /** The content has finished sliding out after a completed swipe */
    onBackCommit: () => void;
    /** The content has settled back in place after an abandoned swipe */
    onBackCancel: () => void;
}>;
