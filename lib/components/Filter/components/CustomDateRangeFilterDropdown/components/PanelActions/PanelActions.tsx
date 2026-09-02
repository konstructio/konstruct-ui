import { FC } from 'react';

import { Button } from '@/components/Button/Button';

import { useCustomDateRangeFilterDropdown } from '../../contexts';

export const PanelActions: FC = () => {
  const { canApply, labelApply, labelReset, onApply, onClear } =
    useCustomDateRangeFilterDropdown();

  return (
    <div className="flex w-full justify-end gap-4">
      <Button variant="secondary" appearance="compact" onClick={onClear}>
        {labelReset}
      </Button>
      <Button appearance="compact" disabled={!canApply} onClick={onApply}>
        {labelApply}
      </Button>
    </div>
  );
};
