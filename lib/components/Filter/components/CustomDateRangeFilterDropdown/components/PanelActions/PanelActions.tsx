import { FC } from 'react';

import { Button } from '@/components/Button/Button';

import { cn } from '@/utils';

import { useCustomDateRangeFilterDropdown } from '../../contexts';

import { Props } from './PanelActions.types';

export const PanelActions: FC<Props> = ({ isSheet = false }) => {
  const { hasPendingSelection, labelApply, labelReset, onApply, onClear } =
    useCustomDateRangeFilterDropdown();

  return (
    <div className={cn('flex w-full justify-end', isSheet ? 'gap-2' : 'gap-4')}>
      <Button
        variant="secondary"
        appearance="compact"
        className={cn(isSheet && 'h-11! flex-1')}
        onClick={onClear}
      >
        {labelReset}
      </Button>
      <Button
        appearance="compact"
        className={cn(isSheet && 'h-11! flex-1')}
        disabled={!hasPendingSelection}
        onClick={onApply}
      >
        {labelApply}
      </Button>
    </div>
  );
};
