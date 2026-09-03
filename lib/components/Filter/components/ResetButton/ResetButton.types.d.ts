import { Props as ButtonProps } from '../../../Button/Button.types';
export type Props = ButtonProps & {
    disabled?: boolean;
    onClick?: VoidFunction;
};
