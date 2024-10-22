import { PropsWithChildren } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { modalWrapperVariants } from './components/WrapperModal.variants';
export interface ModalProps extends PropsWithChildren, VariantProps<typeof modalWrapperVariants> {
    className?: string;
    buttonCloseClassName?: string;
}
