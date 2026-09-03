import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick' | 'onCopy'> & {
    arrowClassName?: string;
    children?: ReactNode;
    copiedLabel?: string;
    copyLabel?: string;
    label: string;
    resetDelay?: number;
    text: string;
    theme?: Theme;
    tooltipClassName?: string;
    onCopy?: (text: string) => void;
    onCopyError?: (error: unknown) => void;
};
