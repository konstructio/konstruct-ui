import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  /** Additional CSS classes for the animated wrapper */
  className?: string;
  /** Margin applied while collapsed, so the closed state does not leave a gap */
  collapsedMarginTop?: number | string;
  /** Id of the animated region, to reference it from `aria-controls` */
  id?: string;
  /** Whether the content is expanded */
  isOpen: boolean;
  /** Keep the children mounted while collapsed (hidden and inert) instead of unmounting them */
  keepMounted?: boolean;
  /** Fired once the collapse animation has finished and the children are unmounted */
  onExitComplete?: () => void;
};

export type CollapseProps = Props;
