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
  closeOnApply = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    termOfSearch,
    multiselectSelected,
    dateFilters,
    dateRangeFilters,
    timeFilters,
    onChangeTermOfSearch,
    onSelectMultiselect,
    onSelectDateFilter,
    onSelectDateRangeFilter,
    onSelectTimeFilter,
  } = useTableContext();

  const resolvedFilters: FilterConfig[] = useMemo(() => {
    const base: FilterConfig[] =
      filters ??
      multiSelectFilter?.map((f) => ({
        ...f,
        type: 'badgeMultiSelect' as const,
      })) ??
      [];

    const legacyActions: FilterConfig[] = actions ?? [];

    return [...base, ...legacyActions];
  }, [filters, multiSelectFilter, actions]);

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
      Object.values(dateRangeFilters ?? {}).some(Boolean) ||
      Object.values(timeFilters ?? {}).some(Boolean),
    [
      termOfSearch,
      multiselectSelected,
      dateFilters,
      dateRangeFilters,
      timeFilters,
    ],
  );

  const renderFilter = (filterConfig: FilterConfig) => {
    if (filterConfig.type === 'action') {
      const {
        label,
        appearance = 'compact',
        variant = 'secondary',
        leftIcon,
        rightIcon,
        type: _,
        ...buttonProps
      } = filterConfig;

      return (
        <Button
          key={label}
          appearance={appearance}
          variant={variant}
          {...buttonProps}
        >
          {leftIcon}
          {label}
          {rightIcon}
        </Button>
      );
    }

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

    if (filterConfig.type === 'time') {
      return (
        <FilterPrimitive.TimeFilterDropdown
          key={key}
          label={label}
          position={position}
          format={filterConfig.format}
          presets={filterConfig.presets}
          showTimePicker={filterConfig.showTimePicker}
          onApply={(time) => {
            onSelectTimeFilter(key, time);
          }}
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

      <FilterPrimitive closeOnApply={closeOnApply}>
        {resolvedFilters.map(renderFilter)}

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
