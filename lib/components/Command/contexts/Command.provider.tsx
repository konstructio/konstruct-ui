import { PropsWithChildren, useCallback } from 'react';

import { useToggle } from '../../../hooks';

import { CommandContext } from './Command.context';

export const CommandProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, toggleState] = useToggle(false);

  const handleOpen = useCallback(
    (status?: boolean) => toggleState(status),
    [toggleState],
  );

  return (
    <CommandContext.Provider
      value={{
        isOpen,
        setOpen: handleOpen,
      }}
    >
      {children}
    </CommandContext.Provider>
  );
};
