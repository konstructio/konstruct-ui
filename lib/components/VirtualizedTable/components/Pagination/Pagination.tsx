import { FC } from 'react';

import { DEFAULT_PAGE_SIZE } from '../../constants';
import { useTableContext } from '../../contexts';

import { DotPaginate } from '../DotPaginate/DotPaginate';
import { DropdownPaginate } from '../DropdownPaginate/DropdownPaginate';
import { FormPaginate } from '../FormPaginate/FormPaginate';

import { Props } from './Pagination.types';
import { cn } from '@/utils';

export const Pagination: FC<Props> = ({
  showTotalItems = true,
  showDropdownPagination = true,
  showDotPagination = true,
  showFormPagination = true,
  pageSizes,
  classNamePagination,
  isLoading,
}) => {
  const {
    totalItems = -Infinity,
    tableFetching,
    isFirstLoad,
  } = useTableContext();

  if (totalItems <= DEFAULT_PAGE_SIZE || tableFetching || isLoading) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          'bg-slate-50',
          'border',
          'border-y-transparent',
          'border-x-slate-100',
          'text-slate-500',
          'text-xs',
          'not-italic',
          'py-2',
          'px-6',
          'rounded-b-lg',
          'shadow',
          'dark:bg-metal-800',
          'dark:border-x-metal-700',
          'dark:border-b-metal-700',
          classNamePagination,
          {
            'animate-in fade-in-10': !isFirstLoad,
          },
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {totalItems && showTotalItems ? (
              <span className="text-slate-800 dark:text-metal-300">
                {totalItems} Results
              </span>
            ) : null}

            {showDropdownPagination && (
              <div className="flex items-center gap-2">
                <DropdownPaginate pageSizes={pageSizes} />
              </div>
            )}
          </div>

          <div className="flex items-center gap-8">
            {showDotPagination && <DotPaginate />}
            {showFormPagination && <FormPaginate />}
          </div>
        </div>
      </div>
      <div className="w-full min-h-[150px]"></div>
    </>
  );
};
