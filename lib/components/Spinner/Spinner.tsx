import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import spinnerSvgUrl from './assets/spinner.svg?url';
import { SpinnerProps } from './Spinner.types';
import { spinnerIconVariants, spinnerVariants } from './Spinner.variants';

const Spinner: FC<SpinnerProps> = ({
  className,
  spinnerClassName,
  textClassName,
  textVariant = 'subtitle2',
  text,
  srLabel = 'Loading',
  theme,
  size,
  ...delegated
}) => (
  <div
    role="status"
    aria-label="Loading"
    data-theme={theme}
    className={cn(spinnerVariants({ size, className }))}
    {...delegated}
  >
    <span
      aria-hidden="true"
      className={cn(spinnerIconVariants({ size }), spinnerClassName)}
      style={{
        maskImage: `url("${spinnerSvgUrl}")`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url("${spinnerSvgUrl}")`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }}
    />

    {text && (
      <Typography
        variant={textVariant}
        className={cn('text-slate-700 dark:text-slate-200', textClassName)}
      >
        {text}
      </Typography>
    )}

    <VisuallyHidden>{srLabel}</VisuallyHidden>
  </div>
);

Spinner.displayName = 'KonstructSpinner';

export { Spinner };
