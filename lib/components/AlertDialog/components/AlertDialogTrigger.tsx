import { FC } from 'react';
import { Trigger } from '@radix-ui/react-alert-dialog';

import { Button } from '@/components/Button/Button';

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
      className={className}
      onClick={onOpen}
    >
      {text}
    </Button>
  </Trigger>
);
