import { FC, memo } from 'react';

import { cn } from '@/utils';

import { Typography } from '../../../Typography/Typography';

import { Props } from './ButtonGroupMessage.types';

export const ButtonGroupMessage: FC<Props> = memo(
  ({
    error,
    errorClassName,
    errorId,
    helperText,
    helperTextClassName,
    helperTextId,
  }) => {
    const hasError = typeof error === 'string' && error.length > 0;

    if (hasError) {
      return (
        <Typography
          component="span"
          id={errorId}
          className={cn(
            'text-xs',
            'tracking-normal',
            'text-red-400',
            errorClassName,
          )}
        >
          {error}
        </Typography>
      );
    }

    if (helperText) {
      return (
        <Typography
          component="span"
          id={helperTextId}
          variant="body1"
          className={cn(
            'text-xs',
            'text-metal-300',
            'select-none',
            'tracking-normal',
            helperTextClassName,
          )}
        >
          {helperText}
        </Typography>
      );
    }

    return null;
  },
);

ButtonGroupMessage.displayName = 'KonstructButtonGroupMessage';
