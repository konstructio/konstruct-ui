import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { TagProps } from '@/components/Tag/Tag.types';

import { multiSelectDropdownVariants } from './MultiSelectDropdown.variants';

export type MultiSelectDropdownOption = {
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
};

type OnChangeFn = (params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void;

export interface MultiSelectDropdownProps
  extends
    VariantProps<typeof multiSelectDropdownVariants>,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'onChange' | 'onBlur'
    > {
  label?: string;
  options: MultiSelectDropdownOption[];
  name?: string;
  placeholder?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  multiselect?: boolean;
  value?: MultiSelectDropdownOption[];
  onChange?: OnChangeFn;
  onBlur?: VoidFunction;
}
