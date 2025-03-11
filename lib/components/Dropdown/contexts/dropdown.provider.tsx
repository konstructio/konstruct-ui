import { FC, PropsWithChildren, useCallback } from 'react';

import { useToggle } from '../../../hooks';

import { DropdownProps, Option } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<
  PropsWithChildren & {
    onChange?: DropdownProps['onChange'];
    value?: Option;
  }
> = ({ children, onChange, value }) => {
  const [isOpen, toggleOpen] = useToggle(false);

  const handleChange = useCallback(
    (value: Option) => {
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <DropdownContext.Provider
      value={{ value, isOpen, setValue: handleChange, toggleOpen }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
