import { VariantProps } from 'class-variance-authority';
import { Transition } from 'motion/react';
import { PropsWithChildren } from '../../../../../node_modules/react';
import { Theme } from '../../../../domain/theme';
import { modalVariants } from './Wrapper.variants';
export type Props = PropsWithChildren & VariantProps<typeof modalVariants> & {
    buttonCloseClassName?: string;
    className?: string;
    containerClassName?: string;
    showCloseButton?: boolean;
    theme?: Theme;
    transition?: Transition;
    onClose?: () => void;
};
