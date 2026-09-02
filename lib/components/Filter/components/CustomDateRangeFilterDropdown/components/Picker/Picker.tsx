import { FC } from 'react';

import { DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';

import { useCustomDateRangeFilterDropdown } from '../../contexts';
import { PanelActions } from '../PanelActions/PanelActions';

export const Picker: FC = () => {
  const {
    animationDuration,
    labelEndDate,
    labelStartDate,
    labelTimePeriod,
    maxDate,
    minDate,
    presets,
    requiredDates,
    resetKey,
    revealCalendarOnCustom,
    selectedRange,
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
  const defaultPreset = keepsCustomPreset ? 'custom' : null;

  return (
    <DateRangePicker
      key={resetKey}
      animationDuration={animationDuration}
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
