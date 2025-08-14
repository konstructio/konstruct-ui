import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks';

import { DropdownProps } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<
  PropsWithChildren & {
    name?: string;
    value?: string;
    onChange?: DropdownProps['onChange'];
  }
> = ({ children, onChange, value, name }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback(
    (value: string) => {
      onChange?.({ target: { value, name: name ?? '' } });
    },
    [onChange, name],
  );

  return (
    <DropdownContext.Provider
      value={{
        value,
        isOpen,
        searchTerm,
        setSearchTerm,
        setValue: handleChange,
        toggleOpen,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
