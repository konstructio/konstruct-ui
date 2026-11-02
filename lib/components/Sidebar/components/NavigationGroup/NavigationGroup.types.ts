import { VariantProps } from 'class-variance-authority';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

import { navigationGroupsVariants } from './NavigationGroup.variants';

export interface Props
  extends
    PropsWithChildren,
    VariantProps<typeof navigationGroupsVariants>,
    Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  title?: string;
  titleClassName?: string;
  isVisible?: boolean;
  /**
   * Turns the title into a button that shows or hides the group's options.
   * Needs a `title`. In the collapsed rail titles are hidden, so every
   * option stays visible there whatever the open state.
   */
  isCollapsible?: boolean;
  /** Controlled open state of a collapsible group. */
  isOpen?: boolean;
  /** Initial open state of an uncontrolled collapsible group. */
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

/** @deprecated Use Props instead */
export type NavigationGroupProps = Props;
