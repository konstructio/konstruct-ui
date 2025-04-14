import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-alert-dialog';
import { FC } from 'react';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';
import { Button } from '../Button/Button';

import { AlertDialogProps } from './AlertDialog.types';
import { AlertDialogTrigger } from './components';
import { useAlertDialog } from './hooks';

export const AlertDialog: FC<AlertDialogProps> = ({
  buttonCancelClassName,
  buttonCancelText = 'Cancel',
  buttonConfirmClassName,
  buttonConfirmText = 'OK',
  buttonText,
  description,
  theme,
  title,
  onConfirm,
}) => {
  const { theme: contextTheme } = useTheme();
  const { isOpen, handleCancel, handleConfirm, handleOpen } = useAlertDialog({
    onConfirm,
  });

  return (
    <Root open={isOpen}>
      <AlertDialogTrigger text={buttonText} theme={theme} onOpen={handleOpen} />

      <Portal>
        <Overlay className="bg-black opacity-75 inset-0 fixed animate-in fade-in-0" />
        <Content className="bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-6 animate-in fade-in-0 zoom-in-85">
          <Title className="font-bold text-center text-2xl">{title}</Title>

          <Description>{description}</Description>

          <div className="flex flex-row gap-5 justify-end">
            <Cancel asChild={true}>
              <Button
                type="button"
                theme={theme ?? contextTheme}
                variant="secondary"
                className={cn(buttonCancelClassName)}
                onClick={handleCancel}
              >
                {buttonCancelText}
              </Button>
            </Cancel>

            <Action asChild={true}>
              <Button
                type="button"
                theme={theme ?? contextTheme}
                variant="danger"
                className={cn(buttonConfirmClassName)}
                onClick={handleConfirm}
              >
                {buttonConfirmText}
              </Button>
            </Action>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};
