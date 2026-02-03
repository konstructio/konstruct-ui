import { Check } from 'lucide-react';
import { memo, type FC } from 'react';

import { ExclamationIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { CHECK_ICON_SIZE_MAP, ICON_SIZE_MAP } from '../../constants';

import type { Props } from './StepIndicatorContent.types';

const StepIndicatorContentBase: FC<Props> = ({
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
    return (
      <Check
        className={cn(CHECK_ICON_SIZE_MAP[size], className)}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    );
  }

  if (status === 'error') {
    if (icons?.error) {
      return <span className={className}>{icons.error}</span>;
    }
    return <ExclamationIcon size={ICON_SIZE_MAP[size]} className={className} />;
  }

  return (
    <span className={className} aria-hidden="true">
      {index + 1}
    </span>
  );
};

export const StepIndicatorContent = memo(StepIndicatorContentBase);
