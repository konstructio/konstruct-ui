import { useMemo } from 'react';

import { FALLBACK_FORMAT_OPTIONS } from '../../constants';

import { UseNumberFormatterOptions } from './useNumberFormatter.types';

export const useNumberFormatter = ({
  currency,
  format,
  formatOptions,
  locale,
}: UseNumberFormatterOptions): ((value: number) => string) => {
  return useMemo(() => {
    if (format) {
      return format;
    }

    const currencyOptions: Intl.NumberFormatOptions = currency
      ? { style: 'currency', currency, currencyDisplay: 'narrowSymbol' }
      : {};

    try {
      const formatter = new Intl.NumberFormat(locale, {
        ...currencyOptions,
        ...formatOptions,
      });

      return (value: number) => {
        return formatter.format(value);
      };
    } catch {
      const fallback = new Intl.NumberFormat(locale, FALLBACK_FORMAT_OPTIONS);

      return (value: number) => {
        return [currency, fallback.format(value)].filter(Boolean).join(' ');
      };
    }
  }, [format, locale, currency, formatOptions]);
};
