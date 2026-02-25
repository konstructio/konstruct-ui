import type { FC } from 'react';

import { cn } from '@/utils';

import type { ProgressBarProps } from './ProgressBar.types';
import {
  progressBarFillVariants,
  progressBarTrackVariants,
} from './ProgressBar.variants';

export const ProgressBar: FC<ProgressBarProps> = ({
  className,
  fillClassName,
  leftContent,
  percent,
  rightContent,
  status,
  theme,
  trackClassName,
}) => {
  const clampedPercent = Math.min(Math.max(percent, 0), 100);
  const hasHeader = leftContent || rightContent;

  return (
    <div
      className={cn('flex flex-col gap-1 w-full', className)}
      data-theme={theme}
    >
      {hasHeader && (
        <div className="flex items-center justify-between">
          {leftContent && (
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              {leftContent}
            </div>
          )}
          {rightContent && (
            <div className="text-right shrink-0">{rightContent}</div>
          )}
        </div>
      )}

      <div className={progressBarTrackVariants({ className: trackClassName })}>
        <div
          className={progressBarFillVariants({
            status: fillClassName ? null : status,
            className: fillClassName,
          })}
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
    </div>
  );
};
