import { useContext } from 'react';

import { FilterContext } from '@/components/Filter/contexts/filter.context';
import { useMediaQuery } from '@/hooks/useMediaQuery/useMediaQuery';

import { FILTER_SHEET_QUERY } from './constants';

export const useFilterSheet = (): boolean => {
  const { mobileSheet = true } = useContext(FilterContext);
  const isPhone = useMediaQuery(FILTER_SHEET_QUERY);

  return mobileSheet && isPhone;
};
