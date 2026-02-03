import { FC, memo } from 'react';

import { cn } from '@/utils';

import { useDrawerContext } from '../../contexts';

import { Props } from './Footer.types';

export const Footer: FC<Props> = memo(({ children, className }) => {
  const { classNames } = useDrawerContext();

  return (
    <div
      className={cn(
        'flex-shrink-0',
        'border-t',
        'border-slate-200',
        'dark:border-metal-700',
        'p-4',
        classNames?.footer,
        className,
      )}
    >
      {children}
    </div>
  );
});

Footer.displayName = 'Drawer.Footer';
