import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { multiSelectDropdownVariants } from './MultiSelectDropdown.variants';

/**
 * Configuration for a multi-select dropdown option.
 */
export type MultiSelectDropdownOption = {
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
};

type OnChangeFn = (params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void;

type OnBlurFn = (event: {
  target: HTMLInputElement | null;
  type?: string;
}) => void;

/**
 * Props for the MultiSelectDropdown component.
 * A dropdown that allows selecting one or multiple options with search.
 *
 * @example
 * ```tsx
 * <MultiSelectDropdown
 *   label="Select users"
 *   placeholder="Search users..."
 *   options={[
 *     { id: 1, label: 'John Doe', badge: 'Admin' },
 *     { id: 2, label: 'Jane Smith', badge: 'User' },
 *   ]}
 *   value={selectedUsers}
 *   onChange={(e) => setSelectedUsers(e.target.value)}
 *   multiselect
 * />
 * ```
 */
export interface MultiSelectDropdownProps
  extends
    VariantProps<typeof multiSelectDropdownVariants>,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'onChange' | 'onBlur'
    > {
  /** Whether the dropdown is in a loading state */
  isLoading?: boolean;
  /** Whether the field is required */
  isRequired?: boolean;
  /** Label displayed above the dropdown */
  label?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Whether multiple options can be selected */
  multiselect?: boolean;
  /** Form field name */
  name?: string;
  /** Text shown when no options match the search */
  noOptionsText?: string;
  /** Available options to select from */
  options: MultiSelectDropdownOption[];
  /** Placeholder text when no selection */
  placeholder?: string;
  /** Currently selected options */
  value?: MultiSelectDropdownOption[];
  /** Additional CSS classes for the wrapper */
  wrapperClassName?: string;
  /** Callback fired when selection changes */
  onChange?: OnChangeFn;
  /** Callback fired when the input loses focus */
  onBlur?: OnBlurFn;
}
