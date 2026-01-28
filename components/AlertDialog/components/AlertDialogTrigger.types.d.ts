import { ButtonProps } from '../../Button/Button.types';
import { Theme } from '../../../domain/theme';
export interface AlertDialogTriggerProps {
    'data-theme'?: Theme;
    variant?: ButtonProps['variant'];
    className?: string;
    text?: string;
    onOpen: VoidFunction;
    onClick?: VoidFunction;
}
