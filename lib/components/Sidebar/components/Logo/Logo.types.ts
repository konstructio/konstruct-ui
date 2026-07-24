import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { logoVariants } from './Logo.variants';

export interface Props
  extends PropsWithChildren, VariantProps<typeof logoVariants> {
  className?: string;
  /**
   * When true, hides the logo content while the sidebar is in `collapsed`
   * mode. A `Sidebar.CollapseTrigger` placed as a direct child of
   * `Sidebar.Logo` stays visible so the user can still expand the sidebar.
   * Pass `false` to keep the logo content visible in collapsed mode.
   * Defaults to `true`.
   */
  hideOnCollapse?: boolean;
}

/** @deprecated Use Props instead */
export type LogoProps = Props;
