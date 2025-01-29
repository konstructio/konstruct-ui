import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

const Command = forwardRef<
  ComponentRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, children, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={className} {...props}>
    <div className="w-[500px]">{children}</div>
  </CommandPrimitive>
));

Command.displayName = CommandPrimitive.displayName;

export { Command };
