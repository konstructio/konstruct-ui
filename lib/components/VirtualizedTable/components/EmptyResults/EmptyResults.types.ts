import { ReactNode } from 'react';

export type Props = {
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
  resetLabel?: ReactNode;
  title?: ReactNode;
  onResetFilters?: () => void;
};
