import { useMediaQuery } from '@/hooks/useMediaQuery';

export const FILTER_SHEET_QUERY = '(max-width: 767.98px)';

export const useFilterSheet = (): boolean => useMediaQuery(FILTER_SHEET_QUERY);
