export const SINGLE_MONTH_WIDTH = 259;
export const GAP_WIDTH = 32;
export const MS_PER_MONTH = 30 * 24 * 60 * 60 * 1000;

// Height calculation constants
export const MONTH_HEADER_HEIGHT = 56; // h-6 (24px) + mb-8 (32px) - includes space for divider
export const WEEKDAY_HEADER_HEIGHT = 28; // text + pb-4
export const WEEK_ROW_HEIGHT = 38; // h-[38px] per row

export { createDayPickerClassNames } from './dayPickerClassNames';
export { getMonthName } from '../../../utils';
