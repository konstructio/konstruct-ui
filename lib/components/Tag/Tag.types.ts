import { ReactNode } from 'react';

/**
 * Props for the Tag component.
 * A small label component for categorization or status display.
 *
 * @example
 * ```tsx
 * <Tag
 *   id="status-active"
 *   label="Active"
 *   color="green"
 *   leftIcon={<CheckIcon />}
 * />
 * ```
 */
export type TagProps = {
  /** Color variant for the tag */
  color?:
    | 'gray'
    | 'gray-800'
    | 'cyan'
    | 'gold'
    | 'green'
    | 'light blue'
    | 'lime'
    | 'pink'
    | 'purple'
    | 'emerald'
    | 'fuscia'
    | 'indigo'
    | 'light-orange'
    | 'dark-sky-blue'
    | 'mistery';
  /** Unique identifier for the tag */
  id: string | number;
  /** Text displayed in the tag */
  label: string;
  /** Icon displayed after the label */
  rightIcon?: ReactNode;
  /** Icon displayed before the label */
  leftIcon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Data attribute for the tag value */
  'data-value'?: string;
  /** Whether the tag is in a selected state */
  isSelected?: boolean;
};
