import { ReactNode } from 'react';

import { Props as ButtonProps } from '../Button/Button.types';

/**
 * Configuration for a dropdown menu option.
 */
export type Option = {
  /** The text or element displayed for this option */
  label: string | ReactNode;
  /** Callback fired when this option is selected */
  onClick?: VoidFunction;
};

/**
 * Props for the DropdownButton component.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   options={[
 *     { label: 'PDF', onClick: () => downloadPdf() },
 *     { label: 'CSV', onClick: () => downloadCsv() },
 *     { label: 'Excel', onClick: () => downloadExcel() },
 *   ]}
 * />
 * ```
 */
export type Props = {
  /** Appearance of the trigger button */
  appearance?: ButtonProps['appearance'];
  /** Additional CSS classes for the trigger button */
  buttonClassName?: string;
  /** Additional CSS classes for the wrapper container */
  className?: string;
  /** Disable the trigger and keep the menu closed */
  disabled?: boolean;
  /** Show a spinner in place of the chevron and disable the trigger */
  isLoading?: boolean;
  /** Additional CSS classes for each dropdown item */
  itemClassName?: string;
  /** Content of the trigger button */
  label?: string | ReactNode;
  /** Additional CSS classes for the dropdown list */
  listClassName?: string;
  /** Array of options to display in the dropdown */
  options: Option[];
  /** Variant of the trigger button */
  variant?: ButtonProps['variant'];
  /** Version of the trigger button */
  version?: ButtonProps['version'];
};
