import { TimePickerProps } from '../../TimePicker.types';

export type WrapperProps = Omit<
  TimePickerProps,
  'format' | 'time' | 'onChange'
> & {
  mode?: 'select' | 'input';
  showList?: boolean;
  error?: string;
};
