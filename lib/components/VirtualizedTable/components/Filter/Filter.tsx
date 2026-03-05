import debounce from 'lodash/debounce';
import { ChangeEvent, FC, useCallback, useMemo, useRef } from 'react';

import { Button } from '@/components/Button/Button';
import { Filter as FilterPrimitive } from '@/components/Filter/Filter';
import { Input } from '@/components/Input/Input';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';
import { FilterConfig } from '../../VirtualizedTable.types';

import { Option, Props } from './Filter.types';

export const Filter: FC<Props> = ({
  actions,
  filters,
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
    dateFilters,
    dateRangeFilters,
    onChangeTermOfSearch,
    onSelectMultiselect,
    onSelectDateFilter,
    onSelectDateRangeFilter,
  } = useTableContext();

  const resolvedFilters: FilterConfig[] = useMemo(
    () =>
      filters ??
      multiSelectFilter?.map((f) => ({
        ...f,
        type: 'badgeMultiSelect' as const,
      })) ??
      [],
    [filters, multiSelectFilter],
  );

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
      Object.values(multiselectSelected ?? {}).flat().length > 0 ||
      Object.values(dateFilters ?? {}).some(Boolean) ||
      Object.values(dateRangeFilters ?? {}).some(Boolean),
    [termOfSearch, multiselectSelected, dateFilters, dateRangeFilters],
  );

  const renderFilter = (filterConfig: FilterConfig) => {
    const { key, label, position = 'right' } = filterConfig;

    if (filterConfig.type === 'textMultiSelect') {
      return (
        <FilterPrimitive.TextMultiSelect
          key={key}
          label={label}
          position={position}
          options={filterConfig.options}
          onApply={(selected: Option[]) => {
            handleChangeMultiselectFilter(key, selected);
          }}
        />
      );
    }

    if (filterConfig.type === 'date') {
      return (
        <FilterPrimitive.DateFilterDropdown
          key={key}
          label={label}
          position={position}
          countryCode={filterConfig.countryCode}
          onApply={(date) => {
            onSelectDateFilter(key, date);
          }}
        />
      );
    }

    if (filterConfig.type === 'dateRange') {
      return (
        <FilterPrimitive.DateRangeFilterDropdown
          key={key}
          label={label}
          position={position}
          showTime={filterConfig.showTime}
          timeFormat={filterConfig.timeFormat}
          showPresets={filterConfig.showPresets}
          defaultRange={filterConfig.defaultRange}
          minDate={filterConfig.minDate}
          maxDate={filterConfig.maxDate}
          countryCode={filterConfig.countryCode}
          onApply={(range) => {
            onSelectDateRangeFilter(key, range);
          }}
          onRangeChange={filterConfig.onRangeChange}
        />
      );
    }

    // Default: badgeMultiSelect (type is undefined or 'badgeMultiSelect')
    return (
      <FilterPrimitive.BadgeMultiSelect
        key={key}
        label={label}
        position={position}
        options={filterConfig.options}
        onApply={(selected: Option[]) => {
          handleChangeMultiselectFilter(key, selected);
        }}
      />
    );
  };

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
        {resolvedFilters.map(renderFilter)}

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
            className={cn('select-none', resetButtonClassName)}
            disabled={!hasData}
            onClick={handleResetFilters}
          />
        )}
      </FilterPrimitive>
    </div>
  );
};
