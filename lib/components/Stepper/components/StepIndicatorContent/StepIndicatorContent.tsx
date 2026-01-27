import { Check } from 'lucide-react';
import type { FC } from 'react';

import { ExclamationIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import type { Props } from './StepIndicatorContent.types';

export const StepIndicatorContent: FC<Props> = ({
  className,
  icons,
  index,
  size,
  status,
}) => {
  if (status === 'completed') {
    if (icons?.completed) {
      return <span className={className}>{icons.completed}</span>;
    }
    const checkSizeMap = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-6 w-6',
    };
    return (
      <Check
        className={cn(checkSizeMap[size], className)}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    );
  }

  if (status === 'error') {
    if (icons?.error) {
      return <span className={className}>{icons.error}</span>;
    }
    const iconSizeMap = {
      sm: 'sm' as const,
      md: 'md' as const,
      lg: 'lg' as const,
    };
    return <ExclamationIcon size={iconSizeMap[size]} className={className} />;
  }

  return (
    <span className={className} aria-hidden="true">
      {index + 1}
    </span>
  );
};
