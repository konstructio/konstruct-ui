import { ReactNode } from 'react';

export type TagProps = {
  color?:
    | 'gray'
    | 'gray-800'
    | 'cyan'
    | 'gold'
    | 'green'
    | 'light blue'
    | 'lime'
    | 'pink'
    | 'purple'
    | 'emerald'
    | 'fuscia'
    | 'indigo'
    | 'light-orange'
    | 'dark-sky-blue'
    | 'mistery';
  id: string | number;
  label: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  'data-value'?: string;
  isSelected?: boolean;
};
