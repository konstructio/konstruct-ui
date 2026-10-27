import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { Props as ButtonProps } from '../Button/Button.types';

/**
 * Configuration for a dropdown menu option.
 */
export type Option = {
  /** The text or element displayed for this option */
  label: string | ReactNode;
  /** Callback fired when this option is selected */
  onClick?: VoidFunction;
  /** Keep the option visible but inert */
  disabled?: boolean;
  /** Why the option is disabled; rendered beside the label and implies `disabled` */
  disabledReason?: ReactNode;
  /** Style the option as a destructive action */
  destructive?: boolean;
  /** Draw a divider above this option */
  separator?: boolean;
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
  /** Edge of the trigger the menu aligns to (default: 'start') */
  align?: 'start' | 'end';
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
  /**
   * Render the options as an action sheet docked to the bottom of the screen
   * instead of a dropdown while `sheetQuery` matches. The title heads the sheet.
   */
  sheetTitle?: ReactNode;
  /**
   * Media query that switches to the action sheet (default: touch pointers and
   * viewports under 768px).
   */
  sheetQuery?: string;
  /** Screen edge the action sheet docks to (default: 'bottom') */
  sheetPosition?: 'bottom' | 'top';
  /** Theme override for the dropdown and the sheet */
  theme?: Theme;
  /** Variant of the trigger button */
  variant?: ButtonProps['variant'];
  /** Version of the trigger button */
  version?: ButtonProps['version'];
};
