import { Theme } from '@/domain/theme';

import { RadioCardProps } from '../RadioCard/RadioCard.types';

export type RadioCardGroupProps = {
  asChild?: boolean;
  className?: string;
  defaultChecked?: string;
  direction?: 'row' | 'col';
  name: string;
  options: Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[];
  theme?: Theme;
  wrapperClassName?: string;
  onValueChange?: (value: string) => void;
};
