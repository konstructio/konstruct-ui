import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

const CommandSeparator = forwardRef<
  ComponentRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export { CommandSeparator };
