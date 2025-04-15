import type { FC } from 'react';

import { cn } from '@/utils';

import type { ProgressBarProps } from './ProgressBar.types';
import {
  progressBarProgress,
  progressBarVariants,
} from './ProgressBar.variants';

export const ProgressBar: FC<ProgressBarProps> = ({
  label,
  theme,
  percent,
  status,
}) => (
  <div className="w-full" data-theme={theme}>
    <div className={cn('flex', label ? 'justify-between' : 'justify-end')}>
      {label ? <label className="font-semibold">{label}</label> : null}
      <span className="font-semibold">{percent}%</span>
    </div>

    <div className={cn(progressBarVariants())}>
      <div
        className={cn(
          progressBarProgress({ status }),
          percent > 0 && percent < 99
            ? 'transition-width duration-500'
            : 'transition-colors duration-0',
        )}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);
