import {
  ComponentRef,
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';

import { useToggle } from '@/hooks';

import { DropdownProps } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

export const DropdownProvider: FC<
  PropsWithChildren & {
    highlightSearch?: boolean;
    name?: string;
    value?: string;
    onChange?: DropdownProps['onChange'];
    onBlur?: DropdownProps['onBlur'];
  }
> = ({ children, value, name, highlightSearch = false, onChange, onBlur }) => {
  const highlightSearchEnabled = useRef(highlightSearch);
  const [isOpen, toggleOpen] = useToggle(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback(
    (value: string, input?: RefObject<ComponentRef<'input'> | null>) => {
      if (input?.current) {
        input.current.value = value;
      }

      onChange?.({ target: { value, name: name ?? '' } });
      onBlur?.();
    },
    [onChange, name, onBlur],
  );

  return (
    <DropdownContext.Provider
      value={{
        highlightSearchEnabled: highlightSearchEnabled.current,
        isOpen,
        searchTerm,
        value,
        setSearchTerm,
        setValue: handleChange,
        toggleOpen,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
