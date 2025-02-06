import { RadioCardProps } from '../RadioCard/RadioCard.types';

export type RadioCardGroupProps = {
  asChild?: boolean;
  className?: string;
  defaultValue?: string;
  direction?: 'row' | 'col';
  name: string;
  options: Omit<RadioCardProps, 'name'>[];
  theme?: RadioCardProps['theme'];
  wrapperClassName?: string;
  onValueChange?: (value: string) => void;
};
