import { PropsWithChildren, useCallback, useMemo } from 'react';

import { useToggle } from '../../../hooks';

import { CommandContext } from './Command.context';

export const CommandProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, toggleState] = useToggle(false);

  const handleOpen = useCallback(
    (status?: boolean) => toggleState(status),
    [toggleState],
  );

  const handleToggle = useCallback(() => toggleState(), [toggleState]);

  const value = useMemo(
    () => ({
      isOpen,
      setOpen: handleOpen,
      toggleOpen: handleToggle,
    }),
    [isOpen, handleOpen, handleToggle],
  );

  return (
    <CommandContext.Provider value={value}>{children}</CommandContext.Provider>
  );
};
