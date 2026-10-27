import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren & {
  className?: string;
  /** Hides the native scrollbar and draws one under the scrolling columns only. */
  hasPinnedColumns?: boolean;
};
