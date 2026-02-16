import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren & {
  asChild?: boolean;
  className?: string;
};
