import { ReactNode } from 'react';

import { RadioProps } from '../Radio/Radio.types';

export interface RadioGroupProps {
  asChild?: boolean;
  className?: RadioProps['className'];
  defaultValue?: string;
  direction?: 'row' | 'col';
  label?: string | ReactNode;
  name: string;
  options: Omit<RadioProps, 'name'>[];
  theme?: RadioProps['theme'];
  wrapperClassName?: string;
  onValueChange?: (value: string) => void;
}
