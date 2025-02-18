import { Slot } from '@radix-ui/react-slot';
import { FC } from 'react';

import { cn } from '@/utils';

import { TagProps } from './Tag.types';
import { tagVariants } from './Tag.variants';

export const Tag: FC<TagProps> = ({
  label,
  color,
  rightIcon,
  leftIcon,
  className,
  'data-value': dataValue,
}) => (
  <div className={cn(tagVariants({ color, className }))} data-value={dataValue}>
    {leftIcon ? <Slot className="text-inherit">{leftIcon}</Slot> : null}
    <span className="text-inherit">{label}</span>
    {rightIcon ? <Slot className="text-inherit">{rightIcon}</Slot> : null}
  </div>
);
