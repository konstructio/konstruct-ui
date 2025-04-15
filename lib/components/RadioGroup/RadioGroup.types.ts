import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { RadioProps } from '../Radio/Radio.types';

export interface RadioGroupProps {
  asChild?: boolean;
  className?: RadioProps['className'];
  defaultChecked?: string;
  direction?: 'row' | 'col';
  label?: string | ReactNode;
  name: string;
  options: Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[];
  theme?: Theme;
  wrapperClassName?: string;
  onValueChange?: (value: string) => void;
}
