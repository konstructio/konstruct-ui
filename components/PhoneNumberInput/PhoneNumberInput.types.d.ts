import { RegionCode } from 'google-libphonenumber';
import { InputHTMLAttributes } from '../../../node_modules/react';
/**
 * Props for the PhoneNumberInput component.
 * An input with country code selector and phone number formatting.
 *
 * @example
 * ```tsx
 * <PhoneNumberInput
 *   label="Phone Number"
 *   name="phone"
 *   defaultCountryCode="US"
 *   placeholder="Enter phone number"
 *   showFlagOnSearch
 * />
 * ```
 */
export type Props = InputHTMLAttributes<HTMLInputElement> & {
    /** Default country code for the selector (e.g., 'US', 'GB') */
    defaultCountryCode?: RegionCode;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Additional CSS classes for the helper text */
    helperTextClassName?: string;
    /** Whether the field is required */
    isRequired?: boolean;
    /** Label displayed above the input */
    label?: string;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Additional CSS classes for the label wrapper */
    labelWrapperClassName?: string;
    /** Form field name */
    name?: string;
    /** Placeholder text for the input */
    placeholder?: string;
    /** Whether to show country flags in the search dropdown */
    showFlagOnSearch?: boolean;
    /** Whether to show the country filter input */
    showInputFilter?: boolean;
    /** Whether to show country names in the search dropdown */
    showNameOnSearch?: boolean;
    /** Whether to show the placeholder text */
    showPlaceHolder?: boolean;
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
};
