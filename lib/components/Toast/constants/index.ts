import {
  CheckCircleFilledIcon,
  ErrorIcon,
  InformationOutlineIcon,
  WarningTriangleIcon,
} from '@/assets/icons/components';

import { ToastType } from '../Toast.types';

export const DEFAULT_TOAST_DURATION = 3000;

export const DEFAULT_TOAST_LIMIT = 5;

export const TOAST_DISMISS_STAGGER_MS = 300;

export const DEFAULT_MAX_VISIBLE_TOASTS = 3;

export const COLLAPSED_STEP_PX = 12;

export const COLLAPSED_SCALE_STEP = 0.05;

export const EXPANDED_GAP_PX = 12;

export const TOAST_TRANSITION = {
  type: 'spring',
  stiffness: 320,
  damping: 32,
  mass: 0.9,
} as const;

export const TOAST_ENTER_TRANSITION = {
  type: 'spring',
  stiffness: 260,
  damping: 26,
} as const;

export const TOAST_EXIT_TRANSITION = {
  duration: 0.15,
  ease: 'easeOut',
} as const;

export const TOAST_ICONS: Record<ToastType, typeof ErrorIcon> = {
  success: CheckCircleFilledIcon,
  error: ErrorIcon,
  warning: WarningTriangleIcon,
  info: InformationOutlineIcon,
};
