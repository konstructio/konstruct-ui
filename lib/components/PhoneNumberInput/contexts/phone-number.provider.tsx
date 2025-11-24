import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { PhoneNumberContext } from './phone-number.context';

export const PhoneNumberProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedCountry, setSelectedCuntry] = useState('');

  const handleSelectCountry = useCallback((countryCode: string) => {
    setSelectedCuntry(countryCode);
  }, []);

  return (
    <PhoneNumberContext.Provider
      value={{
        selectedCountry,
        handleSelectCountry,
      }}
    >
      {children}
    </PhoneNumberContext.Provider>
  );
};
