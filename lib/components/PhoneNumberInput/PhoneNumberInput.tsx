import { ComponentRef, FC, forwardRef } from 'react';

import { Props } from './PhoneNumberInput.types';
import { Wrapper } from './components';
import { PhoneNumberProvider } from './contexts';

export const PhoneNumberInput: FC<Props> = forwardRef<
  ComponentRef<'input'>,
  Props
>(({ defaultCountryCode = 'US', ...delegated }, ref) => (
  <PhoneNumberProvider defaultCountryCode={defaultCountryCode}>
    <Wrapper ref={ref} {...delegated} />
  </PhoneNumberProvider>
));
