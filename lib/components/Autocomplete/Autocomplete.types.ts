import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { autocompleteVariants } from './Autocomplete.variants';

export type Option = {
  value: string;
};

export interface AutocompleteProps
  extends VariantProps<typeof autocompleteVariants> {
  autoComplete?: 'off';
  className?: string;
  label?: string;
  labelClassName?: string;
  name?: string;
  options: Option[];
  placeHolderEmptyValues?: string | ReactNode;
  placeHolderEmptyValuesClassName?: string;
  placeholder?: string;
  onChange(value: string): void;
}
