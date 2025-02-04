import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../../../node_modules/react';
import { navigationOptionVariants } from './NavigationOption.variants';
type NavigationOption = VariantProps<typeof navigationOptionVariants> & {
    className?: string;
};
export type NavigationOptionProps = NavigationOption & ({
    role: 'button';
    children: ReactNode;
    onClick: VoidFunction;
} | {
    role?: never;
    children: ReactNode;
});
export {};
