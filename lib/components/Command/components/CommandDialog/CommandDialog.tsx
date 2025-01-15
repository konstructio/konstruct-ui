import { FC, useContext, useEffect } from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';

import { CommandContext } from '../../contexts/Command.context';
import { Command } from '../Command';

import { CommandDialogProps } from './CommandDialog.types';
import { commandDialogVariants } from './CommandDialog.variants';
import { CommandInput } from '../CommandInput';
import { CommandList } from '../CommandList';
import { CommandEmpty } from '../CommandEmpty';

export const CommandDialog: FC<CommandDialogProps> = ({
  children,
  className,
  placeholder = 'Type a command or search...',
  emptyResults = 'No results found...',
  ...props
}) => {
  const { isOpen, setOpen } = useContext(CommandContext);

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
          setOpen(!isOpen);
        }
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, [isOpen, setOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen} {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className={commandDialogVariants({ className })}>
          <CommandInput placeholder={placeholder} />

          <CommandList>
            <CommandEmpty>{emptyResults}</CommandEmpty>

            {children}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
