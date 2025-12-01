import debounce from 'lodash/debounce';
import { ChangeEvent, FC, useCallback, useMemo, useRef } from 'react';

import { Button } from '@/components/Button/Button';
import { Filter as FilterPrimitive } from '@/components/Filter/Filter';
import { Input } from '@/components/Input/Input';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';

import { Option, Props } from './Filter.types';

export const Filter: FC<Props> = ({
  actions,
  multiSelectFilter,
  placeholder,
  showFilterInput = true,
  showResetButton = true,
  resetButtonClassName,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    termOfSearch,
    multiselectSelected,
    onChangeTermOfSearch,
    onSelectMultiselect,
  } = useTableContext();

  const handleChangeMultiselectFilter = useCallback(
    (key: string, selected: Option[]) =>
      onSelectMultiselect(
        key,
        selected.map((option) => option.id),
      ),
    [onSelectMultiselect],
  );

  const handleResetFilters = useCallback(() => {
    onChangeTermOfSearch('');
    // handlePage(0);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [onChangeTermOfSearch]);

  const handleChangeTermOfSearch = useMemo(
    () =>
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        onChangeTermOfSearch(event.target.value);
      }, 500),
    [onChangeTermOfSearch],
  );

  const hasData = useMemo(
    () =>
      !!termOfSearch ||
      Object.entries(multiselectSelected ?? {})
        .map(([, values]) => values)
        .flat().length > 0,
    [termOfSearch, multiselectSelected],
  );

  return (
    <div className="w-full flex items-center justify-end pb-6">
      {showFilterInput && (
        <Input
          ref={inputRef}
          placeholder={placeholder}
          isSearch
          autoComplete="false"
          className="w-72"
          inputMode="search"
          onChange={handleChangeTermOfSearch}
        />
      )}

      <FilterPrimitive>
        {multiSelectFilter?.map(
          ({ key, label, position = 'right', options }) => (
            <FilterPrimitive.BadgeMultiSelect
              key={label}
              label={label}
              position={position}
              options={options}
              onApply={(selected: Option[]) => {
                handleChangeMultiselectFilter(key, selected);
              }}
            />
          ),
        )}

        {actions?.map(({ label, onClick, variant = 'secondary' }) => (
          <Button
            key={label}
            variant={variant}
            appearance="compact"
            onClick={onClick}
          >
            {label}
          </Button>
        ))}

        {showResetButton && (
          <FilterPrimitive.ResetButton
            className={cn(
              'text-slate-700 hover:text-slate-700 disabled:text-slate-700/45 select-none',
              resetButtonClassName,
            )}
            disabled={!hasData}
            onClick={handleResetFilters}
          />
        )}
      </FilterPrimitive>
    </div>
  );
};
