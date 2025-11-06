import { cn } from '@/utils';
import { FC } from 'react';

import { Props } from './WrapperBody.types';
import { useTableContext } from '../../contexts';

export const WrapperBody: FC<Props> = ({
  children,
  classNameWrapperTable,
  isLoading,
  showPagination,
}) => {
  const { tableFetching } = useTableContext();

  return (
    <div
      className={cn(
        'shadow rounded-t-lg',
        {
          'overflow-hidden rounded-lg':
            !showPagination || tableFetching || isLoading,
        },
        classNameWrapperTable,
      )}
    >
      {children}
    </div>
  );
};
