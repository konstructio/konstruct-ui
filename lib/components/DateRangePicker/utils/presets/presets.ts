import { PRESET_OPTIONS } from '../../constants';
import {
  DateRange,
  DateRangePreset,
  DateRangePresetOption,
} from '../../contexts';

/**
 * Calculates the date range for a given preset by asking the option itself.
 *
 * Looks the id up in `presets` (the built-ins unless the caller passes its own
 * list), so an unknown id — including `custom` — resolves to an empty range and
 * leaves the selection to the calendar.
 */
export const calculatePresetRange = (
  preset: DateRangePreset | null,
  presets: DateRangePresetOption[] = PRESET_OPTIONS,
  now: Date = new Date(),
): DateRange =>
  presets.find(({ value }) => value === preset)?.resolve(now) ?? {};
