import { FC } from 'react';

import { AlertOutlineIcon } from '@/assets/icons/components';
import { Button } from '@/components/Button/Button';

import { useTableContext } from '../../contexts';
import { sendRefreshEvent } from '../../events';
import { EmptyState } from '../EmptyState/EmptyState';

import { Props } from './ErrorState.types';

export const ErrorState: FC<Props> = ({
  className,
  description,
  icon = (
    <AlertOutlineIcon
      size={40}
      className="text-red-600 dark:text-red-400"
      aria-hidden="true"
    />
  ),
  retryLabel = 'Refresh',
  title = 'Something went wrong',
  onRetry,
}) => {
  const { tableId } = useTableContext();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();

      return;
    }

    sendRefreshEvent(tableId);
  };

  return (
    <EmptyState
      className={className}
      image={icon}
      title={title}
      description={
        <>
          {description}
          <Button
            variant="link"
            appearance="compact"
            className="p-0"
            onClick={handleRetry}
          >
            {retryLabel}
          </Button>
        </>
      }
    />
  );
};

ErrorState.displayName = 'KonstructVirtualizedTableErrorState';
