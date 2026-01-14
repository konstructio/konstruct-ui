import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { multiSelectDropdownVariants } from './MultiSelectDropdown.variants';

export type MultiSelectDropdownOption = {
  id: string | number;
  label: string;
  badge?: string;
  value?: string;
};

type OnChangeFn = (params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void;

type OnBlurFn = (event: {
  target: HTMLInputElement | null;
  type?: string;
}) => void;

export interface MultiSelectDropdownProps
  extends
    VariantProps<typeof multiSelectDropdownVariants>,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'onChange' | 'onBlur'
    > {
  isLoading?: boolean;
  isRequired?: boolean;
  label?: string;
  labelClassName?: string;
  multiselect?: boolean;
  name?: string;
  noOptionsText?: string;
  options: MultiSelectDropdownOption[];
  placeholder?: string;
  value?: MultiSelectDropdownOption[];
  wrapperClassName?: string;
  onChange?: OnChangeFn;
  onBlur?: OnBlurFn;
}
