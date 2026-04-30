import { createContext, ReactNode, useContext } from 'react';

export interface NavigationOptionContextValue {
  /**
   * Whether this NavigationOption is rendered in hover-expandable mode
   * (collapsed sidebar with `expandOnHover`). When true, Label children
   * are rendered inside a portaled Radix tooltip and the inline DOM node
   * is replaced by a visually-hidden span (preserves accessible name).
   */
  hasOwnTooltip: boolean;
  /**
   * Allows nested Label components to register their children as the
   * content of the parent NavigationOption tooltip. Effects-only;
   * unregister on unmount by passing `null`.
   */
  registerTooltipContent: (content: ReactNode) => void;
}

export const NavigationOptionContext =
  createContext<NavigationOptionContextValue | null>(null);

export const useNavigationOptionContext =
  (): NavigationOptionContextValue | null =>
    useContext(NavigationOptionContext);
