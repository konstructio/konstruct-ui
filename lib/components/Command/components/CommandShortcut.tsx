import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const CommandShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={twMerge(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export { CommandShortcut };
