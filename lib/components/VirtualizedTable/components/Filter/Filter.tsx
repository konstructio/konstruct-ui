import debounce from 'lodash/debounce';
import { ChangeEvent, FC, useEffect, useMemo, useRef } from 'react';

import { Button } from '@/components/Button/Button';
import { Filter as FilterPrimitive } from '@/components/Filter/Filter';
import { resetEvent } from '@/components/Filter/events';
import { Input } from '@/components/Input/Input';
import { cn } from '@/utils';

import { HIDE_BELOW_CLASS, SHOW_BELOW_CLASS } from '../../constants';
import { useTableContext } from '../../contexts';
import { useIsFlexWrapped } from '../../hooks';
import {
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
} from '../../events';
import { ActionFilterConfig, FilterConfig } from '../../VirtualizedTable.types';
import { getTableId } from '../../utils';

import { Option, Props } from './Filter.types';

export const Filter: FC<Props> = ({
  id,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isWrapped = useIsFlexWrapped(containerRef);
  const tableId = getTableId(id);
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

  const baseFilters: FilterConfig[] =
    filters ??
    multiSelectFilter?.map((f) => ({
      ...f,
      type: 'badgeMultiSelect' as const,
    })) ??
    [];
  const resolvedFilters: FilterConfig[] = [...baseFilters, ...(actions ?? [])];
  const iconOnlyActions = resolvedFilters.filter(
    (filterConfig): filterConfig is ActionFilterConfig =>
      filterConfig.type === 'action' && !!filterConfig.iconOnlyBelow,
  );

  const handleChangeMultiselectFilter = (key: string, selected: Option[]) => {
    onSelectMultiselect(
      key,
      selected.map((option) => option.id),
    );
  };

  const handleResetFilters = () => {
    onChangeTermOfSearch('');

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      VirtualizedTableEvent.RESET_FILTERS,
      (event) => {
        const { detail } = event as CustomEvent<VirtualizedTableEventDetail>;

        if (detail.tableId !== tableId) {
          return;
        }

        onChangeTermOfSearch('');

        if (inputRef.current) {
          inputRef.current.value = '';
        }

        resetEvent(tableId);
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, [tableId, onChangeTermOfSearch]);

  const handleChangeTermOfSearch = useMemo(
    () =>
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        onChangeTermOfSearch(event.target.value);
      }, 500),
    [onChangeTermOfSearch],
  );

  const hasData =
    !!termOfSearch ||
    Object.values(multiselectSelected ?? {}).flat().length > 0 ||
    Object.values(dateFilters ?? {}).some(Boolean) ||
    Object.values(dateRangeFilters ?? {}).some(Boolean) ||
    Object.values(timeFilters ?? {}).some(Boolean);

  const renderFilter = (filterConfig: FilterConfig) => {
    if (filterConfig.type === 'action') {
      const {
        label,
        appearance = 'compact',
        variant = 'secondary',
        leftIcon,
        rightIcon,
        iconOnlyBelow,
        className,
        type: _,
        ...buttonProps
      } = filterConfig;

      return (
        <Button
          key={label}
          appearance={appearance}
          variant={variant}
          className={cn(
            iconOnlyBelow && HIDE_BELOW_CLASS[iconOnlyBelow],
            className,
          )}
          {...buttonProps}
        >
          {leftIcon}
          {label}
          {rightIcon}
        </Button>
      );
    }

    const {
      key,
      label,
      position = isWrapped ? 'left' : 'right',
    } = filterConfig;

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

    if (filterConfig.type === 'customDateRange') {
      const { key: _key, type: _type, ...dropdownProps } = filterConfig;

      return (
        <FilterPrimitive.CustomDateRangeFilterDropdown
          key={key}
          {...dropdownProps}
          position={position}
          onApply={(range) => {
            onSelectDateRangeFilter(key, range);
          }}
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

  const renderIconOnlyAction = ({
    label,
    variant = 'secondary',
    leftIcon,
    rightIcon,
    iconOnlyBelow,
    className,
    appearance: _appearance,
    type: _type,
    ...buttonProps
  }: ActionFilterConfig) => (
    <Button
      key={label}
      variant={variant}
      aria-label={label}
      className={cn(
        'relative size-10 shrink-0 p-0 pointer-coarse:min-h-10 touch-hit-area [&>svg]:size-5',
        iconOnlyBelow && SHOW_BELOW_CLASS[iconOnlyBelow],
        className,
      )}
      {...buttonProps}
    >
      {leftIcon ?? rightIcon}
    </Button>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'kvt-filter w-full flex flex-wrap items-center gap-4 pb-6',
        showFilterInput ? 'justify-between' : 'justify-end',
      )}
    >
      {showFilterInput && (
        <div className="kvt-search-wrapper w-60 min-w-0 max-sm:grow max-sm:basis-0">
          <Input
            ref={inputRef}
            placeholder={placeholder}
            isSearch
            autoComplete="false"
            className="kvt-search w-full"
            inputMode="search"
            onChange={handleChangeTermOfSearch}
          />
        </div>
      )}

      {iconOnlyActions.map(renderIconOnlyAction)}

      <FilterPrimitive
        className="kvt-filter-actions flex-wrap gap-4 max-sm:basis-full"
        closeOnApply={closeOnApply}
        resetScope={tableId}
      >
        {resolvedFilters.map(renderFilter)}

        {showResetButton && (
          <FilterPrimitive.ResetButton
            className={cn('select-none max-md:ml-auto', resetButtonClassName)}
            disabled={!hasData}
            onClick={handleResetFilters}
          />
        )}
      </FilterPrimitive>
    </div>
  );
};
