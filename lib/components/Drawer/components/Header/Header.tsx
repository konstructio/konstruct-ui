import { FC } from 'react';

import { cn } from '@/utils';

import { useDrawerContext } from '../../contexts';

import { Props } from './Header.types';

export const Header: FC<Props> = ({ children, className }) => {
  const { classNames } = useDrawerContext();

  return (
    <div
      className={cn(
        'flex-shrink-0',
        'border-b',
        'border-slate-200',
        'dark:border-metal-700',
        'p-4',
        classNames?.header,
        className,
      )}
    >
      {children}
    </div>
  );
};
