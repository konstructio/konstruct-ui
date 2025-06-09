import { CheckboxProps as CheckboxPropsPrimitive } from '@radix-ui/react-checkbox';
import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';
import { checkboxVariants } from './Checkbox.variants';

export interface CheckboxProps
  extends Omit<CheckboxPropsPrimitive, 'onChange'>,
    Omit<VariantProps<typeof checkboxVariants>, 'checked'> {
  ariaLabelledBy?: string;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  labelClassName?: string;
  name?: string;
  theme?: Theme;
  onChange?: (checked: boolean) => void;
}
