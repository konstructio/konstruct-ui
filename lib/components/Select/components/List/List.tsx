import { Slot } from '@radix-ui/react-slot';
import debounce from 'lodash/debounce';
import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Loading } from '@/components/Loading/Loading';
import { cn } from '@/utils';

import { DEFAULT_LIST_SIZE } from '../../constants';
import { useSelectContext } from '../../contexts';
import { useNavigationUlList } from '../../hooks/useNavigationList';

import { ListItem } from '../ListItem/ListItem';

import { ListProps } from './List.types';
import { listVariants } from './List.variants';

export const List: ForwardRefExoticComponent<
  ListProps & RefAttributes<ComponentRef<'ul'>>
> = forwardRef<ComponentRef<'ul'>, ListProps>(
  (
    {
      additionalOptions,
      className,
      inputRef,
      isLoading,
      itemClassName,
      name,
      searchable = false,
      listItemSecondRowClassName,
      wrapperInputRef,
      isInfiniteScrollEnabled,
      onFetchMoreOptions,
      noOptionsText,
    },
    ref,
  ) => {
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const loadingRef = useRef<HTMLLIElement>(null);
    const [isFetching, setIsFetching] = useState(false);
    const {
      canContinueFetching,
      canFilter,
      isOpen,
      isTyping,
      options,
      page,
      searchTerm,
      setCanContinueFetching,
      setOptions,
      setPage,
      toggleOpen,
    } = useSelectContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    const filteredOptions =
      searchable && canFilter
        ? options.filter((option) => {
            const searchLower = searchTerm.toLowerCase();
            const label =
              typeof option.label === 'string'
                ? option.label.toLowerCase()
                : '';
            return label.includes(searchLower);
          })
        : options;

    useNavigationUlList({
      ulRef,
      wrapperInputRef,
      searchable,
      filteredOptions,
    });

    const uniqueFilteredOptions = filteredOptions.filter(
      (option, index, self) =>
        index === self.findIndex((o) => o.value === option.value),
    );

    const isEmpty = filteredOptions.length === 0;

    const debouncedFetching = useMemo(
      () =>
        debounce(async (entries) => {
          const [entry] = entries;

          if (
            entry.isIntersecting &&
            !isFetching &&
            onFetchMoreOptions &&
            canContinueFetching
          ) {
            try {
              setIsFetching(true);
              const newPage = page + 1;

              const { data, hasMore } = await onFetchMoreOptions({
                page: newPage,
                pageSize: DEFAULT_LIST_SIZE,
                termOfSearch: searchTerm,
              });

              setPage(newPage);
              setCanContinueFetching(hasMore);
              setOptions((prevOptions) => [...prevOptions, ...data]);
            } catch {
              console.error('Error fetching more options');
            } finally {
              setIsFetching(false);
            }
          }
        }, 100),
      [isFetching, onFetchMoreOptions, searchTerm, page],
    );

    useEffect(() => {
      if (
        isInfiniteScrollEnabled &&
        canContinueFetching &&
        !!loadingRef.current &&
        !isTyping
      ) {
        const observer = new IntersectionObserver(debouncedFetching, {
          threshold: 0.1,
        });

        observer.observe(loadingRef.current);

        return () => observer.disconnect();
      }
    }, [
      isInfiniteScrollEnabled,
      canContinueFetching,
      isFetching,
      isTyping,
      page,
    ]);

    return (
      <ul
        ref={ulRef}
        title={name}
        role="listbox"
        className={cn(listVariants({ className }))}
        data-state={isOpen ? 'open' : 'closed'}
      >
        {isLoading ? (
          <ListItem
            className={cn('select-none', itemClassName)}
            isClickable={false}
            inputRef={inputRef}
            value="Loading..."
            label="Loading..."
            listItemSecondRowClassName={listItemSecondRowClassName}
          />
        ) : isEmpty ? (
          <ListItem
            isEmpty
            className={cn('select-none', itemClassName)}
            isClickable={false}
            inputRef={inputRef}
            value={noOptionsText ?? ''}
            label={noOptionsText ?? 'No options'}
            listItemSecondRowClassName={listItemSecondRowClassName}
          />
        ) : (
          uniqueFilteredOptions.map((option) => (
            <ListItem
              key={option.value}
              className={cn('select-none', itemClassName)}
              isClickable
              inputRef={inputRef}
              listItemSecondRowClassName={listItemSecondRowClassName}
              {...option}
            />
          ))
        )}

        {isInfiniteScrollEnabled && canContinueFetching && (
          <li
            ref={loadingRef}
            role="option"
            data-action="true"
            className="flex items-center justify-center py-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Loading className="w-4 h-4 text-aurora-500 select-none" />
          </li>
        )}

        {additionalOptions?.map((option, index) => (
          <li
            key={index}
            role="option"
            data-action="true"
            onClick={() => toggleOpen(false)}
          >
            <Slot
              className={cn(
                'flex',
                'min-h-10',
                'py-2',
                'px-6',
                'w-full',
                'h-full',
                'gap-1',
                'items-center',
                'text-sm',
                '[&>svg]:-ml-1',
                '[&>svg]:w-3.5',
                '[&>svg]:h-3.5',
                '[&>svg]:shrink-0',
                'cursor-pointer',
                'select-none',
                'hover:bg-gray-50',
                'hover:dark:bg-metal-700',
                'focus:outline-0',
                'text-blue-600',
                'dark:text-aurora-500',
              )}
            >
              {option}
            </Slot>
          </li>
        ))}
      </ul>
    );
  },
);
