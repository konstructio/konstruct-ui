import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

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
 * ```
 */
export interface TextAreaProps
  extends
    InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  /** Number of visible text rows (default: 3) */
  rows?: number;
  /** Label displayed above the textarea */
  label?: string | ReactNode;
  /** Additional CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Form field name */
  name?: string;
  /** Initial/default value */
  initialValue?: string;
  /** Theme override for this component */
  theme?: Theme;
}
