import { ComponentRef, FC, forwardRef } from 'react';

import { Props } from './PhoneNumberInput.types';
import { Wrapper } from './components';
import { PhoneNumberProvider } from './contexts';

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
export const PhoneNumberInput: FC<Props> = forwardRef<
  ComponentRef<'input'>,
  Props
>(({ defaultCountryCode = 'US', ...delegated }, ref) => (
  <PhoneNumberProvider defaultCountryCode={defaultCountryCode}>
    <Wrapper ref={ref} {...delegated} />
  </PhoneNumberProvider>
));
