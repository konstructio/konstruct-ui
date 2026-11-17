import { createContext } from 'react';

import type { ContextType } from './phone-number.types';

export type { ContextType, Country } from './phone-number.types';

export const PhoneNumberContext = createContext<ContextType>({
  countries: [],
  isOpenSelector: false,
  selectedCountry: {
    code: 'US',
    flag: () => null,
    name: 'United States',
    prefix: '+1',
  },
  termOfSearch: '',
  value: '',
  handleOpenSelector() {
    throw new Error('handleOpenSelector function is not implemented');
  },
  handleSelectCountry() {
    throw new Error('handleSelectCountry function is not implemented');
  },
  onChangeTermOfSearch() {
    throw new Error('onChangeTermOfSearch function is not implemented');
  },
  onChangeValue() {
    throw new Error('onChangeValue function is not implemented');
  },
});
