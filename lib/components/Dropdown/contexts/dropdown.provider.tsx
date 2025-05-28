import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks';

import { DropdownProps } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<
  PropsWithChildren & {
    onChange?: DropdownProps['onChange'];
    value?: string;
    name?: string;
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
        setValue: handleChange,
        toggleOpen,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
