import { RadioProps } from '../Radio/Radio.types';

export type Option = {
  label: string;
  value: string;
  checked?: boolean;
};

export interface RadioGroupProps {
  label?: string;
  name: string;
  options: Option[];
  asChild?: boolean;
  theme?: RadioProps['theme'];
  className?: RadioProps['className'];
  onValueChange?: (value: string) => void;
}
