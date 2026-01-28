import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../../../node_modules/react';
import { logoVariants } from './Logo.variants';
export interface LogoProps extends PropsWithChildren, VariantProps<typeof logoVariants> {
    className?: string;
}
