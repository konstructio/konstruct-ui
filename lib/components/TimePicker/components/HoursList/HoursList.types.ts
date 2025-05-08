import { TimePickerProps } from '../../TimePicker.types';

export type HourListProps = {
  hours: number;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
};
