import { createContext } from 'react';

export type ContextType = {
  countries: string[];
  isOpenSelector: boolean;
  selectedCountry: string;
  handleOpenSelector: (status?: boolean) => void;
  handleSelectCountry: (countryCode: string) => void;
};

export const PhoneNumberContext = createContext<ContextType>({
  countries: [],
  isOpenSelector: false,
  selectedCountry: '',
  handleOpenSelector() {
    throw new Error('handleOpenSelector function is not implemented');
  },
  handleSelectCountry() {
    throw new Error('handleSelectCountry function is not implemented');
  },
});
