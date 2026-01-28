import clm from 'country-locale-map';

export const getLocale = (countryCode: string = 'US'): string => {
  const country = clm.getCountryByAlpha2(countryCode);

  return country?.default_locale?.replace('_', '-') ?? 'en-US';
};
