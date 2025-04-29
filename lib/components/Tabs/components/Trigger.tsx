import { Typography } from '@/components/Typography/Typography';
import * as Tabs from '@radix-ui/react-tabs';
import { FunctionComponent } from 'react';
import { TriggerProps } from '../Tabs.types';

import { cn } from '@/utils';

import { triggerVariants } from '../Tabs.variants';

const Trigger: FunctionComponent<TriggerProps> = ({
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

export default Trigger;
