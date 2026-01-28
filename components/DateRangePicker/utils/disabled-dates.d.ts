import { BlockedMonth } from '../contexts';
export type DateRestrictions = {
    blockedDays: Date[];
    blockedMonths: BlockedMonth[];
    minDate?: Date;
    maxDate?: Date;
};
/**
 * Checks if a date is selectable based on all restrictions.
 */
export declare const isDateSelectable: (date: Date, restrictions: DateRestrictions) => boolean;
/**
 * Creates a matcher function for react-day-picker's disabled prop.
 * Returns undefined if no restrictions are set.
 */
export declare const createDisabledMatcher: (restrictions: DateRestrictions) => ((date: Date) => boolean) | undefined;
/**
 * Checks if navigation to the previous month should be allowed.
 * Returns false if the previous month would be entirely before minDate.
 */
export declare const canNavigateToPrevMonth: (currentLeftMonth: Date, minDate?: Date) => boolean;
/**
 * Checks if navigation to the next month should be allowed.
 * Returns false if the next month would be entirely after maxDate.
 */
export declare const canNavigateToNextMonth: (currentRightMonth: Date, maxDate?: Date) => boolean;
