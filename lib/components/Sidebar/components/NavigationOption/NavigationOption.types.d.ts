import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../../../../node_modules/react';
import { navigationOptionVariants } from './NavigationOption.variants';
type NavigationOption = VariantProps<typeof navigationOptionVariants> & {
    className?: string;
    isVisible?: boolean;
    isActive?: boolean;
};
export type Props = NavigationOption & ({
    role: 'button';
    children: ReactNode;
    onClick: VoidFunction;
} | {
    role?: never;
    children: ReactNode;
});
/** @deprecated Use Props instead */
export type NavigationOptionProps = Props;
export {};
