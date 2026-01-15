import { VariantProps } from 'class-variance-authority';

import { TagProps } from '@/components/Tag/Tag.types';

import { tagSelectVariants } from './TagSelect.variants';

/**
 * Props for the TagSelect component.
 * An input that allows selecting from a list of tags.
 *
 * @example
 * ```tsx
 * <TagSelect
 *   label="Categories"
 *   placeholder="Select categories..."
 *   options={[
 *     { label: 'Frontend', color: 'blue' },
 *     { label: 'Backend', color: 'green' },
 *     { label: 'DevOps', color: 'purple' },
 *   ]}
 *   multiselect
 * />
 * ```
 */
export interface TagSelectProps extends VariantProps<typeof tagSelectVariants> {
  /** Label displayed above the input */
  label?: string;
  /** Available tag options to select from */
  options: TagProps[];
  /** Form field name for the input */
  name?: string;
  /** Placeholder text when no selection */
  placeholder?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the wrapper */
  wrapperClassName?: string;
  /** Whether multiple tags can be selected */
  multiselect?: boolean;
}
