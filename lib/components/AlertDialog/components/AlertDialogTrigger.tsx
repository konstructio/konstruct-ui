import { Trigger } from '@radix-ui/react-alert-dialog';
import { FC } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { AlertDialogTriggerProps } from './AlertDialogTrigger.types';

export const AlertDialogTrigger: FC<AlertDialogTriggerProps> = ({
  'data-theme': dataTheme,
  className,
  text,
  onOpen,
}) => (
  <Trigger asChild={true}>
    <Button
      type="button"
      data-theme={dataTheme}
      className={cn(className)}
      onClick={onOpen}
    >
      {text}
    </Button>
  </Trigger>
);
