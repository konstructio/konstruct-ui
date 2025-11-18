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

const DEFAULT_INIT_PAGE = 1;

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
  const [canFilter, setCanFilter] = useState(true);
  const [canContinueFetching, setCanContinueFetching] = useState(true);
  const [page, setPage] = useState(DEFAULT_INIT_PAGE);

  const handleChange = useCallback(
    (value: string, input?: RefObject<ComponentRef<'input'> | null>) => {
      if (input?.current) {
        input.current.value = value;
      }

      onChange?.({ target: { value, name: name ?? '' } });
      setCanContinueFetching(true);
      setPage(DEFAULT_INIT_PAGE);
      onBlur?.();
    },
    [onChange, name, onBlur],
  );

  const handleToggle = useCallback(
    (value?: boolean) => {
      toggleOpen(value);
      setCanContinueFetching(true);
      setPage(DEFAULT_INIT_PAGE);
    },
    [toggleOpen],
  );

  return (
    <DropdownContext.Provider
      value={{
        highlightSearchEnabled: highlightSearchEnabled.current,
        isOpen,
        searchTerm,
        value,
        canFilter,
        canContinueFetching,
        page,
        setPage,
        setCanContinueFetching,
        setCanFilter,
        setSearchTerm,
        setValue: handleChange,
        toggleOpen: handleToggle,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
