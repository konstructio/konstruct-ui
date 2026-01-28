import { DateRangePreset } from '../DateRangePicker.types';

export type PresetOption = {
  value: DateRangePreset;
  label: string;
};

export const PRESET_OPTIONS: PresetOption[] = [
  { value: 'today', label: 'Today' },
  { value: 'current-month', label: 'Current month' },
  { value: 'custom', label: 'Custom' },
  { value: 'last-7-days', label: 'Last 7 days' },
  { value: 'last-2-weeks', label: 'Last 2 weeks' },
];
