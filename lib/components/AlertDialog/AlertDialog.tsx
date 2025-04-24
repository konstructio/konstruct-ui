'use client';
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

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { AlertDialogProps } from './AlertDialog.types';
import { AlertDialogTrigger } from './components';
import { useAlertDialog } from './hooks';

export const AlertDialog: FC<AlertDialogProps> = ({
  buttonCancel: {
    className: buttonCancelClassName,
    text: buttonCancelText = 'Cancel',
    ...buttonCancelDelegated
  } = {},
  buttonConfirm: {
    className: buttonConfirmClassName,
    text: buttonConfirmText = 'OK',
    ...buttonConfirmDelegated
  } = {},
  buttonTriggerClassName,
  buttonTriggerText,
  description,
  showCancelButton = true,
  theme,
  title,
  wrapperClassName,
  onConfirm,
  ...delegated
}) => {
  const { isOpen, handleCancel, handleConfirm, handleOpen } = useAlertDialog({
    onConfirm,
  });

  return (
    <Root open={isOpen} {...delegated}>
      <AlertDialogTrigger
        className={buttonTriggerClassName}
        text={buttonTriggerText}
        data-theme={theme}
        onOpen={handleOpen}
      />

      <Portal>
        <Overlay className="bg-black opacity-70 inset-0 fixed animate-in fade-in-0" />

        <Content
          data-theme={theme}
          className={cn(
            'bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-8 animate-in fade-in-0 zoom-in-85',
            wrapperClassName,
          )}
        >
          <Title className="text-base text-slate-700 font-semibold">
            {title}
          </Title>

          <Description className="text-sm text-slate-800">
            {description}
          </Description>

          <div className="flex flex-row gap-5 justify-end">
            {showCancelButton && (
              <Cancel asChild={true}>
                <Button
                  type="button"
                  variant="secondary"
                  className={cn(buttonCancelClassName)}
                  onClick={handleCancel}
                  {...buttonCancelDelegated}
                >
                  {buttonCancelText}
                </Button>
              </Cancel>
            )}

            <Action asChild={true}>
              <Button
                type="button"
                variant="primary"
                className={cn(buttonConfirmClassName)}
                onClick={handleConfirm}
                {...buttonConfirmDelegated}
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
