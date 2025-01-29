import { VariantProps } from 'class-variance-authority';
import { ComponentRef, ReactNode, RefObject } from 'react';

import { Option } from '../../Autocomplete.types';
import { autocompleteVariants } from '../../Autocomplete.variants';

export interface Props extends VariantProps<typeof autocompleteVariants> {
  className?: string;
  inputRef: RefObject<ComponentRef<'input'> | null>;
  wrapperRef: RefObject<ComponentRef<'div'> | null>;
  options: Option[];
  placeholder: string | ReactNode;
  placeholderClassName?: string;
  onClick(value: string): void;
}
