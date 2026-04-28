import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './Label.types';

const Label: FC<Props> = ({ children, className, variant = 'body1' }) => {
  const { isCollapsed, expandOnHover, animateOnHover } = useSidebarContext();

  if (isCollapsed && !expandOnHover) {
    return null;
  }

  if (isCollapsed && expandOnHover) {
    return (
      <Typography
        variant={variant}
        className={cn(
          'text-inherit',
          'absolute top-1/2 -translate-y-1/2 left-full ml-2',
          'overflow-hidden whitespace-nowrap',
          'rounded-r-xl bg-kubefirst-dark-blue-900 py-2 px-3',
          'shadow-lg',
          'max-w-0 opacity-0 invisible',
          'group-hover/sidebar-option:max-w-48 group-hover/sidebar-option:opacity-100 group-hover/sidebar-option:visible',
          animateOnHover &&
            'transition-[max-width,opacity] duration-200 ease-out',
          className,
        )}
      >
        {children}
      </Typography>
    );
  }

  return (
    <Typography variant={variant} className={cn('text-inherit', className)}>
      {children}
    </Typography>
  );
};

Label.displayName = 'KonstructSidebarLabel';

export { Label };
