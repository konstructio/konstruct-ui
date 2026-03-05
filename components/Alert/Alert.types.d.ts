import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { alertVariants } from './Alert.variants';
/**
 * Props for the Alert component.
 *
 * @example
 * ```tsx
 * <Alert type="success" title="Operation completed!" />
 * <Alert type="danger" title="Error" description="Something went wrong" showCloseButton />
 * <Alert type="warning" title="Warning" description={<span>Action <strong>required</strong></span>} />
 * ```
 */
export interface AlertProps extends VariantProps<typeof alertVariants> {
    /** Alert title (bold text) */
    title: string;
    /** Alert description */
    description?: string | ReactNode;
    /** Whether the alert is visible */
    isVisible?: boolean;
    /** Show close button to dismiss alert */
    showCloseButton?: boolean;
    /** Theme override for this component */
    theme?: Theme;
}
