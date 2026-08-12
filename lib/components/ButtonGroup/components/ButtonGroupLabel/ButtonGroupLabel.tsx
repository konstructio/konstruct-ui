import { FC, memo } from 'react';

import { cn } from '@/utils';

import { Typography } from '../../../Typography/Typography';

import { Props } from './ButtonGroupLabel.types';

export const ButtonGroupLabel: FC<Props> = memo(
  ({ className, id, isRequired, label, requiredClassName }) => (
    <Typography
      component="span"
      variant="labelLarge"
      id={id}
      className={cn(
        'cursor-pointer',
        'flex',
        'gap-1',
        'text-sm',
        'font-medium',
        'text-metal-50',
        className,
      )}
    >
      {label}{' '}
      {isRequired && (
        <Typography
          component="span"
          aria-hidden="true"
          className={cn(
            'text-red-600',
            'dark:text-red-500',
            'text-xs',
            'mt-0.5',
            requiredClassName,
          )}
        >
          *
        </Typography>
      )}
    </Typography>
  ),
);

ButtonGroupLabel.displayName = 'KonstructButtonGroupLabel';
