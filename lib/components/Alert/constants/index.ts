import {
  CheckCircleFilledIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
  ErrorIcon,
} from '@/assets/icons/components';

export const ICON_MAP = {
  success: CheckCircleFilledIcon,
  info: InfoCircleIcon,
  warning: WarningTriangleIcon,
  danger: ErrorIcon,
} as const;
