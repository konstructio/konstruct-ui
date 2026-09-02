import { useMemo } from 'react';

import { getLocale } from '../../../../utils';

import { Props } from './useFormattedDateRange.types';

export const useFormattedDateRange = ({ range, countryCode = 'US' }: Props) => {
  return useMemo(() => {
    if (!range?.from) {
      return undefined;
    }

    const formatDate = (date: Date) => {
      return date.toLocaleDateString(getLocale(countryCode), {
        day: 'numeric',
        month: 'short',
      });
    };

    if (range.to) {
      return `${formatDate(range.from)} - ${formatDate(range.to)}`;
    }

    return formatDate(range.from);
  }, [range, countryCode]);
};
