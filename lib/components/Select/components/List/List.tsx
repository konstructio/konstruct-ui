import debounce from 'lodash/debounce';
import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  Fragment,
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
import { isOptionGroup, Option, OptionGroup } from '../../Select.types';

import { AdditionalOptions } from '../AdditionalOptions/AdditionalOptions';
import { ListItem } from '../ListItem/ListItem';

import { ListProps } from './List.types';
import { listGroupLabelVariants, listVariants } from './List.variants';

export const List: ForwardRefExoticComponent<
  ListProps & RefAttributes<ComponentRef<'ul'>>
> = forwardRef<ComponentRef<'ul'>, ListProps>(
  (
    {
      additionalOptions,
      className,
      groupedOptions,
      inputRef,
      isLoading,
      itemClassName,
      name,
      searchable = false,
      listItemSecondRowClassName,
      wrapperInputRef,
      isInfiniteScrollEnabled,
      noOptionsText,
      onFetchMoreOptions,
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
    } = useSelectContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    const isGrouped =
      groupedOptions.length > 0 &&
      isOptionGroup(groupedOptions[0] as Option | OptionGroup);

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

    const filteredGroups = useMemo((): OptionGroup[] => {
      if (!isGrouped) {
        return [];
      }

      const groups = groupedOptions as OptionGroup[];

      if (!searchable || !canFilter || !searchTerm) {
        return groups;
      }

      const lower = searchTerm.toLowerCase();

      return groups
        .map((g) => ({
          ...g,
          options: g.options.filter((o) =>
            o.label.toLowerCase().includes(lower),
          ),
        }))
        .filter((g) => g.options.length > 0);
    }, [isGrouped, groupedOptions, searchable, canFilter, searchTerm]);

    const navigableOptions = isGrouped
      ? filteredGroups.flatMap((g) => g.options)
      : filteredOptions;

    useNavigationUlList({
      ulRef,
      wrapperInputRef,
      searchable,
      filteredOptions: navigableOptions,
    });

    const uniqueFilteredOptions = filteredOptions.filter(
      (option, index, self) =>
        index === self.findIndex((o) => o.value === option.value),
    );

    const isEmpty = isGrouped
      ? filteredGroups.length === 0
      : filteredOptions.length === 0;

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
        ) : isGrouped ? (
          filteredGroups.map((group) => (
            <Fragment key={group.groupLabel}>
              <li
                role="presentation"
                aria-hidden="true"
                data-action="true"
                className={cn(listGroupLabelVariants())}
              >
                {group.groupLabel}
              </li>

              {group.options.map((option) => (
                <ListItem
                  key={option.value}
                  className={cn('select-none', itemClassName)}
                  isClickable
                  inputRef={inputRef}
                  listItemSecondRowClassName={listItemSecondRowClassName}
                  {...option}
                />
              ))}
            </Fragment>
          ))
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

        <AdditionalOptions additionalOptions={additionalOptions} />
      </ul>
    );
  },
);
