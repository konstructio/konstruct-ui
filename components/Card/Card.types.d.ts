import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { cardVariants } from './Card.variants';
/**
 * Props for the Card component.
 *
 * @example
 * ```tsx
 * <Card>Basic card content</Card>
 * <Card canHover>Hoverable card</Card>
 * <Card isActive>Active/selected card</Card>
 * ```
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants>, PropsWithChildren {
    /** Enable hover effect */
    canHover?: boolean;
    /** Show active/selected state */
    isActive?: boolean;
    /** Theme override for this component */
    theme?: Theme;
    /** CSS classes for the outer wrapper */
    wrapperClassName?: string;
}
