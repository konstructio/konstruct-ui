import { ReactNode } from 'react';

export type Option = {
  value: string;
};

export type AutocompleteProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  placeHolderEmptyValues?: string | ReactNode;
  options: Option[];
  onChange(value: string): void;
};
