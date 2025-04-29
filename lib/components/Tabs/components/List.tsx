import * as ReactTabs from '@radix-ui/react-tabs';
import { FunctionComponent } from 'react';
import { ListProps } from '../Tabs.types';
import { listVariants } from '../Tabs.variants';
import { cn } from '@/utils';

export const List: FunctionComponent<ListProps> = ({
  children,
  className,
  orientation,
  ...rest
}) => {
  return (
    <div className={cn(listVariants({ variant: 'default' }))}>
      <ReactTabs.List
        className={cn(listVariants({ variant: orientation, className }))}
        {...rest}
      >
        {children}
      </ReactTabs.List>
    </div>
  );
};
