import { FC, useContext, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { CommandContext } from '../../contexts/Command.context';
import { Command } from '../Command';
import { CommandEmpty } from '../CommandEmpty';
import { CommandInput } from '../CommandInput';
import { CommandList } from '../CommandList';

import { CommandDialogProps } from './CommandDialog.types';
import { commandDialogVariants } from './CommandDialog.variants';

export const CommandDialog: FC<CommandDialogProps> = ({
  children,
  className,
  placeholder = 'Type a command or search...',
  emptyResults = 'No results found...',
  ...props
}) => {
  const { isOpen, setOpen, toggleOpen } = useContext(CommandContext);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      'keydown',
      (e: KeyboardEvent) => {
        if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          toggleOpen();
        }
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, [toggleOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen} {...props}>
      <DialogContent>
        <div
          className="absolute inset-0 bg-black/80"
          onClick={() => setOpen(false)}
          role="presentation"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <VisuallyHidden>
            <DialogTitle>Example Dialog</DialogTitle>
          </VisuallyHidden>

          <Command className={commandDialogVariants({ className })}>
            <CommandInput placeholder={placeholder} />

            <CommandList>
              <CommandEmpty>{emptyResults}</CommandEmpty>

              {children}
            </CommandList>
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
};
