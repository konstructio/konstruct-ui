import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { dropdownVariants } from './Dropdown.variants';

export type Option = {
  value: string;
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  righIcon?: ReactNode | string;
};

export interface DropdownProps extends VariantProps<typeof dropdownVariants> {
  label?: string;
  name?: string;
  placeholder?: string;
  options: Option[];
}
