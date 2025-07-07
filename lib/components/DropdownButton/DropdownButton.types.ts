import { ReactNode } from 'react';

export type Option = {
  label: string | ReactNode;
  onClick?: VoidFunction;
};

export type Props = {
  buttonClassName?: string;
  className?: string;
  itemClassName?: string;
  listClassName?: string;
  options: Option[];
};
