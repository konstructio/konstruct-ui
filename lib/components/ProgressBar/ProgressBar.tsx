import { FC, useId } from 'react';

import { useTheme } from '../../contexts';

import { ProgressBarProps } from './ProgressBar.types';
import {
  progressBarProgress,
  progressBarVariants,
} from './ProgressBar.variants';

export const ProgressBar: FC<ProgressBarProps> = ({
  label,
  theme,
  percent,
}) => {
  const id = useId();
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  return (
    <div className="w-full">
      <div className="flex justify-between">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <span>{percent}%</span>
      </div>
      <div className={progressBarVariants({ theme: inheritTheme })}>
        <div className={progressBarProgress({ theme: inheritTheme })} />
      </div>
    </div>
  );
};
