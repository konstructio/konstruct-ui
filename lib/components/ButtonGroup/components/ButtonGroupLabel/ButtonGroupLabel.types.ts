import { ReactNode } from 'react';

export type Props = {
  className?: string;
  id: string;
  isRequired?: boolean;
  label: ReactNode | string;
  requiredClassName?: string;
};
