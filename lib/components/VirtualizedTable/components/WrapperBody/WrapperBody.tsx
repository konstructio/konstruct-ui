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
  const { tableFetching, totalItems = -Infinity } = useTableContext();

  return (
    <div
      className={cn(
        'shadow rounded-t-lg overflow-hidden',
        {
          'rounded-lg':
            !showPagination ||
            !isPaginationBarVisible(totalItems) ||
            tableFetching ||
            isLoading,
        },
        classNameWrapperTable,
      )}
    >
      {children}
    </div>
  );
};
