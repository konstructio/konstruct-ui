import { ChangeEvent, FocusEvent } from 'react';

export type Props = {
  dateValue: string;
  timeValue?: Date;
  error?: string;
  disabled?: boolean;
  showTime?: boolean;
  timeFormat?: '12' | '24';
  labelDate?: string;
  labelTime?: string;
  /** Shows the required mark beside the date label */
  required?: boolean;
  ariaLabelDate?: string;
  ariaLabelTime?: string;
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
