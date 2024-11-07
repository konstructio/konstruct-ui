import { PropsWithChildren, ReactNode } from 'react';

export type TooltipProps = PropsWithChildren & {
  content: ReactNode | string;
};
