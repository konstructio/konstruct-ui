import { useMemo } from 'react';

import { useLocale } from '../../../../hooks';

import { Props } from './useFormattedDateRange.types';

export const useFormattedDateRange = ({ range, countryCode = 'US' }: Props) => {
  const locale = useLocale(countryCode);

  return useMemo(() => {
    if (!range?.from) {
      return { appliedRangeLabel: undefined, appliedRangeEnds: undefined };
    }

    const formatShort = (date: Date) => {
      return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'short',
      });
    };

    const formatFull = (date: Date) => {
      const month = date.toLocaleDateString(locale, { month: 'short' });

      return `${date.getDate()} ${month} ${date.getFullYear()}`;
    };

    const appliedRangeLabel = range.to
      ? `${formatShort(range.from)} - ${formatShort(range.to)}`
      : formatShort(range.from);

    const appliedRangeEnds = {
      from: formatFull(range.from),
      to: range.to && formatFull(range.to),
    };

    return { appliedRangeLabel, appliedRangeEnds };
  }, [range, locale]);
};
