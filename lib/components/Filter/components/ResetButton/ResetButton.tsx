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
      className={cn(
        'text-aurora-500',
        'hover:text-slate-700',
        'disabled:text-aurora-500/60',
        'bg-transparent',
        'hover:bg-transparent',
        'hover:text-aurora-500',
        'border-transparent',
        'dark:hover:text-aurora-500',
        'dark:hover:bg-aurora-900',
        className,
      )}
      {...delegated}
    >
      Reset
    </Button>
  );
};
