import debounce from 'lodash/debounce';
import { ChangeEvent, FC, useCallback, useMemo, useRef } from 'react';

import { Filter as FilterPrimitive } from '@/components/Filter/Filter';
import { Input } from '@/components/Input/Input';

import { OptionType, Props } from './Filter.types';

export const Filter: FC<Props> = ({
  placeholder,
  multiSelectFilter,
  showFilterInput = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedStatus = '';
  const selectedTerm = '';
  const onSelectedStatus = (status: string[]) => console.log(status);
  const onSelectedTerm = (term: string) => console.log(term);

  const handleChangeStatus = useCallback(
    (selected: OptionType[]) =>
      onSelectedStatus(selected.map((option) => option.id)),
    [onSelectedStatus],
  );

  const handleResetFilters = useCallback(() => {
    onSelectedTerm('');

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [onSelectedTerm]);

  const handleChangeSearch = useMemo(
    () =>
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        onSelectedTerm(event.target.value);
      }, 500),
    [onSelectedTerm],
  );

  const hasData = useMemo(
    () => !!selectedStatus || !!selectedTerm,
    [selectedStatus, selectedTerm],
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
          onChange={handleChangeSearch}
        />
      )}

      <FilterPrimitive>
        {multiSelectFilter?.map(({ label, position = 'right', options }) => (
          <FilterPrimitive.BadgeMultiSelect
            label={label}
            position={position}
            options={options}
            onApply={handleChangeStatus}
          />
        ))}

        <FilterPrimitive.ResetButton
          className="text-slate-700 hover:text-slate-700 disabled:text-slate-700/45"
          disabled={!hasData}
          onClick={handleResetFilters}
        />
      </FilterPrimitive>
    </div>
  );
};
