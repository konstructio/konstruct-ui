import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './Label.types';

const Label: FC<Props> = ({ children, className, variant = 'body1' }) => {
  const { isCollapsed } = useSidebarContext();

  if (isCollapsed) {
    return null;
  }

  return (
    <Typography variant={variant} className={cn('text-inherit', className)}>
      {children}
    </Typography>
  );
};

Label.displayName = 'KonstructSidebarLabel';

export { Label };
