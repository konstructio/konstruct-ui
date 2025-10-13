import debounce from 'lodash/debounce';
import { ChangeEvent, FC, useCallback, useMemo, useRef } from 'react';

import { Filter as FilterPrimitive } from '@/components/Filter/Filter';
import { Input } from '@/components/Input/Input';

import { useTableContext } from '../../contexts';

import { OptionType, Props } from './Filter.types';

export const Filter: FC<Props> = ({
  placeholder,
  multiSelectFilter,
  showFilterInput = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    termOfSearch,
    multiselectSelected,
    onChangeTermOfSearch,
    onSelectMultiselect,
    // handlePage,
  } = useTableContext();

  const handleChangeMultiselectFilter = useCallback(
    (key: string, selected: OptionType[]) =>
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
              onApply={(selected: OptionType[]) =>
                handleChangeMultiselectFilter(key, selected)
              }
            />
          ),
        )}

        <FilterPrimitive.ResetButton
          className="text-slate-700 hover:text-slate-700 disabled:text-slate-700/45 select-none"
          disabled={!hasData}
          onClick={handleResetFilters}
        />
      </FilterPrimitive>
    </div>
  );
};
