import { TimePickerProps } from '../../TimePicker.types';

export type ListProps = {
  format: '12' | '24';
  isOpen: boolean;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
  time: Date;
};

export type HoursProps = {
  format: ListProps['format'];
  hours: number;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
};

export type MinutesProps = {
  minutes: number;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
};
