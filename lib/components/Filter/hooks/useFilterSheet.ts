import { useContext } from 'react';

import { FilterContext } from '@/components/Filter/contexts/filter.context';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const FILTER_SHEET_QUERY = '(max-width: 767.98px)';

export const useFilterSheet = (): boolean => {
  const { mobileSheet = true } = useContext(FilterContext);
  const isPhone = useMediaQuery(FILTER_SHEET_QUERY);

  return mobileSheet && isPhone;
};
