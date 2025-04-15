import { ComponentRef, forwardRef } from 'react';
import { Overlay } from '@radix-ui/react-dialog';

import { cn } from '../../../utils';

const DialogOverlay = forwardRef<
  ComponentRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 delay-200',
      className,
    )}
    {...props}
  />
));

DialogOverlay.displayName = Overlay.displayName;

export { DialogOverlay };
