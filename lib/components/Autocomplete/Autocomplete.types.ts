import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

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
  placeholder?: string;
  placeHolderEmptyValues?: string | ReactNode;
  placeHolderEmptyValuesClassName?: string;
  theme?: Theme;
  onChange(value: string): void;
}
