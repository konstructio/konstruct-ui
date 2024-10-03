import { ReactNode, RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';

import { Option } from '../Autocomplete.types';
import { autocompleteVariants } from '../Autocomplete.variants';

export interface Props extends VariantProps<typeof autocompleteVariants> {
  className?: string;
  inputRef: RefObject<HTMLInputElement>;
  wrapperRef: RefObject<HTMLDivElement>;
  options: Option[];
  placeholder: string | ReactNode;
  placeholderClassName?: string;
  onClick(value: string): void;
}
