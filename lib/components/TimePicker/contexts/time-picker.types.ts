import type { TimePickerProps } from '../TimePicker.types';

export type TimePickerContextType = {
  time: Date | undefined;
  format: NonNullable<TimePickerProps['format']>;
  formattedTime: string;
  isAM: boolean;
  isTyping: boolean;
  onSelectHour: (hour: number) => void;
  onSelectMinute: (minute: number) => void;
  onSelectAM: () => void;
  onSelectPM: () => void;
  setTimeDirectly: (time: Date) => void;
  setIsTyping: (value: boolean) => void;
};
