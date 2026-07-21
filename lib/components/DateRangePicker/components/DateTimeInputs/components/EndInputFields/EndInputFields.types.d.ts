import { ChangeEvent, FocusEvent } from '../../../../../../../node_modules/react';
export type Props = {
    dateValue: string;
    timeValue?: Date;
    error?: string;
    disabled?: boolean;
    showTime?: boolean;
    timeFormat?: '12' | '24';
    labelDate?: string;
    labelTime?: string;
    ariaLabelDate?: string;
    onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onDateFocus: () => void;
    onDateBlur: (e: FocusEvent<HTMLInputElement>) => void;
    onTimeChange: (time: Date) => void;
    classNames?: {
        group?: string;
        dateWrapper?: string;
        timeWrapper?: string;
        label?: string;
        input?: string;
    };
};
