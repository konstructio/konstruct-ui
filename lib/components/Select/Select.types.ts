import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { selectVariants } from './Select.variants';

export type Option = {
  label: string;
  subLabel?: string | ReactNode;
  leftIcon?: ReactNode | string;
  leftIconClassName?: string;
  showRightComponentOnselectedValue?: boolean;
  rightComponent?: ReactNode | string;
  rightComponentClassName?: string;
  wrapperClassNameOnSelectedValue?: string;
  value: string;
};

type OnChangeFn = (params: { target: { value: string; name: string } }) => void;

export type SelectProps = VariantProps<typeof selectVariants> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
    additionalOptions?: ReactNode[] | string[];
    className?: string;
    disabled?: boolean;
    error?: string;
    errorClassName?: string;
    helperText?: string;
    helperTextClassName?: string;
    highlightSearch?: boolean;
    iconClassName?: string;
    inputClassName?: string;
    isLoading?: boolean;
    isRequired?: boolean;
    label?: string;
    labelClassName?: string;
    listClassName?: string;
    listItemClassName?: string;
    listItemSecondRowClassName?: string;
    mainWrapperClassName?: string;
    noOptionsText?: string;
    options: Option[];
    searchable?: boolean;
    showSearchIcon?: boolean;
    theme?: Theme;
    value?: string;
    wrapperClassName?: string;
    onBlur?: VoidFunction;
    onChange?: OnChangeFn;
    onSearchChange?: (searchTerm: string) => void;
  } & (
    | {
        isInfiniteScrollEnabled: true;
        onFetchMoreOptions: (params: {
          page: number;
          pageSize: number;
          termOfSearch?: string;
        }) => Promise<{ data: Option[]; hasMore: boolean }>;
      }
    | {
        isInfiniteScrollEnabled?: false | undefined;
        onFetchMoreOptions?: never;
      }
  );
