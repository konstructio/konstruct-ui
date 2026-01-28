import { TimePickerProps } from '../../TimePicker.types';
export type MinutesLitProps = {
    minutes: number;
    scrollBehavior?: TimePickerProps['scrollBehavior'];
    listClassName?: TimePickerProps['listClassName'];
    listItemClassName?: TimePickerProps['listItemClassName'];
    listItemButtonClassName?: TimePickerProps['listItemButtonClassName'];
    onClose?: () => void;
};
