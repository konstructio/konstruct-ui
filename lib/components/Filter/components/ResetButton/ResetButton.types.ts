import { ButtonProps } from '@/components/Button/Button.types';

export type ResetButtonProps = ButtonProps & {
  disabled?: boolean;
  onClick?: VoidFunction;
};
