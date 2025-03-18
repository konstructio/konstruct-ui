import { FC, PropsWithChildren, useCallback } from 'react';

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

  const handleChange = useCallback(
    (value: string) => {
      onChange?.({ target: { value, name: name ?? '' } });
    },
    [onChange, name],
  );

  return (
    <DropdownContext.Provider
      value={{ value, isOpen, setValue: handleChange, toggleOpen }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
