import { TimePickerProps } from '../../TimePicker.types';

export type ListProps = {
  format: '12' | '24';
  isOpen: boolean;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
  time: Date;
  onSelectHour: (hour: number) => void;
  onSelectMinute: (minute: number) => void;
};

export type HoursProps = {
  format: ListProps['format'];
  hours: number;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
  onSelectHour: (hour: number) => void;
};

export type MinutesProps = {
  minutes: number;
  scrollBehavior?: TimePickerProps['scrollBehavior'];
  onSelectMinute: (minute: number) => void;
};
