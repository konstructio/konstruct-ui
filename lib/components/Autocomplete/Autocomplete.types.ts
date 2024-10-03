import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { autocompleteVariants } from './Autocomplete.variants';

export type Option = {
  value: string;
};

export interface AutocompleteProps
  extends VariantProps<typeof autocompleteVariants> {
  className?: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  placeHolderEmptyValues?: string | ReactNode;
  placeHolderEmptyValuesClassName?: string;
  options: Option[];
  onChange(value: string): void;
}
