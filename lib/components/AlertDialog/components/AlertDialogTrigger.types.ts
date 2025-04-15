import { Theme } from '@/domain/theme';

export interface AlertDialogTriggerProps {
  'data-theme'?: Theme;
  className?: string;
  text?: string;
  onOpen(): void;
}
