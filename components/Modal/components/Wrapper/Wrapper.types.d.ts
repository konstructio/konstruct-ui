import { PropsWithChildren } from '../../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { modalVariants } from './Wrapper.variants';
export interface WrapperProps extends PropsWithChildren, VariantProps<typeof modalVariants> {
    className?: string;
    buttonCloseClassName?: string;
}
