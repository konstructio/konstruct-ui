import * as ReactTabs from '@radix-ui/react-tabs';

import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { triggerVariants } from './Tabs.variants';
import { Theme } from '@/domain/theme';

/**
 * Props for the Tabs component.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <Tabs.List orientation="horizontal">
 *     <Tabs.Trigger tab="tab1" label="Tab 1" isActive />
 *     <Tabs.Trigger tab="tab2" label="Tab 2" isActive={false} />
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">Content 1</Tabs.Content>
 *   <Tabs.Content value="tab2">Content 2</Tabs.Content>
 * </Tabs>
 * ```
 */
export interface TabsProps extends ReactTabs.TabsProps, PropsWithChildren {
  /** Theme override for this component */
  theme?: Theme;
}

/**
 * Props for Tabs.Trigger component.
 */
export interface TriggerProps
  extends
    VariantProps<typeof triggerVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  /** Tab value identifier */
  tab: string;
  /** Display label for the tab */
  label: string;
  /** Whether this tab is active */
  isActive: boolean;
}

/**
 * Props for Tabs.List component.
 */
export interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  /** Tab list orientation */
  orientation: 'horizontal' | 'vertical';
}
