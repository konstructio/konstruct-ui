import { FC, useCallback, useEffect, useState } from 'react';
import { Circle, File, Moon, Sun, HardDrive } from 'react-feather';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './components';
import { docsConfig } from './docs';

export const Command: FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
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
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Links">
          {docsConfig.mainNav
            .filter((navitem) => !navitem.external)
            .map(({ title, href }) => (
              <CommandItem
                key={href}
                value={title}
                onSelect={() => runCommand(() => undefined)}
              >
                <File />
                {title}
              </CommandItem>
            ))}
        </CommandGroup>
        {docsConfig.sidebarNav.map((group) => (
          <CommandGroup key={group.title} heading={group.title}>
            {group.items.map(({ href, title }) => (
              <CommandItem
                key={href}
                value={title}
                onSelect={() => {
                  runCommand(() => undefined);
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <Circle className="h-3 w-3" />
                </div>
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => undefined)}>
            <Sun />
            Light
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => undefined)}>
            <Moon />
            Dark
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => undefined)}>
            <HardDrive />
            System
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
