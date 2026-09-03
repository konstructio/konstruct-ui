import { FC, FormEvent, useEffect, useId, useState } from 'react';

import { WarningIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { Button } from '../Button/Button';
import { CopyButton } from '../CopyButton/CopyButton';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';
import { Typography } from '../Typography/Typography';

import { Props } from './ConfirmDialog.types';

/**
 * A confirmation dialog for destructive or important actions, optionally
 * gated behind typing a confirmation text (usually the resource name).
 *
 * @example
 * ```tsx
 * <ConfirmDialog
 *   isOpen={isOpen}
 *   title={`Delete ${cluster.name}?`}
 *   description="This cannot be undone. All node pools will be removed."
 *   confirmationText={cluster.name}
 *   confirmLabel="Yes, delete"
 *   pendingLabel="Deleting…"
 *   isPending={isDeleting}
 *   onClose={() => setIsOpen(false)}
 *   onConfirm={deleteCluster}
 * />
 * ```
 */
const ConfirmDialog: FC<Props> = ({
  cancelLabel = 'Cancel',
  children,
  className,
  confirmationInputClassName,
  confirmationInputLabel,
  confirmationPrompt,
  confirmationText,
  confirmLabel = 'Confirm',
  containerClassName,
  copyLabel = 'Copy',
  description,
  icon,
  isOpen,
  isPending = false,
  pendingLabel,
  theme,
  title,
  variant = 'danger',
  onClose,
  onConfirm,
}) => {
  const formId = useId();
  const titleId = `${formId}-title`;
  const [typedText, setTypedText] = useState('');
  const requiresConfirmation = !!confirmationText;
  const isConfirmationMet =
    !requiresConfirmation || typedText === confirmationText;

  useEffect(() => {
    if (isOpen) {
      setTypedText('');
    }
  }, [isOpen]);

  const handleClose = () => {
    if (isPending) {
      return;
    }

    onClose();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isPending || !isConfirmationMet) {
      return;
    }

    onConfirm();
  };

  const resolvedIcon =
    icon === undefined ? (
      <WarningIcon
        size={24}
        aria-hidden="true"
        className={cn(
          'shrink-0',
          variant === 'danger'
            ? 'text-red-600 dark:text-red-500'
            : 'text-aurora-500',
        )}
      />
    ) : (
      icon
    );

  return (
    <Modal
      isOpen={isOpen}
      theme={theme}
      showCloseButton={false}
      ariaLabelledBy={titleId}
      containerClassName={containerClassName}
      className={cn('max-w-125 min-h-0 min-w-0 gap-0 p-6', className)}
      onClose={handleClose}
    >
      <form
        id={formId}
        noValidate
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <Modal.Header className="flex items-start gap-4">
          {resolvedIcon}

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <Typography
              id={titleId}
              variant="subtitle3"
              component="h2"
              className="text-slate-800 dark:text-slate-200"
            >
              {title}
            </Typography>

            {description ? (
              <Typography
                variant="body2"
                className="text-slate-700 dark:text-slate-50"
              >
                {description}
              </Typography>
            ) : null}

            {children}
          </div>
        </Modal.Header>

        {requiresConfirmation ? (
          <Modal.Body className="flex flex-col gap-2 pl-10">
            <Typography
              variant="body2"
              component="p"
              className="flex flex-wrap items-center gap-1 font-medium text-slate-800 dark:text-metal-50"
            >
              {confirmationPrompt ?? (
                <>
                  Type
                  <CopyButton
                    text={confirmationText}
                    label={confirmationText}
                    copyLabel={copyLabel}
                    className="rounded-xs border border-gray-200 bg-gray-50 px-1 py-0.5 font-medium hover:bg-gray-100 dark:border-metal-700 dark:bg-metal-700 dark:hover:bg-metal-600"
                  >
                    {confirmationText}
                  </CopyButton>
                  to confirm
                </>
              )}
            </Typography>

            <Input
              value={typedText}
              autoComplete="off"
              disabled={isPending}
              className={confirmationInputClassName}
              aria-label={
                confirmationInputLabel ?? `Type ${confirmationText} to confirm`
              }
              onChange={(event) => {
                setTypedText(event.target.value);
              }}
            />
          </Modal.Body>
        ) : null}

        <Modal.Footer className="flex justify-end gap-2">
          <Button
            type="button"
            variant="secondary"
            disabled={isPending}
            onClick={handleClose}
          >
            {cancelLabel}
          </Button>

          <Button
            type="submit"
            form={formId}
            variant={variant}
            disabled={isPending || !isConfirmationMet}
          >
            {isPending ? (pendingLabel ?? confirmLabel) : confirmLabel}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

ConfirmDialog.displayName = 'KonstructConfirmDialog';

export { ConfirmDialog };
