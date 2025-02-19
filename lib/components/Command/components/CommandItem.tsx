import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  useCallback,
  useContext,
} from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';
import { CommandContext } from '../contexts/Command.context';

const CommandItem = forwardRef<
  ComponentRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, onSelect, ...props }, ref) => {
  const { setOpen } = useContext(CommandContext);

  const handleSelect = useCallback(
    (value: string) => {
      onSelect?.(value);
      setOpen(false);
    },
    [setOpen, onSelect],
  );

  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      onSelect={handleSelect}
      {...props}
    />
  );
});

CommandItem.displayName = CommandPrimitive.Item.displayName;

export { CommandItem };
