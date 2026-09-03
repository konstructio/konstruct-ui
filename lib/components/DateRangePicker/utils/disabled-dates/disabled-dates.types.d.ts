import { BlockedMonth } from '../../contexts';
export type DateRestrictions = {
    blockedDays: Date[];
    blockedMonths: BlockedMonth[];
    minDate?: Date;
    maxDate?: Date;
};
