import { VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { breadcrumbVariants } from './Breadcrumb.variants';
/**
 * A single step in the breadcrumb navigation.
 */
export type Step = {
    /** Display text for the breadcrumb item */
    label: string;
    /** URL to navigate to when clicked */
    to?: string;
    /** Link target (_self or _blank) */
    target?: '_self' | '_blank';
    /** Whether this step is the current/active page */
    isActive?: boolean;
    /** Custom component to render (e.g., Link from react-router) */
    component?: FC<any>;
};
/**
 * Props for the Breadcrumb component.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   steps={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Products', to: '/products' },
 *     { label: 'Current Page', isActive: true },
 *   ]}
 * />
 * ```
 */
export interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants>, HTMLAttributes<HTMLOListElement> {
    /** Array of breadcrumb steps */
    steps: Step[];
    /** CSS classes for the nav wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}
