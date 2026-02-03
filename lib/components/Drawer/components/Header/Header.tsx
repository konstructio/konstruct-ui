import { FC, memo } from 'react';

import { cn } from '@/utils';

import { useDrawerContext } from '../../contexts';

import { Props } from './Header.types';

export const Header: FC<Props> = memo(({ children, className, id }) => {
  const { classNames, headerId } = useDrawerContext();

  return (
    <div
      id={id ?? headerId}
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
});

Header.displayName = 'Drawer.Header';
