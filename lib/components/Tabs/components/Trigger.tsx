import * as Tabs from '@radix-ui/react-tabs';
import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { TriggerProps } from '../Tabs.types';
import { triggerVariants } from '../Tabs.variants';

const getVariant = (isActive?: boolean) => {
  if (isActive === undefined) {
    return 'auto';
  }

  return isActive ? 'active' : 'inactive';
};

const Trigger: FC<TriggerProps> = ({ tab, label, isActive, className }) => (
  <Tabs.Trigger
    value={tab}
    className="group/tab rounded-xs outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-500 kubefirst:focus-visible:outline-kubefirst-primary"
  >
    <Typography
      variant="body2"
      component="span"
      className={cn(
        triggerVariants({
          variant: getVariant(isActive),
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
