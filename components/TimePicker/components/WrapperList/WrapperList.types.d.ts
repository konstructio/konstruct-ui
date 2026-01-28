import { TimePickerProps } from '../../TimePicker.types';
export type WrapperListProps = {
    isOpen: boolean;
    scrollBehavior?: TimePickerProps['scrollBehavior'];
    listClassName?: TimePickerProps['listClassName'];
    listItemClassName?: TimePickerProps['listItemClassName'];
    listItemButtonClassName?: TimePickerProps['listItemButtonClassName'];
    onClose?: () => void;
};
