import * as ReactTabs from '@radix-ui/react-tabs';
import { FC } from 'react';

import { cn } from '@/utils';

import { ListProps } from '../Tabs.types';
import { listVariants } from '../Tabs.variants';

const List: FC<ListProps> = ({
  children,
  className,
  orientation,
  ...delegated
}) => (
  <div className={cn(listVariants({ variant: 'default' }))}>
    <ReactTabs.List
      className={cn(listVariants({ variant: orientation, className }))}
      {...delegated}
    >
      {children}
    </ReactTabs.List>
  </div>
);

List.displayName = 'KonstructTabsList';

export { List };
