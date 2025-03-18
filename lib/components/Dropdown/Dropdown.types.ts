import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { dropdownVariants } from './Dropdown.variants';

export type Option = {
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  value: string;
};

export interface DropdownProps
  extends VariantProps<typeof dropdownVariants>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  onChange?: ({
    target: { value, name },
  }: {
    target: { value: string; name: string };
  }) => void;
  label?: string;
  options: Option[];
  labelClassName?: string;
  value?: string;
  isLoading?: boolean;
}
