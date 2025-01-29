import { Command as CommandPrimitive } from 'cmdk';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { Search } from 'react-feather';

import { cn } from '../../../utils';
import { inputVariants, searchInconInputVariants } from '../Command.variants';

const CommandInput = forwardRef<
  ComponentRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="flex items-center px-3 border-b border-neutral-900/35"
    cmdk-input-wrapper=""
  >
    <Search className={cn(searchInconInputVariants({ className }))} />

    <CommandPrimitive.Input
      ref={ref}
      className={cn(inputVariants({ className }))}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

export { CommandInput };
