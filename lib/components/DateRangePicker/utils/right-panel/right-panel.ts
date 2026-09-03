import { DateRangePreset, DateRangePresetOption } from '../../contexts';

import { calculatePresetRange } from '../presets/presets';

/**
 * Whether the inputs and calendar are tucked away. A preset that resolves to a
 * window speaks for itself, and no selection at all means no filter yet; only
 * the manual-selection entry needs the calendar.
 */
export const hidesRightPanel = (
  preset: DateRangePreset | null,
  presets: DateRangePresetOption[],
  revealCalendarOnCustom: boolean,
): boolean => {
  if (!revealCalendarOnCustom) {
    return false;
  }

  const range = calculatePresetRange(preset, presets);

  return preset === null || Boolean(range.from) || Boolean(range.to);
};
