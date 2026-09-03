import {
  DateDisplayFormat,
  DateRange,
  DateRangePresetOption,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { RollingPreset } from './constants';

export type { RollingPreset };

export type Props = {
  animationDuration?: number;
  /** Apply as soon as a preset is selected (default: false) */
  applyOnPresetSelect?: boolean;
  appliedRangeDisplay?: 'compact' | 'split';
  /** Country code for locale formatting (default: 'US') */
  countryCode?: string;
  dateDisplayFormat?: DateDisplayFormat;
  /** Initial date range */
  defaultRange?: DateRange;
  /** Label for the filter button */
  label: string;
  /** Label for the apply button (default: 'Apply') */
  labelApply?: string;
  labelCustomRange?: string;
  /** Label for the end date field (default: 'To') */
  labelEndDate?: string;
  labelRangeSeparator?: string;
  /** Label for the reset button (default: 'Clear') */
  labelReset?: string;
  /** Label for the start date field (default: 'From') */
  labelStartDate?: string;
  /** Title of the preset panel (default: 'Time period') */
  labelTimePeriod?: string;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Minimum selectable date */
  minDate?: Date;
  navigationMode?: 'independent' | 'together';
  numberOfMonths?: 1 | 2;
  /** Position of the dropdown relative to the button */
  position?: 'left' | 'right';
  /** Replaces the built-in preset options; see `DateRangePicker`'s `presets`. */
  presets?: DateRangePresetOption[];
  /** Marks the From/To fields with a required indicator (default: true) */
  requiredDates?: boolean;
  /** Reveal the calendar only on the manual-selection preset (default: false). */
  revealCalendarOnCustom?: boolean;
  rollingPresets?: RollingPreset[];
  showCustomRange?: boolean;
  showOutsideDays?: boolean;
  /** Whether to show preset options (default: true) */
  showPresets?: boolean;
  /** Whether to show time inputs (default: false) */
  showTime?: boolean;
  /** Time format: '12' for 12-hour or '24' for 24-hour */
  timeFormat?: '12' | '24';
  /** Callback when the date range is applied */
  onApply?: (range?: DateRangeWithTime) => void;
  /** Callback when the date range changes */
  onRangeChange?: (range: DateRangeWithTime) => void;
};
