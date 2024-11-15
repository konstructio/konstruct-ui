import { PropsWithChildren } from 'react';

export type BodyProps = PropsWithChildren & {
  asChild?: boolean;
  className?: string;
};
