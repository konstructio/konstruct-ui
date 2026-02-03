import { FC } from 'react';

import { cn } from '@/utils';

import { useDrawerContext } from '../../contexts';

import { Props } from './Body.types';

export const Body: FC<Props> = ({ children, className }) => {
  const { classNames } = useDrawerContext();

  return (
    <div
      className={cn(
        'flex-1',
        'overflow-y-auto',
        'p-4',
        classNames?.body,
        className,
      )}
    >
      {children}
    </div>
  );
};
