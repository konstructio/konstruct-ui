import { cn } from '@/utils';
import { FC } from 'react';

import { Props } from './WrapperBody.types';
import { useTableContext } from '../../contexts';
import { isPaginationBarVisible } from '../../utils';

export const WrapperBody: FC<Props> = ({
  children,
  classNameWrapperTable,
  isLoading,
  showPagination,
}) => {
  const { tableLoading, totalItems = -Infinity } = useTableContext();

  return (
    <div
      className={cn(
        'kvt-wrapper',
        'shadow rounded-t-lg overflow-hidden',
        {
          'rounded-lg':
            !showPagination ||
            !isPaginationBarVisible(totalItems) ||
            tableLoading ||
            isLoading,
        },
        classNameWrapperTable,
      )}
    >
      {children}
    </div>
  );
};
