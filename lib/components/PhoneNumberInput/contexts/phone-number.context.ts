import { createContext } from 'react';

export type ContextType = {
  selectedCountry: string;
  handleSelectCountry: (countryCode: string) => void;
};

export const PhoneNumberContext = createContext<ContextType>({
  selectedCountry: '',
  handleSelectCountry() {
    throw new Error('handleSelectCountry function is not implemented');
  },
});
