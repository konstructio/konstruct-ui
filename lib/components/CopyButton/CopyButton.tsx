import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC, FocusEvent, MouseEvent, useEffect, useState } from 'react';

import { CopyIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { Props } from './CopyButton.types';
import { copyButtonVariants } from './CopyButton.variants';
import { useCopyToClipboard } from './hooks';

const CopyButton: FC<Props> = ({
  arrowClassName,
  children,
  className,
  copiedLabel = 'Copied!',
  copyLabel = 'Copy',
  label,
  resetDelay,
  text,
  theme,
  tooltipClassName,
  onCopy,
  onCopyError,
  ...delegated
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { copied, copy } = useCopyToClipboard({
    resetDelay,
    onCopy,
    onCopyError,
  });

  useEffect(() => {
    if (!copied) {
      setIsOpen(false);
    }
  }, [copied]);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const ok = await copy(text);

    if (ok) {
      setIsOpen(true);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.matches(':focus-visible')) {
      event.preventDefault();
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!copied) {
      setIsOpen(next);
    }
  };

  return (
    <Provider delayDuration={0}>
      <Root open={isOpen} onOpenChange={handleOpenChange}>
        <Trigger asChild>
          <button
            type="button"
            aria-label={`${copyLabel} ${label}`}
            data-theme={theme}
            className={cn(
              copyButtonVariants({ iconOnly: !children, className }),
            )}
            onClick={handleClick}
            onFocus={handleFocus}
            {...delegated}
          >
            {children ?? <CopyIcon size={14} aria-hidden="true" />}
          </button>
        </Trigger>

        <Portal>
          <Content
            sideOffset={4}
            className={cn(
              'z-70 rounded bg-slate-700 px-2 py-1 text-xs text-white shadow-md',
              'animate-in fade-in-0',
              tooltipClassName,
            )}
          >
            {copied ? copiedLabel : copyLabel}
            <Arrow className={cn('fill-slate-700', arrowClassName)} />
          </Content>
        </Portal>
      </Root>

      <VisuallyHidden role="status" aria-live="polite">
        {copied ? copiedLabel : ''}
      </VisuallyHidden>
    </Provider>
  );
};

CopyButton.displayName = 'KonstructCopyButton';

export { CopyButton };
