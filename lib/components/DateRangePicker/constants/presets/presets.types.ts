import { DateRangePreset } from '../../contexts';

/** @deprecated Use `DateRangePresetOption`, which also carries the option's `resolve`. */
export type PresetOption = {
  value: DateRangePreset;
  label: string;
};
