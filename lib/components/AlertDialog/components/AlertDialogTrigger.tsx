import { Trigger } from '@radix-ui/react-alert-dialog';
import { ComponentRef, forwardRef } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { AlertDialogTriggerProps } from './AlertDialogTrigger.types';

export const AlertDialogTrigger = forwardRef<
  ComponentRef<'button'>,
  AlertDialogTriggerProps
>(({ 'data-theme': dataTheme, className, text, onOpen }, ref) => (
  <Trigger asChild={true}>
    <Button
      ref={ref}
      type="button"
      data-theme={dataTheme}
      className={cn(className)}
      onClick={onOpen}
    >
      {text}
    </Button>
  </Trigger>
));
