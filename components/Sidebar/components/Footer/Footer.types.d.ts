import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../../../node_modules/react';
import { footerVariants } from './Footer.variants';
export interface FooterProps extends PropsWithChildren, VariantProps<typeof footerVariants> {
    className?: string;
}
