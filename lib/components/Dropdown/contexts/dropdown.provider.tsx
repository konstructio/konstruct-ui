import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks';

import { DropdownProps, Option } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<
  PropsWithChildren & { onChange?: DropdownProps['onChange'] }
> = ({ children, onChange }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [value, setValue] = useState<Option | null>(null);

  const handleChange = useCallback(
    (value: Option) => {
      onChange?.(value);
      setValue(value);
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
