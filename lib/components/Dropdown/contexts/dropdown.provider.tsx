import {
  ComponentRef,
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useToggle } from '@/hooks';

import { DropdownProps, Option } from '../Dropdown.types';

import { DropdownContext } from './dropdown.context';

const DEFAULT_INIT_PAGE = 1;
const DELAY_TYPING = 300;

export const DropdownProvider: FC<
  PropsWithChildren & {
    highlightSearch?: boolean;
    name?: string;
    value?: string;
    options: Option[];
    onChange?: DropdownProps['onChange'];
    onBlur?: DropdownProps['onBlur'];
  }
> = ({
  children,
  value,
  name,
  highlightSearch = false,
  options: defaultOptions,
  onChange,
  onBlur,
}) => {
  const [options, setOptions] = useState<Option[]>(defaultOptions);
  const highlightSearchEnabled = useRef(highlightSearch);
  const [isOpen, toggleOpen] = useToggle(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [canFilter, setCanFilter] = useState(true);
  const [canContinueFetching, setCanContinueFetching] = useState(true);
  const [page, setPage] = useState(DEFAULT_INIT_PAGE);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleChange = useCallback(
    (value: string, input?: RefObject<ComponentRef<'input'> | null>) => {
      if (input?.current) {
        input.current.value = value;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setIsTyping(true);
      setCanContinueFetching(true);
      setPage(DEFAULT_INIT_PAGE);
      onChange?.({ target: { value, name: name ?? '' } });
      onBlur?.();

      timeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, DELAY_TYPING);
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

  useEffect(() => {
    setOptions(defaultOptions);
  }, [defaultOptions.length]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
        options,
        isTyping,
        setOptions,
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
