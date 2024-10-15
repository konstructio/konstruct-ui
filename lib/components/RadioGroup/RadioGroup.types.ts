import { RadioProps } from '../Radio/Radio.types';

export interface RadioGroupProps {
  label?: string;
  name: string;
  options: Omit<RadioProps, 'name'>[];
  asChild?: boolean;
  theme?: RadioProps['theme'];
  className?: RadioProps['className'];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}
