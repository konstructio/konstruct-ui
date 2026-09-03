import { ChangeEvent, FocusEvent } from '../../../../../../node_modules/react';
type UseDateTimeInputsProps = {
    errorInvalidDate: string;
    errorDateNotAvailable: string;
};
export declare const useDateTimeInputs: ({ errorInvalidDate, errorDateNotAvailable, }: UseDateTimeInputsProps) => {
    timeFormat: "24" | "12";
    showTime: boolean;
    name: string | undefined;
    disabled: boolean;
    time: import('../../../contexts').TimeRange;
    startDateValue: string;
    startDateError: string | undefined;
    handleStartDateFocus: () => void;
    handleStartDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleStartDateBlur: (e: FocusEvent<HTMLInputElement>) => void;
    handleStartTimeChange: (newTime: Date) => void;
    endDateValue: string;
    endDateError: string | undefined;
    handleEndDateFocus: () => void;
    handleEndDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleEndDateBlur: (e: FocusEvent<HTMLInputElement>) => void;
    handleEndTimeChange: (newTime: Date) => void;
    startHiddenValue: string;
    endHiddenValue: string;
};
export {};
