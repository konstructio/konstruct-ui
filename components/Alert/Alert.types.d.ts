import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';
import { alertVariants } from './Alert.variants';
import { Theme } from '../../domain/theme';
/**
 * Props for the Alert component.
 *
 * @example
 * ```tsx
 * <Alert type="success" content="Operation completed successfully!" />
 * <Alert type="error" content="Something went wrong" showCloseButton />
 * <Alert type="warning" content={<span>Warning: <strong>Action required</strong></span>} />
 * ```
 */
export interface AlertProps extends VariantProps<typeof alertVariants> {
    /** Whether the alert can be dismissed (deprecated, use showCloseButton) */
    dismissible?: boolean;
    /** Alert message content (string or ReactNode) */
    content: string | ReactNode;
    /** Whether the alert is visible */
    isVisible?: boolean;
    /** Show close button to dismiss alert */
    showCloseButton?: boolean;
    /** Theme override for this component */
    theme?: Theme;
}
