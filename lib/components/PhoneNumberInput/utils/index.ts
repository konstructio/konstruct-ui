import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

import { Country } from '../contexts';

const phoneUtil = PhoneNumberUtil.getInstance();

export const getPhoneMask = (country: Country) => {
  const region = country.code;
  const example = phoneUtil.getExampleNumber(region);

  if (!example) {
    return;
  }

  const national = phoneUtil.format(example, PhoneNumberFormat.NATIONAL);
  const callingCode = phoneUtil.getCountryCodeForRegion(region);
  const prefix = `+${callingCode}`;
  const nationalMask = national.replace(/\d/g, '_');

  return `${prefix} ${nationalMask}`;
};
