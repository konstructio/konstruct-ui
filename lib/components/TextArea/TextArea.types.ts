import { VariantProps } from 'class-variance-authority';
import { ReactNode, TextareaHTMLAttributes } from 'react';

import { Theme } from '@/domain/theme';

import { textAreaVariants } from './TextArea.variants';

/**
 * Props for the TextArea component.
 *
 * @example
 * ```tsx
 * <TextArea label="Description" placeholder="Enter description..." />
 * <TextArea label="Notes" rows={5} />
 * <TextArea name="bio" initialValue="Default text" />
 * <TextArea label="Bio" isRequired error="Bio is required" />
 * ```
 */
export interface Props
  extends
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  /** Number of visible text rows (default: 3) */
  rows?: number;
  /** Error message to display below the textarea */
  error?: string;
  /** Helper text displayed below the textarea when no error */
  helperText?: string;
  /** Additional CSS classes for the helper text */
  helperTextClassName?: string;
  /** Show required indicator (*) next to label */
  isRequired?: boolean;
  /** Label displayed above the textarea */
  label?: string | ReactNode;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Form field name */
  name?: string;
  /** Initial/default value */
  initialValue?: string;
  /** Theme override for this component */
  theme?: Theme;
}

/** @deprecated Use Props instead */
export type TextAreaProps = Props;
