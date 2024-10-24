import { FC, PropsWithChildren, useState } from 'react';

import { useToggle } from '../../../hooks';

import { Option } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [value, setValue] = useState<Option | null>(null);

  return (
    <DropdownContext.Provider value={{ value, isOpen, setValue, toggleOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};
