import { FC, PropsWithChildren } from '../../../../node_modules/react';
import { TimePickerProps } from '../TimePicker.types';
export declare const TimePickerProvider: FC<PropsWithChildren & {
    time?: Date;
    format: NonNullable<TimePickerProps['format']>;
    onChange?: (time: Date) => void;
}>;
