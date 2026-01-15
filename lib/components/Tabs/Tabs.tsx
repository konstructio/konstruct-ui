import * as ReactTabs from '@radix-ui/react-tabs';
import { FC } from 'react';

import { cn } from '@/utils';

import { ListProps, TabsProps, TriggerProps } from './Tabs.types';
import { rootVariants } from './Tabs.variants';
import { Content, List, Trigger } from './components';

/**
 * A tabs component built on Radix UI primitives.
 * Supports horizontal and vertical orientations with List, Trigger, and Content sub-components.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="overview">
 *   <Tabs.List orientation="horizontal">
 *     <Tabs.Trigger tab="overview" label="Overview" isActive />
 *     <Tabs.Trigger tab="settings" label="Settings" isActive={false} />
 *     <Tabs.Trigger tab="billing" label="Billing" isActive={false} />
 *   </Tabs.List>
 *
 *   <Tabs.Content value="overview">
 *     Overview content here
 *   </Tabs.Content>
 *   <Tabs.Content value="settings">
 *     Settings content here
 *   </Tabs.Content>
 *   <Tabs.Content value="billing">
 *     Billing content here
 *   </Tabs.Content>
 * </Tabs>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tabs--docs Storybook}
 */
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
