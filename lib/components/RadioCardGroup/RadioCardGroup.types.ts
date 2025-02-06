import { RadioCardProps } from '../RadioCard/RadioCard.types';

export type RadioCardGroupProps = {
  asChild?: boolean;
  className?: string;
  defaultChecked?: string;
  direction?: 'row' | 'col';
  name: string;
  options: Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[];
  theme?: RadioCardProps['theme'];
  wrapperClassName?: string;
  onValueChange?: (value: string) => void;
};
