import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { selectVariants } from './Select.variants';

/**
 * Option type for Select dropdown items.
 *
 * @example
 * ```tsx
 * const options: Option[] = [
 *   { value: 'us', label: 'United States', leftIcon: <FlagUS /> },
 *   { value: 'uk', label: 'United Kingdom', subLabel: 'Europe' },
 * ];
 * ```
 */
export type Option = {
  /** Display text for the option */
  label: string;
  /** Secondary text displayed below the label */
  subLabel?: string | ReactNode;
  /** Icon displayed on the left side of the option */
  leftIcon?: ReactNode | string;
  /** CSS classes for the left icon */
  leftIconClassName?: string;
  /** Show right component when this option is selected */
  showRightComponentOnselectedValue?: boolean;
  /** Component displayed on the right side of the option */
  rightComponent?: ReactNode | string;
  /** CSS classes for the right component */
  rightComponentClassName?: string;
  /** CSS classes for wrapper when this option is selected */
  wrapperClassNameOnSelectedValue?: string;
  /** Unique value for the option */
  value: string;
};

type OnChangeFn = (params: { target: { value: string; name: string } }) => void;

/**
 * Props for the Select (Dropdown) component.
 *
 * @example
 * ```tsx
 * // Basic select
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 *   value={country}
 *   onChange={(e) => setCountry(e.target.value)}
 * />
 *
 * // Searchable select
 * <Select
 *   label="Search countries"
 *   options={countries}
 *   searchable
 *   highlightSearch
 * />
 *
 * // With infinite scroll
 * <Select
 *   options={options}
 *   isInfiniteScrollEnabled
 *   onFetchMoreOptions={async ({ page }) => fetchMore(page)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-select--docs Storybook}
 */
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
