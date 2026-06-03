import { VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { Theme } from '../../../domain/theme';
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
    /** Icon rendered before the label */
    leftIcon?: ReactNode;
    /** Icon rendered after the label */
    rightIcon?: ReactNode;
};
/**
 * Configuration for the optional back button rendered before the steps.
 *
 * The breadcrumb isn't always used for navigation, so the back button only
 * renders when this object is provided.
 */
export type BackButton = {
    /** Icon shown inside the button. Defaults to <ArrowBackIcon /> */
    icon?: ReactNode;
    /** Handler invoked when the button is clicked */
    onClick?: () => void;
    /** Route to navigate to (router-aware: Link / a / custom component) */
    to?: string;
    /** Link target (_self or _blank) */
    target?: '_self' | '_blank';
    /** Accessible label for the button. Defaults to 'Go back' */
    label?: string;
    /** Custom component to render the link (e.g., Link from react-router) */
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
export interface Props extends VariantProps<typeof breadcrumbVariants>, HTMLAttributes<HTMLOListElement> {
    /** Array of breadcrumb steps */
    steps: Step[];
    /** Optional back button rendered before the steps */
    backButton?: BackButton;
    /** CSS classes for the nav wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}
/** @deprecated Use Props instead */
export type BreadcrumbProps = Props;
