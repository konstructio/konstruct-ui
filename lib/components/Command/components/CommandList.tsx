import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

const CommandList = forwardRef<
  ComponentRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export { CommandList };
