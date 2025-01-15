import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { twMerge } from 'tailwind-merge';

const Command = forwardRef<
  ComponentRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={twMerge(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;

export { Command };
