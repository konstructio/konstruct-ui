import { ReactNode } from 'react';

import { useToggle } from '../../../hooks';

import { TooltipContext } from './Tooltip.context';

export const TooltipProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen] = useToggle(false);

  return (
    <TooltipContext.Provider
      value={{
        isOpen,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};
