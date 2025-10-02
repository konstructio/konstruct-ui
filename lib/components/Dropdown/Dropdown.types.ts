import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { dropdownVariants } from './Dropdown.variants';

export type Option = {
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  value: string;
};

type OnChangeFn = (params: { target: { value: string; name: string } }) => void;

export type DropdownProps = VariantProps<typeof dropdownVariants> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
    additionalOptions?: ReactNode[] | string[];
    className?: string;
    error?: string;
    helperText?: string;
    highlightSearch?: boolean;
    iconClassName?: string;
    inputClassName?: string;
    isLoading?: boolean;
    isRequired?: boolean;
    label?: string;
    labelClassName?: string;
    listClassName?: string;
    listItemClassName?: string;
    options: Option[];
    searchable?: boolean;
    showSearchIcon?: boolean;
    theme?: Theme;
    value?: string;
    wrapperClassName?: string;
    onBlur?: VoidFunction;
    onChange?: OnChangeFn;
  };
