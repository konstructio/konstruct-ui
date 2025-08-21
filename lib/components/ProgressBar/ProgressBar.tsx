import type { FC } from 'react';

import { cn } from '@/utils';

import type { ProgressBarProps } from './ProgressBar.types';
import {
  progressBarProgress,
  progressBarVariants,
} from './ProgressBar.variants';

export const ProgressBar: FC<ProgressBarProps> = ({
  backgroundBarClassName,
  label,
  labelClassName,
  labelWrapperClassName,
  percent,
  percentClassName,
  progressBarClassName,
  status,
  theme,
  wrapperClassName,
}) => (
  <div
    className={cn('w-full text-inherit', wrapperClassName)}
    data-theme={theme}
  >
    <div
      className={cn(
        'flex font-semibold',
        {
          'justify-between': label,
          'justify-end': !label,
        },
        labelWrapperClassName,
      )}
    >
      {label ? <label className={cn(labelClassName)}>{label}</label> : null}
      <span className={cn(percentClassName)}>{percent}%</span>
    </div>

    <div
      className={cn(progressBarVariants({ className: backgroundBarClassName }))}
    >
      <div
        className={cn(
          progressBarProgress({ status, className: progressBarClassName }),
          percent > 0 && percent < 99
            ? 'transition-width duration-500'
            : 'transition-colors duration-0',
        )}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);
