import * as ReactTabs from '@radix-ui/react-tabs';
import { FunctionComponent } from 'react';

import { cn } from '@/utils';

import { ListProps, TabsProps, TriggerProps } from './Tabs.types';
import { rootVariants } from './Tabs.variants';
import { Content, List, Trigger } from './components';

const Tabs: FunctionComponent<TabsProps> & {
  List: FunctionComponent<ListProps>;
  Trigger: FunctionComponent<TriggerProps>;
  Content: FunctionComponent<ReactTabs.TabsContentProps>;
} = ({ children, theme, className, orientation, ...rest }) => {
  return (
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
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export { Tabs, List, Trigger, Content };
