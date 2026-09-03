import { DateRangePreset, DateRangePresetOption } from '../../contexts';
/**
 * Whether the inputs and calendar are tucked away. A preset that resolves to a
 * window speaks for itself, and no selection at all means no filter yet; only
 * the manual-selection entry needs the calendar.
 */
export declare const hidesRightPanel: (preset: DateRangePreset | null, presets: DateRangePresetOption[], revealCalendarOnCustom: boolean) => boolean;
