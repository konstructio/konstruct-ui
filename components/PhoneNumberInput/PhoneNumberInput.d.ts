import { FC } from '../../../node_modules/react';
import { Props } from './PhoneNumberInput.types';
/**
 * A phone number input with country code selector and automatic formatting.
 * Uses google-libphonenumber for validation and formatting.
 *
 * @example
 * ```tsx
 * <PhoneNumberInput
 *   label="Contact Number"
 *   name="contactPhone"
 *   defaultCountryCode="US"
 *   showFlagOnSearch
 *   showInputFilter
 *   isRequired
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-phonenumberinput--docs Storybook}
 */
export declare const PhoneNumberInput: FC<Props>;
