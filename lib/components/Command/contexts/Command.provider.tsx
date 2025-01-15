import { PropsWithChildren, useCallback } from 'react';

import { useToggle } from '../../../hooks';

import { CommandContext } from './Command.context';

export const CommandProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, toggleState] = useToggle(false);

  const handleOpen = useCallback(
    (status?: boolean) => toggleState(status),
    [toggleState],
  );

  const handleToggle = useCallback(() => toggleState(), [toggleState]);

  return (
    <CommandContext.Provider
      value={{
        isOpen,
        setOpen: handleOpen,
        toggleOpen: handleToggle,
      }}
    >
      {children}
    </CommandContext.Provider>
  );
};
