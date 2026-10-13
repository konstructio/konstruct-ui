import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

export interface Props extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> {
  /** Additional CSS classes for the field container */
  className?: string;
  /** Commit the typed text as a tag when the input loses focus. Defaults to true */
  commitOnBlur?: boolean;
  /** Keys that commit the typed text as a tag. Defaults to Enter and comma */
  delimiters?: string[];
  /** Error message displayed below the field */
  error?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Helper text displayed below the field when there is no error */
  helperText?: string;
  /** Additional CSS classes for the helper text */
  helperTextClassName?: string;
  /** Show a spinner in the field and a loading row in the suggestions */
  isLoading?: boolean;
  /** Show required indicator */
  isRequired?: boolean;
  /** Label displayed above the field */
  label?: ReactNode;
  /** Content displayed at the right end of the label row */
  labelAction?: ReactNode;
  /** Accessible name of the spinner and the loading row */
  loadingText?: string;
  /** Existing tags offered while typing; already selected ones are hidden */
  suggestions?: string[];
  /** Theme override for this component */
  theme?: Theme;
  /** Current tags */
  value: string[];
  /** Called with the new tags when one is added or removed */
  onChange: (tags: string[]) => void;
}

export type TagsInputProps = Props;
