import { DEFAULT_PAGE_SIZE } from '../constants';

export const isPaginationBarVisible = (totalItems: number) => {
  return totalItems > DEFAULT_PAGE_SIZE;
};
