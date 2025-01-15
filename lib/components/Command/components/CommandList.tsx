import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Command as CommandPrimitive } from 'cmdk';

const CommandList = forwardRef<
  ComponentRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={twMerge(
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export { CommandList };
