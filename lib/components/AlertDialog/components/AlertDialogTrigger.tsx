import { FC } from 'react';
import { Trigger } from '@radix-ui/react-alert-dialog';

import { useTheme } from '../../../contexts';
import { Button } from '../../Button/Button';

import { AlertDialogTriggerProps } from './AlertDialogTrigger.types';

export const AlertDialogTrigger: FC<AlertDialogTriggerProps> = ({
  text,
  theme,
  onOpen,
}) => {
  const { theme: contextTheme } = useTheme();

  return (
    <Trigger asChild={true}>
      <Button type="button" theme={theme ?? contextTheme} onClick={onOpen}>
        {text}
      </Button>
    </Trigger>
  );
};
