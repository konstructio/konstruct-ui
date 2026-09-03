import { DateRangePresetOption } from '../../../../../DateRangePicker/DateRangePicker.types';
import { DefaultPresetsConfig, RollingPreset } from './presets.types';
export declare const DEFAULT_ROLLING_PRESETS: RollingPreset[];
export declare const createDefaultPresets: ({ labelCustomRange, rollingPresets, }: DefaultPresetsConfig) => DateRangePresetOption[];
