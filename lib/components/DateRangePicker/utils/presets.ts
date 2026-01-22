import { DateRange, DateRangePreset } from '../DateRangePicker.types';

/**
 * Calculates the date range for a given preset.
 */
export const calculatePresetRange = (preset: DateRangePreset): DateRange => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (preset) {
    case 'today':
      return {
        from: today,
        to: today,
      };

    case 'current-month': {
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      return {
        from: firstDayOfMonth,
        to: lastDayOfMonth,
      };
    }

    case 'last-7-days': {
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
      return {
        from: sevenDaysAgo,
        to: today,
      };
    }

    case 'last-2-weeks': {
      const twoWeeksAgo = new Date(today);
      twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 13);
      return {
        from: twoWeeksAgo,
        to: today,
      };
    }

    case 'custom':
    default:
      return {};
  }
};

export interface PresetOption {
  value: DateRangePreset;
  label: string;
}

export const PRESET_OPTIONS: PresetOption[] = [
  { value: 'today', label: 'Today' },
  { value: 'current-month', label: 'Current month' },
  { value: 'custom', label: 'Custom' },
  { value: 'last-7-days', label: 'Last 7 days' },
  { value: 'last-2-weeks', label: 'Last 2 weeks' },
];
