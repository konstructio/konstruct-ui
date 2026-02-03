import { ReactNode } from 'react';

export type Props = {
  className?: string;
  htmlFor: string;
  isRequired?: boolean;
  label: ReactNode | string;
  requiredClassName?: string;
};
