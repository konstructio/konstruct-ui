import { PropsWithChildren } from '../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { modalWrapperVariants } from './WrapperModal.variants';
export interface WrapperModalProps extends PropsWithChildren, VariantProps<typeof modalWrapperVariants> {
    className?: string;
    buttonCloseClassName?: string;
}
