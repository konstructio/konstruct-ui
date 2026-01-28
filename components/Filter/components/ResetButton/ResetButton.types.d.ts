import { ButtonProps } from '../../../Button/Button.types';
export type ResetButtonProps = ButtonProps & {
    disabled?: boolean;
    onClick?: VoidFunction;
};
