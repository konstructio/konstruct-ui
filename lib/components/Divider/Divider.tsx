import { FC, HTMLAttributes } from 'react';

import { cn } from '@/utils';

import { dividerVariants } from './Divider.variants';

const Divider: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...delegated
}) => <div className={cn(dividerVariants({ className }))} {...delegated} />;

Divider.displayName = 'Divider';

export { Divider };
