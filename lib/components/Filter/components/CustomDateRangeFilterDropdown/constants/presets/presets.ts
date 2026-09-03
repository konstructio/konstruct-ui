import {
  DateRange,
  DateRangePresetOption,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { durationToId, subtractDuration } from '../../utils';

import { DefaultPresetsConfig, RollingPreset } from './presets.types';

const rolling = (duration: string) => {
  return (now: Date): DateRange => ({
    from: subtractDuration(now, duration),
    to: now,
  });
};

export const DEFAULT_ROLLING_PRESETS: RollingPreset[] = [
  { value: 'last-24-hours', label: 'Last 24 hours', duration: '24h' },
  { value: 'last-7-days', label: 'Last 7 days', duration: '7days' },
  { value: 'last-30-days', label: 'Last 30 days', duration: '30days' },
];

export const createDefaultPresets = ({
  labelCustomRange,
  rollingPresets,
}: DefaultPresetsConfig): DateRangePresetOption[] => [
  ...rollingPresets.map(({ duration, label, value }) => ({
    value: value ?? `last-${durationToId(duration)}`,
    label,
    resolve: rolling(duration),
  })),
  { value: 'custom', label: labelCustomRange, resolve: () => ({}) },
];
