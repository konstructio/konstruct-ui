import { hasFlag, countries } from 'country-flag-icons';
import isoCountries from 'i18n-iso-countries';
import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { PhoneNumberContext } from './phone-number.context';

type Props = PropsWithChildren & {
  defaultCountryCode: string;
};

export const PhoneNumberProvider: FC<Props> = ({
  defaultCountryCode,
  children,
}) => {
  const [selectedCountry, setSelectedCuntry] = useState(defaultCountryCode);
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const countriesList = useMemo(
    () =>
      countries.filter(
        (code) => hasFlag(code) && isoCountries.getName(code, 'en'),
      ),
    [],
  );

  const handleOpenSelector = useCallback((status?: boolean) => {
    setIsOpenSelector((prevStatus) => status ?? !prevStatus);
  }, []);

  const handleSelectCountry = useCallback((countryCode: string) => {
    setSelectedCuntry(countryCode);
  }, []);

  return (
    <PhoneNumberContext.Provider
      value={{
        countries: countriesList,
        isOpenSelector,
        selectedCountry,
        handleSelectCountry,
        handleOpenSelector,
      }}
    >
      {children}
    </PhoneNumberContext.Provider>
  );
};
