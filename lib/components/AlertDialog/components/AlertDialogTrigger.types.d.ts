import { Props as ButtonProps } from '../../../../components/Button/Button.types';
import { Theme } from '../../../../domain/theme';
export interface Props {
    'data-theme'?: Theme;
    variant?: ButtonProps['variant'];
    className?: string;
    text?: string;
    onOpen: VoidFunction;
    onClick?: VoidFunction;
}
/** @deprecated Use Props instead */
export type AlertDialogTriggerProps = Props;
