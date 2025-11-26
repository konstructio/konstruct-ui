import { RegionCode } from 'google-libphonenumber';
import { createContext, FC } from 'react';

export type Country = {
  code: RegionCode;
  flag: FC;
  name: string;
  prefix: string;
};

export type ContextType = {
  countries: Country[];
  isOpenSelector: boolean;
  selectedCountry: Country;
  termOfSearch: string;
  value: string;
  handleOpenSelector: (status?: boolean) => void;
  handleSelectCountry: (country: Country) => void;
  onChangeTermOfSearch: (term: string) => void;
  onChangeValue: (value: string) => void;
};

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
