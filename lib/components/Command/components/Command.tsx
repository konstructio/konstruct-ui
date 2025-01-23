import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

const Command = forwardRef<
  ComponentRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, children, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex justify-center items-center overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  >
    <div className="w-[500px]">{children}</div>
  </CommandPrimitive>
));

Command.displayName = CommandPrimitive.displayName;

export { Command };
