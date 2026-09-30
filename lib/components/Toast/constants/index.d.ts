import { ErrorIcon } from '../../../assets/icons/components';
import { ToastType } from '../Toast.types';
export declare const DEFAULT_TOAST_DURATION = 3000;
export declare const DEFAULT_TOAST_LIMIT = 5;
export declare const TOAST_DISMISS_STAGGER_MS = 300;
export declare const DEFAULT_MAX_VISIBLE_TOASTS = 3;
export declare const COLLAPSED_STEP_PX = 12;
export declare const COLLAPSED_SCALE_STEP = 0.05;
export declare const EXPANDED_GAP_PX = 12;
export declare const TOAST_TRANSITION: {
    readonly type: "spring";
    readonly stiffness: 320;
    readonly damping: 32;
    readonly mass: 0.9;
};
export declare const TOAST_ENTER_TRANSITION: {
    readonly type: "spring";
    readonly stiffness: 260;
    readonly damping: 26;
};
export declare const TOAST_EXIT_TRANSITION: {
    readonly duration: 0.15;
    readonly ease: "easeOut";
};
export declare const TOAST_ICONS: Record<ToastType, typeof ErrorIcon>;
