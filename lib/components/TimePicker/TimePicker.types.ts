import { VariantProps } from 'class-variance-authority';

import { timePickerVariants } from './TimePicker.variants';

/**
 * Props for the TimePicker component.
 * A scrollable time picker with support for 12 and 24 hour formats.
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Meeting Time"
 *   name="meetingTime"
 *   format="12"
 *   time={new Date()}
 *   isRequired
 * />
 * ```
 */
export type TimePickerProps = VariantProps<typeof timePickerVariants> & {
  /** Time format: '12' for AM/PM or '24' for military time */
  format?: '12' | '24';
  /** Scroll behavior when navigating times */
  scrollBehavior?: 'smooth' | 'auto';
  /** Currently selected time */
  time?: Date;
  /** Form field name */
  name?: string;
  /** Label displayed above the picker */
  label?: string;
  /** Whether the field is required */
  isRequired?: boolean;
  /** Additional CSS classes for the wrapper */
  className?: string;
  /** Additional CSS classes for the scrollable list */
  listClassName?: string;
  /** Additional CSS classes for list items */
  listItemClassName?: string;
  /** Additional CSS classes for list item buttons */
  listItemButtonClassName?: string;
};
