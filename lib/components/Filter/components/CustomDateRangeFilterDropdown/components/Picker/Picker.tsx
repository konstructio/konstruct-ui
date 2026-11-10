import { FC } from 'react';

import { DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';

import { useCustomDateRangeFilterDropdown } from '../../contexts';
import { PanelActions } from '../PanelActions/PanelActions';

import { Props } from './Picker.types';

export const Picker: FC<Props> = ({ isSheet = false }) => {
  const {
    animationDuration,
    dateDisplayFormat,
    labelEndDate,
    labelStartDate,
    labelTimePeriod,
    maxDate,
    minDate,
    navigationMode,
    numberOfMonths,
    presets,
    requiredDates,
    resetKey,
    revealCalendarOnCustom,
    selectedPreset,
    selectedRange,
    showOutsideDays,
    showPresets,
    showsCalendar,
    showTime,
    timeFormat,
    onPresetChange,
    onRangeChange,
  } = useCustomDateRangeFilterDropdown();

  const keepsCustomPreset = revealCalendarOnCustom
    ? showsCalendar
    : Boolean(selectedRange);
  const defaultPreset = selectedPreset ?? (keepsCustomPreset ? 'custom' : null);

  if (isSheet) {
    return (
      <DateRangePicker
        key={resetKey}
        animationDuration={animationDuration}
        dateDisplayFormat={dateDisplayFormat}
        navigationMode={navigationMode}
        numberOfMonths={1}
        fluid
        showOutsideDays={showOutsideDays}
        defaultRange={selectedRange}
        defaultPreset="custom"
        showTime={showTime}
        timeFormat={timeFormat}
        showPresets={false}
        presets={presets}
        labelTimePeriod={labelTimePeriod}
        labelStartDate={labelStartDate}
        labelEndDate={labelEndDate}
        requiredDates={requiredDates}
        minDate={minDate}
        maxDate={maxDate}
        onRangeChange={onRangeChange}
        classNames={{ container: 'border-0 shadow-none' }}
      />
    );
  }

  return (
    <DateRangePicker
      key={resetKey}
      animationDuration={animationDuration}
      dateDisplayFormat={dateDisplayFormat}
      navigationMode={navigationMode}
      numberOfMonths={numberOfMonths}
      showOutsideDays={showOutsideDays}
      defaultRange={selectedRange}
      defaultPreset={defaultPreset}
      showTime={showTime}
      timeFormat={timeFormat}
      showPresets={showPresets}
      presets={presets}
      revealCalendarOnCustom={revealCalendarOnCustom}
      labelTimePeriod={labelTimePeriod}
      labelStartDate={labelStartDate}
      labelEndDate={labelEndDate}
      requiredDates={requiredDates}
      minDate={minDate}
      maxDate={maxDate}
      onRangeChange={onRangeChange}
      onPresetChange={onPresetChange}
      footer={<PanelActions />}
      classNames={{
        container: 'shadow-none',
      }}
    />
  );
};
