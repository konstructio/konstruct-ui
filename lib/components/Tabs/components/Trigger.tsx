import * as Tabs from '@radix-ui/react-tabs';
import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { TriggerProps } from '../Tabs.types';
import { triggerVariants } from '../Tabs.variants';

const Trigger: FC<TriggerProps> = ({ tab, label, isActive, className }) => (
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

Trigger.displayName = 'KonstructTabsTrigger';

export { Trigger };
