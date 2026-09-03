import { FC } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { useFilterContext } from '../../contexts';
import { resetEvent } from '../../events';

import { Props } from './ResetButton.types';

export const ResetButton: FC<Props> = ({
  disabled,
  className,
  onClick,
  ...delegated
}) => {
  const { resetScope } = useFilterContext();

  const handleClick = () => {
    resetEvent(resetScope);
    onClick?.();
  };

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
