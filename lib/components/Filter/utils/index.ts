type LocaleMap = typeof import('country-locale-map');

const DEFAULT_LOCALE = 'en-US';

let localeMap: LocaleMap | undefined;
let localeMapRequest: Promise<void> | undefined;

export const loadLocaleMap = (): Promise<void> => {
  if (!localeMapRequest) {
    localeMapRequest = import('country-locale-map').then((module) => {
      localeMap = module.default;
    });
  }

  return localeMapRequest;
};

export const getLocale = (countryCode: string = 'US'): string => {
  const country = localeMap?.getCountryByAlpha2(countryCode);

  return country?.default_locale?.replace('_', '-') ?? DEFAULT_LOCALE;
};
