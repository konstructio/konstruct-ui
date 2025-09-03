import * as ReactTabs from '@radix-ui/react-tabs';
import { FC } from 'react';

import { cn } from '@/utils';

import { ListProps, TabsProps, TriggerProps } from './Tabs.types';
import { rootVariants } from './Tabs.variants';
import { Content, List, Trigger } from './components';

const Tabs: FC<TabsProps> & {
  List: FC<ListProps>;
  Trigger: FC<TriggerProps>;
  Content: FC<ReactTabs.TabsContentProps>;
} = ({ children, theme, className, orientation, ...rest }) => (
  <ReactTabs.Root
    {...rest}
    data-theme={theme}
    data-orientation={orientation}
    aria-orientation={orientation}
    className={cn(rootVariants({ variant: orientation, className }))}
  >
    {children}
  </ReactTabs.Root>
);

Tabs.displayName = 'KonstructTabs';
Tabs.Content = Content;
Tabs.List = List;
Tabs.Trigger = Trigger;

export { Content, List, Tabs, Trigger };
