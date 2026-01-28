import { FC } from '../../../node_modules/react';
import { ListProps, TabsProps, TriggerProps } from './Tabs.types';
import { Content, List, Trigger } from './components';
import * as ReactTabs from '@radix-ui/react-tabs';
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
declare const Tabs: FC<TabsProps> & {
    List: FC<ListProps>;
    Trigger: FC<TriggerProps>;
    Content: FC<ReactTabs.TabsContentProps>;
};
export { Content, List, Tabs, Trigger };
