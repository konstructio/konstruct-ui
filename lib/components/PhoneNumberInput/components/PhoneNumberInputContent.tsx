import { ComponentRef, forwardRef } from 'react';

import { Props } from '../PhoneNumberInput.types';
import { PhoneNumberProvider } from '../contexts';

import { Wrapper } from './Wrapper';

export const PhoneNumberInputContent = forwardRef<ComponentRef<'input'>, Props>(
  ({ defaultCountryCode = 'US', ...delegated }, ref) => (
    <PhoneNumberProvider defaultCountryCode={defaultCountryCode}>
      <Wrapper ref={ref} {...delegated} />
    </PhoneNumberProvider>
  ),
);

PhoneNumberInputContent.displayName = 'PhoneNumberInputContent';
