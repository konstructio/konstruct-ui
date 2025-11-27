import { countries, hasFlag } from 'country-flag-icons';
import { PhoneNumberUtil, RegionCode } from 'google-libphonenumber';
import isoCountries from 'i18n-iso-countries';
import * as flags from 'country-flag-icons/react/3x2';
import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { Country, PhoneNumberContext } from './phone-number.context';

const phoneUtil = PhoneNumberUtil.getInstance();

type Props = PropsWithChildren & {
  defaultCountryCode: string;
};

export const PhoneNumberProvider: FC<Props> = ({
  defaultCountryCode,
  children,
}) => {
  const countriesList = useMemo(
    () =>
      countries
        .filter((code) => hasFlag(code) && isoCountries.getName(code, 'en'))
        .map((code) => {
          const currentCode = code as RegionCode;
          const Flag = flags[currentCode];

          return {
            code: currentCode,
            flag: () => <Flag className="w-5 h-5 flex items-center" />,
            name: isoCountries.getName(code, 'en') || code,
            prefix: `+${phoneUtil.getCountryCodeForRegion(code)}`,
          };
        }),
    [],
  );
  const [selectedCountry, setSelectedCuntry] = useState<Country>(
    () => countriesList.find(({ code }) => code === defaultCountryCode)!,
  );

  const [value, setValue] = useState<string>(() => {
    const country = countriesList.find(
      ({ code }) => code === defaultCountryCode,
    )!;

    return `${country.prefix} `;
  });

  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const [termOfSearch, setTermOfSearch] = useState('');

  const handleOpenSelector = useCallback((status?: boolean) => {
    setIsOpenSelector((prevStatus) => {
      const newStatus = status ?? !prevStatus;

      if (!newStatus) {
        setTermOfSearch('');
      }

      return newStatus;
    });
  }, []);

  const handleSelectCountry = useCallback((country: Country) => {
    setSelectedCuntry(country);
    setIsOpenSelector(false);
    setTermOfSearch('');
  }, []);

  const handleChangeTermOfSearch = useCallback((term: string) => {
    setTermOfSearch(term);
  }, []);

  const handleChangeValue = useCallback((value: string) => {
    setValue(value);
    setIsOpenSelector(false);
  }, []);

  return (
    <PhoneNumberContext.Provider
      value={{
        value,
        countries: countriesList,
        isOpenSelector,
        selectedCountry,
        termOfSearch,
        handleOpenSelector,
        handleSelectCountry,
        onChangeTermOfSearch: handleChangeTermOfSearch,
        onChangeValue: handleChangeValue,
      }}
    >
      {children}
    </PhoneNumberContext.Provider>
  );
};
