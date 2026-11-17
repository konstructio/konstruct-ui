import type { RegionCode } from 'google-libphonenumber';
import type { FC, PropsWithChildren } from 'react';

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

export type Props = PropsWithChildren & {
  defaultCountryCode: string;
};
