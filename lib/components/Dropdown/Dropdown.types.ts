import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { dropdownVariants } from './Dropdown.variants';

export type Option = {
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  value: string;
};

type OnChangeFn = (params: { target: { value: string; name: string } }) => void;

export interface DropdownProps
  extends VariantProps<typeof dropdownVariants>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  iconClassName?: string;
  isLoading?: boolean;
  label?: string;
  labelClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
  options: Option[];
  searchable?: boolean;
  theme?: Theme;
  value?: string;
  wrapperClassName?: string;
  onChange?: OnChangeFn;
}
