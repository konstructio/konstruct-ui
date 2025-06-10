import * as Tabs from '@radix-ui/react-tabs';
import { FunctionComponent } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { TriggerProps } from '../Tabs.types';

import { triggerVariants } from '../Tabs.variants';

export const Trigger: FunctionComponent<TriggerProps> = ({
  tab,
  label,
  isActive,
  className,
}) => {
  return (
    <Tabs.Trigger value={tab}>
      <Typography
        variant="body2"
        className={cn(
          triggerVariants({
            variant: isActive ? 'active' : 'inactive',
            className,
          }),
        )}
      >
        {label}
      </Typography>
    </Tabs.Trigger>
  );
};
