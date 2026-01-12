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
import { FC, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { AlertDialogProps } from './AlertDialog.types';
import { AlertDialogTrigger } from './components';
import { useAlertDialog } from './hooks';

const AlertDialog: FC<AlertDialogProps> = ({
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
  buttonTriggerVariant,
  buttonTriggerText,
  description,
  showCancelButton = true,
  theme,
  title,
  wrapperClassName,
  onConfirm,
  ...delegated
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { isOpen, handleCancel, handleConfirm, handleOpen } = useAlertDialog({
    onConfirm,
  });

  useEffect(() => {
    if (!triggerRef.current || theme) {
      return;
    }

    const parent = triggerRef.current.closest('[data-theme]');

    if (parent) {
      setContainer(parent as HTMLElement);
    }
  }, []);

  return (
    <Root open={isOpen} {...delegated}>
      <AlertDialogTrigger
        ref={triggerRef}
        className={buttonTriggerClassName}
        variant={buttonTriggerVariant}
        text={buttonTriggerText}
        data-theme={theme}
        onOpen={handleOpen}
      />

      <Portal container={container}>
        <Overlay className="bg-black opacity-70 dark:opacity-85 inset-0 fixed animate-in fade-in-0" />

        <Content
          data-theme={theme}
          className={cn(
            'bg-white',
            'rounded-md',
            'fixed',
            'top-1/2',
            'left-1/2',
            '-translate-y-2/4',
            '-translate-x-2/4',
            'flex',
            'flex-col',
            'gap-6',
            'p-8',
            'animate-in',
            'fade-in-0',
            'zoom-in-85',
            'border',
            'border-transparent',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            'dark:border-slate-700',
            wrapperClassName,
          )}
        >
          <Title className="text-base text-slate-700 font-semibold">
            {title}
          </Title>

          <Description className="text-sm text-slate-800">
            {description}
          </Description>

          <div className="flex flex-row gap-2 justify-end">
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

AlertDialog.displayName = 'KonstructAlertDialog';

export { AlertDialog };
