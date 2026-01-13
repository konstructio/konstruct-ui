import { FC, useCallback } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { resetEvent } from '../../events';

import { ResetButtonProps } from './ResetButton.types';

export const ResetButton: FC<ResetButtonProps> = ({
  disabled,
  className,
  onClick,
  ...delegated
}) => {
  const handleClick = useCallback(() => {
    resetEvent();
    onClick?.();
  }, [onClick]);

  return (
    <Button
      type="button"
      variant="link"
      appearance="compact"
      version="alternate"
      onClick={handleClick}
      disabled={disabled}
      className={cn('hover:no-underline', className)}
      {...delegated}
    >
      Reset
    </Button>
  );
};
