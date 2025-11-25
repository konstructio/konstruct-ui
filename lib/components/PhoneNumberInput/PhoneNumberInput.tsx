import { FC } from 'react';

import { Props } from './PhoneNumberInput.types';
import { Wrapper } from './components';
import { PhoneNumberProvider } from './contexts';

export const PhoneNumberInput: FC<Props> = ({
  defaultCountryCode = 'US',
  ...delegated
}) => (
  <PhoneNumberProvider defaultCountryCode={defaultCountryCode}>
    <Wrapper {...delegated} />
  </PhoneNumberProvider>
);
