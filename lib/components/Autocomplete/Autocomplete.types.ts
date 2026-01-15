import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { autocompleteVariants } from './Autocomplete.variants';

/**
 * Option type for Autocomplete suggestions.
 */
export type Option = {
  /** The value to display and select */
  value: string;
};

/**
 * Props for the Autocomplete component.
 *
 * @example
 * ```tsx
 * <Autocomplete
 *   label="Search"
 *   options={[{ value: 'React' }, { value: 'Vue' }, { value: 'Angular' }]}
 *   placeholder="Search frameworks..."
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
export interface AutocompleteProps extends VariantProps<
  typeof autocompleteVariants
> {
  /** Disable browser autocomplete (default: 'off') */
  autoComplete?: 'off';
  /** Additional CSS classes */
  className?: string;
  /** Label displayed above the input */
  label?: string;
  /** CSS classes for the label */
  labelClassName?: string;
  /** Form field name */
  name?: string;
  /** Array of options to suggest */
  options: Option[];
  /** Placeholder text */
  placeholder?: string;
  /** Text shown when no options match */
  placeHolderEmptyValues?: string | ReactNode;
  /** CSS classes for empty state text */
  placeHolderEmptyValuesClassName?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** Callback when a value is selected */
  onChange(value: string): void;
}
