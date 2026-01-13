import { VariantProps } from 'class-variance-authority';

import { timePickerVariants } from './TimePicker.variants';

export type TimePickerProps = VariantProps<typeof timePickerVariants> & {
  format?: '12' | '24';
  scrollBehavior?: 'smooth' | 'auto';
  time?: Date;
  name?: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  listClassName?: string;
  listItemClassName?: string;
  listItemButtonClassName?: string;
};
