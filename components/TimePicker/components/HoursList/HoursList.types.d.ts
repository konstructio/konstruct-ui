import { TimePickerProps } from '../../TimePicker.types';
export type HourListProps = {
    hours: number;
    scrollBehavior?: TimePickerProps['scrollBehavior'];
    listClassName?: TimePickerProps['listClassName'];
    listItemClassName?: TimePickerProps['listItemClassName'];
    listItemButtonClassName?: TimePickerProps['listItemButtonClassName'];
};
