import { ReactNode } from '../../../node_modules/react';
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
    /** Additional CSS classes for the trigger button */
    buttonClassName?: string;
    /** Additional CSS classes for the wrapper container */
    className?: string;
    /** Additional CSS classes for each dropdown item */
    itemClassName?: string;
    /** Additional CSS classes for the dropdown list */
    listClassName?: string;
    /** Array of options to display in the dropdown */
    options: Option[];
};
