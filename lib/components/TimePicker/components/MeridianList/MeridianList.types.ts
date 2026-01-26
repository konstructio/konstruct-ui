import { TimePickerProps } from '../../TimePicker.types';

export type MeridianListProps = {
  listClassName?: TimePickerProps['listClassName'];
  listItemClassName?: TimePickerProps['listItemClassName'];
  listItemButtonClassName?: TimePickerProps['listItemButtonClassName'];
  onClose?: () => void;
};
