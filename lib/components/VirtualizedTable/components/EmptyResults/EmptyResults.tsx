import { FC } from 'react';

import { Button } from '@/components/Button/Button';

import { useTableContext } from '../../contexts';
import { sendResetFiltersEvent } from '../../events';
import { EmptyState } from '../EmptyState/EmptyState';

import { Props } from './EmptyResults.types';

export const EmptyResults: FC<Props> = ({
  className,
  description = 'Filters may be too restrictive.',
  image,
  resetLabel = 'Reset filters',
  title = 'No results',
  onResetFilters,
}) => {
  const { tableId } = useTableContext();

  const handleReset = () => {
    if (onResetFilters) {
      onResetFilters();

      return;
    }

    sendResetFiltersEvent(tableId);
  };

  return (
    <EmptyState
      className={className}
      image={image}
      title={title}
      description={
        <>
          {description}
          <Button
            variant="link"
            appearance="compact"
            className="p-0"
            onClick={handleReset}
          >
            {resetLabel}
          </Button>
        </>
      }
    />
  );
};

EmptyResults.displayName = 'KonstructVirtualizedTableEmptyResults';
