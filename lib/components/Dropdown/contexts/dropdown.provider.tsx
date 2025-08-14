import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks';

import { DropdownProps } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<
  PropsWithChildren & {
    name?: string;
    value?: string;
    onChange?: DropdownProps['onChange'];
    onBlur?: DropdownProps['onBlur'];
  }
> = ({ children, value, name, onChange, onBlur }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback(
    (value: string) => {
      onChange?.({ target: { value, name: name ?? '' } });
      onBlur?.();
    },
    [onChange, name, onBlur],
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
