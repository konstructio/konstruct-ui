import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

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
type AlertBaseProps = VariantProps<typeof alertVariants> & {
  /** Whether the alert is visible */
  isVisible?: boolean;
  /** Show close button to dismiss alert */
  showCloseButton?: boolean;
  /** Theme override for this component */
  theme?: Theme;
};

/**
 * Props for the Alert component.
 * At least one of `title` or `description` must be provided.
 *
 * @example
 * ```tsx
 * <Alert type="success" title="Operation completed!" />
 * <Alert type="danger" description="Something went wrong" />
 * <Alert type="warning" title="Warning" description={<span>Action <strong>required</strong></span>} />
 * ```
 */
export type Props = AlertBaseProps &
  (
    | { title: string | ReactNode; description?: string | ReactNode }
    | { title?: string | ReactNode; description: string | ReactNode }
  );

/** @deprecated Use Props instead */
export type AlertProps = Props;
