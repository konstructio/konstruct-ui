import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';
import { badgeVariants } from './Badge.variants';
/**
 * Props for the Badge component.
 *
 * @example
 * ```tsx
 * <Badge label="New" variant="success" />
 * <Badge label="Pending" variant="warning" />
 * <Badge label="Error" variant="error" dismissible onDismiss={() => {}} />
 * <Badge label="With Icon" leftIcon={<Icon />} />
 * ```
 */
export type BadgeProps = VariantProps<typeof badgeVariants> & {
    /** Additional CSS classes */
    className?: string;
    /** Show dismiss button */
    dismissible?: true;
    /** Allow text selection (default: true) */
    isSelectable?: boolean;
    /** Badge text content */
    label: string;
    /** Icon displayed on the left */
    leftIcon?: ReactNode;
    /** Show loading spinner */
    loading?: boolean;
    /** Icon displayed on the right (when not dismissible) */
    rightIcon?: ReactNode;
    /** Click handler (makes badge interactive) */
    onClick?: VoidFunction;
    /** Callback when dismiss button clicked */
    onDismiss?: VoidFunction;
};
