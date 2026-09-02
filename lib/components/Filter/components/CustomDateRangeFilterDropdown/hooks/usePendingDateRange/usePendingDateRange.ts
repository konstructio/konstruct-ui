import { useMemo } from 'react';

import { Props } from './usePendingDateRange.types';

const sameInstant = (a?: Date, b?: Date) => {
  return (a?.getTime() ?? null) === (b?.getTime() ?? null);
};

export const usePendingDateRange = ({ selectedRange, appliedRange }: Props) => {
  const canApply = Boolean(selectedRange?.from || selectedRange?.to);

  const hasPendingSelection = useMemo(() => {
    if (!canApply) {
      return false;
    }

    return (
      !sameInstant(selectedRange?.from, appliedRange?.from) ||
      !sameInstant(selectedRange?.to, appliedRange?.to)
    );
  }, [canApply, selectedRange, appliedRange]);

  return { canApply, hasPendingSelection };
};
