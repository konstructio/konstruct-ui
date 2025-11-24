import { FC } from 'react';

import { Props } from './PhoneNumberInput.types';
import { Wrapper } from './components';
import { PhoneNumberProvider } from './contexts';

export const PhoneNumberInput: FC<Props> = (delegated) => (
  <PhoneNumberProvider>
    <Wrapper {...delegated} />
  </PhoneNumberProvider>
);
