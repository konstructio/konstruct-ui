import { DateRangePresetOption } from '../../contexts';
/**
 * The options offered when `presets` is not supplied. Each one owns the window it
 * stands for, so the panel and the resolution cannot drift apart.
 *
 * These are day-granular: `last-7-days` is seven whole days ending today, not the
 * past 7×24 hours. A consumer that needs rolling hour-precision windows supplies
 * its own `presets`.
 */
export declare const PRESET_OPTIONS: DateRangePresetOption[];
