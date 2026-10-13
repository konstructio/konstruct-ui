import * as ReactTabs from '@radix-ui/react-tabs';

import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ReactNode } from 'react';
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
export type TabItem = {
  content: ReactNode;
  contentClassName?: string;
  label: string;
  triggerClassName?: string;
  value: string;
};

export interface Props extends ReactTabs.TabsProps, PropsWithChildren {
  /** Declarative tabs: renders the list, triggers and contents; falls back to the first item when the active one disappears */
  items?: TabItem[];
  /** Additional className for the generated Tabs.List when using `items` */
  listClassName?: string;
  /** Theme override for this component */
  theme?: Theme;
}

/** @deprecated Use Props instead */
export type TabsProps = Props;

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
  /** Whether this tab is active; derived from the Tabs state when omitted */
  isActive?: boolean;
}

/**
 * Props for Tabs.List component.
 */
export interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  /** Tab list orientation */
  orientation: 'horizontal' | 'vertical';
}
