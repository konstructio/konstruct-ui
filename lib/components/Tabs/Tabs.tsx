import * as ReactTabs from '@radix-ui/react-tabs';
import { FunctionComponent } from 'react';
import { ListProps, TriggerProps, TabsProps } from './Tabs.types';
import { List } from './components/List';
import Trigger from './components/Trigger';
import { Content } from './components/Content';
import { rootVariants } from './Tabs.variants';
import { cn } from '@/utils';

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

export default Tabs;
