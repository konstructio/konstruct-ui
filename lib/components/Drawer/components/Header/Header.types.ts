import { ReactNode } from 'react';

export type Props = {
  /** Content of the header section */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** ID for accessibility (aria-labelledby) */
  id?: string;
};
