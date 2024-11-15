import { PropsWithChildren } from 'react';

export type HeaderProps = PropsWithChildren & {
  asChild?: boolean;
  className?: string;
};
