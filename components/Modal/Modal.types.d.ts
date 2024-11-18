import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { modalVariants } from './components/Wrapper/Wrapper.variants';
export interface ModalProps extends PropsWithChildren, VariantProps<typeof modalVariants> {
    className?: string;
    buttonCloseClassName?: string;
}
export type ModalChildProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
