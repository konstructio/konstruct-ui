import { FC, useCallback } from 'react';

import { Button } from '@/components/Button/Button';

import { resetEvent } from '../../events';

import { ResetButtonProps } from './ResetButton.types';

export const ResetButton: FC<ResetButtonProps> = ({ disabled, onClick }) => {
  const handleClick = useCallback(() => {
    resetEvent();
    onClick?.();
  }, [onClick]);

  return (
    <Button
      type="button"
      variant="text"
      appearance="compact"
      version="alternate"
      onClick={handleClick}
      disabled={disabled}
    >
      Reset
    </Button>
  );
};
